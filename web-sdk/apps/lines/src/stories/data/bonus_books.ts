export default [
	{
		"id": 0,
		"payoutMultiplier": 800,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					59,
					8,
					166,
					88,
					165
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 200,
				"runningTotal": 200,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 400,
				"runningTotal": 600,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 200,
				"runningTotal": 800,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 800,
				"winLevel": 3
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 800
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 8
	},
	{
		"id": 1,
		"payoutMultiplier": 50000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					8,
					7,
					37,
					7,
					70
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 5,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 3
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 5,
				"prize": 14286,
				"runningTotal": 14286,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 5,
				"prize": 14286,
				"runningTotal": 28572,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 5,
				"prize": 7143,
				"runningTotal": 35715,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 5,
				"prize": 7143,
				"runningTotal": 42858,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 5,
				"totalPicks": 5,
				"prize": 7142,
				"runningTotal": 50000,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 50000,
				"winLevel": 8
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 50000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 500
	},
	{
		"id": 2,
		"payoutMultiplier": 1000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					49,
					8,
					212,
					183,
					167
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 429,
				"runningTotal": 429,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 286,
				"runningTotal": 715,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 285,
				"runningTotal": 1000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 1000,
				"winLevel": 4
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 1000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 10
	},
	{
		"id": 3,
		"payoutMultiplier": 830,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					9,
					137,
					38,
					92,
					70
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 30,
				"wins": [
					{
						"symbol": "L3",
						"kind": 3,
						"win": 30,
						"positions": [
							{
								"reel": 0,
								"row": 3
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 11,
							"multiplier": 1,
							"winWithoutMult": 30,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 30,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 30
			},
			{
				"index": 4,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 267,
				"runningTotal": 267,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 267,
				"runningTotal": 534,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 266,
				"runningTotal": 800,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 800,
				"winLevel": 3
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 830
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.3,
		"freeGameWins": 8
	},
	{
		"id": 4,
		"payoutMultiplier": 1300,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					165,
					28,
					38,
					95,
					214
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 300,
				"wins": [
					{
						"symbol": "H2",
						"kind": 3,
						"win": 300,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 3
							}
						],
						"meta": {
							"lineIndex": 15,
							"multiplier": 1,
							"winWithoutMult": 300,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 300,
				"winLevel": 4
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 300
			},
			{
				"index": 4,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 200,
				"runningTotal": 200,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 400,
				"runningTotal": 600,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 400,
				"runningTotal": 1000,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 1000,
				"winLevel": 4
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 1300
			}
		],
		"criteria": "freegame",
		"baseGameWins": 3,
		"freeGameWins": 10
	},
	{
		"id": 5,
		"payoutMultiplier": 2000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					37,
					205,
					72,
					8,
					166
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 4,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 4,
				"prize": 545,
				"runningTotal": 545,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 4,
				"prize": 909,
				"runningTotal": 1454,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 4,
				"prize": 364,
				"runningTotal": 1818,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 4,
				"prize": 182,
				"runningTotal": 2000,
				"isGuaro": true
			},
			{
				"index": 7,
				"type": "guaroBonusEnd",
				"amount": 2000,
				"winLevel": 5
			},
			{
				"index": 8,
				"type": "finalWin",
				"amount": 2000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 20
	},
	{
		"id": 6,
		"payoutMultiplier": 1000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					7,
					22,
					111,
					9,
					9
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 4,
						"row": 1
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 250,
				"runningTotal": 250,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 500,
				"runningTotal": 750,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 250,
				"runningTotal": 1000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 1000,
				"winLevel": 4
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 1000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 10
	},
	{
		"id": 7,
		"payoutMultiplier": 1000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					167,
					7,
					213,
					133,
					104
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 500,
				"runningTotal": 500,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 300,
				"runningTotal": 800,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 200,
				"runningTotal": 1000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 1000,
				"winLevel": 4
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 1000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 10
	},
	{
		"id": 8,
		"payoutMultiplier": 2000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					8,
					179,
					165,
					10,
					7
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 182,
				"runningTotal": 182,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 909,
				"runningTotal": 1091,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 909,
				"runningTotal": 2000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 2000,
				"winLevel": 5
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 2000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 20
	},
	{
		"id": 9,
		"payoutMultiplier": 800,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					83,
					9,
					36,
					19,
					37
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 1,
						"row": 1
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 364,
				"runningTotal": 364,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 364,
				"runningTotal": 728,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 72,
				"runningTotal": 800,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 800,
				"winLevel": 3
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 800
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 8
	},
	{
		"id": 10,
		"payoutMultiplier": 530,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L1"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					213,
					7,
					203,
					47,
					165
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 30,
				"wins": [
					{
						"symbol": "L2",
						"kind": 3,
						"win": 30,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 1,
							"multiplier": 1,
							"winWithoutMult": 30,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 30,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 30
			},
			{
				"index": 4,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 100,
				"runningTotal": 100,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 100,
				"runningTotal": 200,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 300,
				"runningTotal": 500,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 500,
				"winLevel": 3
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 530
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0.3,
		"freeGameWins": 5
	},
	{
		"id": 11,
		"payoutMultiplier": 1500,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					142,
					7,
					70,
					9,
					0
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 1
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 375,
				"runningTotal": 375,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 750,
				"runningTotal": 1125,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 375,
				"runningTotal": 1500,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 1500,
				"winLevel": 4
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 1500
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 15
	},
	{
		"id": 12,
		"payoutMultiplier": 2000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H1"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					216,
					54,
					38,
					9,
					36
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					1
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 2,
						"row": 1
					},
					{
						"reel": 3,
						"row": 1
					},
					{
						"reel": 4,
						"row": 3
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 500,
				"runningTotal": 500,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 500,
				"runningTotal": 1000,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 1000,
				"runningTotal": 2000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 2000,
				"winLevel": 5
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 2000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 20
	},
	{
		"id": 13,
		"payoutMultiplier": 3000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					70,
					119,
					8,
					8,
					175
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					1,
					2
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 3,
				"positions": [
					{
						"reel": 0,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 429,
				"runningTotal": 429,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 2143,
				"runningTotal": 2572,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 428,
				"runningTotal": 3000,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 3000,
				"winLevel": 5
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 3000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 30
	},
	{
		"id": 14,
		"payoutMultiplier": 7500,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "H4"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L5"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L4"
						},
						{
							"name": "H2"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					37,
					7,
					37,
					8,
					37
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					1,
					2,
					3
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "guaroBonusTrigger",
				"totalPicks": 5,
				"positions": [
					{
						"reel": 0,
						"row": 2
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 2
					},
					{
						"reel": 3,
						"row": 2
					},
					{
						"reel": 4,
						"row": 2
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 5,
				"prize": 682,
				"runningTotal": 682,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 5,
				"prize": 2045,
				"runningTotal": 2727,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 5,
				"prize": 2045,
				"runningTotal": 4772,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 5,
				"prize": 2045,
				"runningTotal": 6817,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 5,
				"totalPicks": 5,
				"prize": 683,
				"runningTotal": 7500,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 7500,
				"winLevel": 6
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 7500
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 75
	}
];
