from game_calculations import GameCalculations
from game_events import guaro_trigger_event, guaro_pick_event, guaro_end_event
from src.calculations.lines import Lines
from src.calculations.statistics import get_random_outcome


class GameExecutables(GameCalculations):

    def evaluate_lines_board(self):
        """Populate win-data, record wins, transmit events."""
        self.win_data = Lines.get_lines(self.board, self.config, global_multiplier=self.global_multiplier)
        Lines.record_lines_wins(self)
        self.win_manager.update_spinwin(self.win_data["totalWin"])
        Lines.emit_linewin_events(self)

    def run_guaro_bonus(self) -> None:
        """Award the 'Find the Guaro' pick bonus.

        The total prize is drawn from the current distribution's weighted table
        (keyed by scatter count), then decomposed into a pick-reveal sequence.
        """
        num_scatters = self.count_special_symbols("scatter")
        self.record({"kind": num_scatters, "symbol": "scatter", "gametype": self.gametype})

        prize_tables = self.get_current_distribution_conditions()["guaro_prizes"]
        table_key = min(num_scatters, max(prize_tables.keys()))
        total_prize = get_random_outcome(prize_tables[table_key])
        # Never pay past the win cap once base-game wins are counted.
        total_prize = round(min(total_prize, self.config.wincap - self.win_manager.running_bet_win), 2)

        num_picks = self.config.guaro_picks[table_key]
        guaro_trigger_event(self, total_picks=num_picks)

        self.triggered_freegame = True
        self.gametype = self.config.freegame_type
        self.win_manager.reset_spin_win()

        running_total = 0.0
        for pick_number, prize in enumerate(self.split_guaro_prize(total_prize, num_picks), start=1):
            running_total = round(running_total + prize, 2)
            self.win_manager.update_spinwin(prize)
            guaro_pick_event(
                self,
                pick_number,
                num_picks,
                prize,
                running_total,
                is_guaro=(pick_number == num_picks),
            )
        self.win_manager.update_gametype_wins(self.gametype)
        self.evaluate_wincap()
        guaro_end_event(self)

    def split_guaro_prize(self, total_prize: float, num_picks: int) -> list:
        """Split the bonus total into pick-sized reveals that sum to it exactly."""
        if total_prize <= 0:
            return [0.0] * num_picks
        weights = [get_random_outcome({1: 40, 2: 30, 3: 20, 5: 10}) for _ in range(num_picks)]
        scale = total_prize / sum(weights)
        reveals = [round(weight * scale, 2) for weight in weights]
        reveals[-1] = round(reveals[-1] + (total_prize - sum(reveals)), 2)
        return reveals
