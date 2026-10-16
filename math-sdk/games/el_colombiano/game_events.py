"""Custom events for the 'Find the Guaro' pick bonus.

The bonus outcome is predetermined by the math (as required by Stake Engine's
outcome-based RGS). The frontend presents a grid of aguardiente bottles: the
player's k-th pick reveals the k-th prize in the sequence, and the final pick
reveals the golden Guaro that ends the bonus.
"""

GUARO_TRIGGER = "guaroBonusTrigger"
GUARO_REVEAL = "guaroPickReveal"
GUARO_END = "guaroBonusEnd"


def guaro_trigger_event(gamestate, total_picks: int, include_padding_index: bool = True) -> None:
    """Announce entry into the bonus, with triggering scatter positions."""
    scatter_positions = [dict(pos) for pos in gamestate.special_syms_on_board["scatter"]]
    if include_padding_index:
        for pos in scatter_positions:
            pos["row"] += 1
    event = {
        "index": len(gamestate.book.events),
        "type": GUARO_TRIGGER,
        "totalPicks": total_picks,
        "positions": scatter_positions,
    }
    gamestate.book.add_event(event)


def guaro_pick_event(
    gamestate, pick_number: int, total_picks: int, prize: float, running_total: float, is_guaro: bool
) -> None:
    """Reveal one bottle: its prize (in cents), the running bonus total, and whether it is the final Guaro."""
    event = {
        "index": len(gamestate.book.events),
        "type": GUARO_REVEAL,
        "pick": pick_number,
        "totalPicks": total_picks,
        "prize": int(round(prize * 100)),
        "runningTotal": int(round(running_total * 100)),
        "isGuaro": is_guaro,
    }
    gamestate.book.add_event(event)


def guaro_end_event(gamestate, winlevel_key: str = "endFeature") -> None:
    """Close the bonus with the total amount awarded (in cents) and its win level."""
    event = {
        "index": len(gamestate.book.events),
        "type": GUARO_END,
        "amount": int(
            round(min(gamestate.win_manager.freegame_wins, gamestate.config.wincap) * 100)
        ),
        "winLevel": gamestate.config.get_win_level(gamestate.win_manager.freegame_wins, winlevel_key),
    }
    gamestate.book.add_event(event)
