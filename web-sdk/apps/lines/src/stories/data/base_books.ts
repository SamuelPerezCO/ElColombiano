export default [
	{
		"id": 23,
		"payoutMultiplier": 30000,
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
					36,
					184,
					9,
					8,
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
				"totalPicks": 4,
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
				"prize": 2727,
				"runningTotal": 2727,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 4,
				"prize": 5455,
				"runningTotal": 8182,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 4,
				"prize": 13636,
				"runningTotal": 21818,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 4,
				"prize": 8182,
				"runningTotal": 30000,
				"isGuaro": true
			},
			{
				"index": 7,
				"type": "guaroBonusEnd",
				"amount": 30000,
				"winLevel": 7
			},
			{
				"index": 8,
				"type": "finalWin",
				"amount": 30000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 300
	},
	{
		"id": 28,
		"payoutMultiplier": 2000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
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
							"name": "L4"
						},
						{
							"name": "H3"
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
							"name": "L3"
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "H2"
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
							"name": "L4"
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
					]
				],
				"paddingPositions": [
					72,
					166,
					9,
					57,
					71
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
						"row": 1
					},
					{
						"reel": 2,
						"row": 1
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
				"prize": 1250,
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
		"id": 29,
		"payoutMultiplier": 500,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
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
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
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
					38,
					133,
					37,
					62,
					9
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
						"row": 1
					},
					{
						"reel": 2,
						"row": 2
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
				"prize": 192,
				"runningTotal": 192,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 192,
				"runningTotal": 384,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 116,
				"runningTotal": 500,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 500,
				"winLevel": 3
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 500
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 5
	},
	{
		"id": 57,
		"payoutMultiplier": 3000,
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
							"name": "H4"
						},
						{
							"name": "L4"
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
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
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
					166,
					107,
					37,
					72,
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
				"prize": 600,
				"runningTotal": 600,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 1200,
				"runningTotal": 1800,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 1200,
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
		"id": 71,
		"payoutMultiplier": 1000,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "H2"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H3"
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
					214,
					87,
					212,
					59,
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
				"prize": 400,
				"runningTotal": 400,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 400,
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
		"id": 74,
		"payoutMultiplier": 800,
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
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
						}
					],
					[
						{
							"name": "L1"
						},
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
							"name": "L3"
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
					214,
					21,
					193,
					7,
					166
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
						"row": 1
					},
					{
						"reel": 3,
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
				"prize": 267,
				"runningTotal": 267,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 400,
				"runningTotal": 667,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 133,
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
		"id": 80,
		"payoutMultiplier": 2000,
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
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L1"
						},
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
							"name": "L5"
						}
					],
					[
						{
							"name": "S",
							"scatter": true
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					165,
					7,
					167,
					81,
					73
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
						"row": 3
					},
					{
						"reel": 1,
						"row": 3
					},
					{
						"reel": 2,
						"row": 1
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 3,
				"prize": 400,
				"runningTotal": 400,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 800,
				"runningTotal": 1200,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 800,
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
		"id": 83,
		"payoutMultiplier": 15000,
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
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
					7,
					139,
					213,
					7,
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
				"totalPicks": 4,
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
				"totalPicks": 4,
				"prize": 5000,
				"runningTotal": 5000,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 4,
				"prize": 3333,
				"runningTotal": 8333,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 4,
				"prize": 1667,
				"runningTotal": 10000,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 4,
				"prize": 5000,
				"runningTotal": 15000,
				"isGuaro": true
			},
			{
				"index": 7,
				"type": "guaroBonusEnd",
				"amount": 15000,
				"winLevel": 7
			},
			{
				"index": 8,
				"type": "finalWin",
				"amount": 15000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 150
	},
	{
		"id": 103,
		"payoutMultiplier": 5000,
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
					9,
					7,
					8,
					8,
					36
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
						"row": 1
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
						"row": 3
					}
				]
			},
			{
				"index": 3,
				"type": "guaroPickReveal",
				"pick": 1,
				"totalPicks": 5,
				"prize": 385,
				"runningTotal": 385,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 5,
				"prize": 385,
				"runningTotal": 770,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 5,
				"prize": 1923,
				"runningTotal": 2693,
				"isGuaro": false
			},
			{
				"index": 6,
				"type": "guaroPickReveal",
				"pick": 4,
				"totalPicks": 5,
				"prize": 1923,
				"runningTotal": 4616,
				"isGuaro": false
			},
			{
				"index": 7,
				"type": "guaroPickReveal",
				"pick": 5,
				"totalPicks": 5,
				"prize": 384,
				"runningTotal": 5000,
				"isGuaro": true
			},
			{
				"index": 8,
				"type": "guaroBonusEnd",
				"amount": 5000,
				"winLevel": 6
			},
			{
				"index": 9,
				"type": "finalWin",
				"amount": 5000
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 50
	},
	{
		"id": 111,
		"payoutMultiplier": 2000,
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
							"name": "L2"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "H1"
						}
					],
					[
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
							"name": "L3"
						},
						{
							"name": "H3"
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
					213,
					152,
					167,
					60,
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
						"reel": 0,
						"row": 2
					},
					{
						"reel": 2,
						"row": 1
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
				"prize": 1000,
				"runningTotal": 1000,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 500,
				"runningTotal": 1500,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 500,
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
		"id": 116,
		"payoutMultiplier": 500,
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					207,
					167,
					37,
					8,
					213
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
				"totalPicks": 3,
				"prize": 312,
				"runningTotal": 312,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 125,
				"runningTotal": 437,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 63,
				"runningTotal": 500,
				"isGuaro": true
			},
			{
				"index": 6,
				"type": "guaroBonusEnd",
				"amount": 500,
				"winLevel": 3
			},
			{
				"index": 7,
				"type": "finalWin",
				"amount": 500
			}
		],
		"criteria": "freegame",
		"baseGameWins": 0,
		"freeGameWins": 5
	},
	{
		"id": 130,
		"payoutMultiplier": 1500,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
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
							"name": "L4"
						},
						{
							"name": "H3"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "L4"
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
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
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					72,
					7,
					214,
					56,
					178
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
				"prize": 625,
				"runningTotal": 875,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 625,
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
		"id": 143,
		"payoutMultiplier": 800,
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						}
					],
					[
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
						},
						{
							"name": "L4"
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
							"name": "L1"
						},
						{
							"name": "L4"
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
					165,
					175,
					9,
					34,
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
						"reel": 0,
						"row": 3
					},
					{
						"reel": 2,
						"row": 1
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
				"prize": 267,
				"runningTotal": 267,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 267,
				"runningTotal": 534,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 266,
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
		"id": 145,
		"payoutMultiplier": 2000,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
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
							"name": "L4"
						},
						{
							"name": "H3"
						}
					],
					[
						{
							"name": "H1"
						},
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
							"name": "H4"
						},
						{
							"name": "L2"
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
					72,
					105,
					78,
					9,
					7
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
				"prize": 600,
				"runningTotal": 600,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 400,
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
		"id": 158,
		"payoutMultiplier": 800,
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
							"name": "L2"
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
							"name": "S",
							"scatter": true
						},
						{
							"name": "H2"
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
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
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					37,
					171,
					167,
					98,
					8
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
						"row": 1
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
				"prize": 320,
				"runningTotal": 320,
				"isGuaro": false
			},
			{
				"index": 4,
				"type": "guaroPickReveal",
				"pick": 2,
				"totalPicks": 3,
				"prize": 160,
				"runningTotal": 480,
				"isGuaro": false
			},
			{
				"index": 5,
				"type": "guaroPickReveal",
				"pick": 3,
				"totalPicks": 3,
				"prize": 320,
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
		"id": 0,
		"payoutMultiplier": 0,
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
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
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
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					216,
					205,
					195,
					16,
					65
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 1,
		"payoutMultiplier": 20,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						}
					],
					[
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
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						}
					],
					[
						{
							"name": "L5"
						},
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
						}
					]
				],
				"paddingPositions": [
					54,
					155,
					9,
					148,
					174
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 20,
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
						],
						"meta": {
							"lineIndex": 16,
							"multiplier": 1,
							"winWithoutMult": 20,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 20,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 20
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 20
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.2,
		"freeGameWins": 0
	},
	{
		"id": 2,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "L3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
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
							"name": "H1"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
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
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					139,
					33,
					94,
					154,
					121
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 3,
		"payoutMultiplier": 20,
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
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
							"name": "H1"
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L5"
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
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					20,
					11,
					118,
					160,
					71
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 20,
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
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 14,
							"multiplier": 1,
							"winWithoutMult": 20,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 20,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 20
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 20
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.2,
		"freeGameWins": 0
	},
	{
		"id": 4,
		"payoutMultiplier": 0,
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
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L2"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
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
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						}
					],
					[
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
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					189,
					91,
					203,
					176,
					215
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 5,
		"payoutMultiplier": 0,
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
							"name": "L2"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "L4"
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
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H1"
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
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					210,
					20,
					124,
					195,
					66
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 6,
		"payoutMultiplier": 60,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
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
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "H4"
						},
						{
							"name": "H3"
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					161,
					160,
					149,
					15,
					147
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 60,
				"wins": [
					{
						"symbol": "L3",
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
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 6,
							"multiplier": 1,
							"winWithoutMult": 30,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					},
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
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 17,
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
				"amount": 60,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 60
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 60
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.6,
		"freeGameWins": 0
	},
	{
		"id": 7,
		"payoutMultiplier": 200,
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
							"name": "L2"
						},
						{
							"name": "H4"
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
							"name": "H4"
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
							"name": "H3"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
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
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
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
							"name": "L2"
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
					]
				],
				"paddingPositions": [
					148,
					116,
					186,
					149,
					113
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "H4",
						"kind": 4,
						"win": 200,
						"positions": [
							{
								"reel": 0,
								"row": 2
							},
							{
								"reel": 1,
								"row": 1
							},
							{
								"reel": 2,
								"row": 2
							},
							{
								"reel": 3,
								"row": 3
							}
						],
						"meta": {
							"lineIndex": 8,
							"multiplier": 1,
							"winWithoutMult": 200,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 200
			}
		],
		"criteria": "basegame",
		"baseGameWins": 2,
		"freeGameWins": 0
	},
	{
		"id": 8,
		"payoutMultiplier": 0,
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
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
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
							"name": "L5"
						},
						{
							"name": "H3"
						},
						{
							"name": "L1"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					128,
					118,
					154,
					20,
					85
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 9,
		"payoutMultiplier": 0,
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "L3"
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
							"name": "L1"
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
							"name": "H1"
						},
						{
							"name": "H2"
						}
					]
				],
				"paddingPositions": [
					109,
					123,
					147,
					3,
					52
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 10,
		"payoutMultiplier": 30,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
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
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H3"
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
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					48,
					61,
					153,
					7,
					199
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
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
								"row": 3
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 7,
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
				"type": "finalWin",
				"amount": 30
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.3,
		"freeGameWins": 0
	},
	{
		"id": 11,
		"payoutMultiplier": 0,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
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
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "H2"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
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
					168,
					135,
					170,
					89,
					36
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 12,
		"payoutMultiplier": 0,
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
							"name": "H1"
						},
						{
							"name": "H2"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						}
					],
					[
						{
							"name": "L5"
						},
						{
							"name": "L5"
						},
						{
							"name": "L4"
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					175,
					175,
					205,
					217,
					47
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 13,
		"payoutMultiplier": 100,
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
							"name": "H4"
						},
						{
							"name": "L5"
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
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
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
							"name": "H3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
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
							"name": "L4"
						},
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
						}
					],
					[
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
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					65,
					74,
					187,
					18,
					168
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "H4",
						"kind": 3,
						"win": 100,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 12,
							"multiplier": 1,
							"winWithoutMult": 100,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 100,
				"winLevel": 3
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 100
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 100
			}
		],
		"criteria": "basegame",
		"baseGameWins": 1,
		"freeGameWins": 0
	},
	{
		"id": 14,
		"payoutMultiplier": 0,
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
							"name": "H3"
						},
						{
							"name": "L1"
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
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
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
							"name": "H3"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L1"
						},
						{
							"name": "L4"
						}
					]
				],
				"paddingPositions": [
					2,
					133,
					188,
					9,
					40
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 15,
		"payoutMultiplier": 100,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "H4"
						},
						{
							"name": "L1"
						},
						{
							"name": "H2"
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H4"
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
							"name": "L1"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L4"
						}
					],
					[
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
							"name": "L4"
						},
						{
							"name": "H2"
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
					]
				],
				"paddingPositions": [
					190,
					154,
					79,
					5,
					202
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 100,
				"wins": [
					{
						"symbol": "L1",
						"kind": 4,
						"win": 100,
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
							},
							{
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 1,
							"multiplier": 1,
							"winWithoutMult": 100,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 100,
				"winLevel": 3
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 100
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 100
			}
		],
		"criteria": "basegame",
		"baseGameWins": 1,
		"freeGameWins": 0
	},
	{
		"id": 16,
		"payoutMultiplier": 600,
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
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "H4"
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
							"name": "H2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L3"
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
							"name": "H3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L1"
						},
						{
							"name": "H3"
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
							"name": "L1"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					206,
					77,
					93,
					74,
					44
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 600,
				"wins": [
					{
						"symbol": "H2",
						"kind": 3,
						"win": 300,
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
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 5,
							"multiplier": 1,
							"winWithoutMult": 300,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					},
					{
						"symbol": "H2",
						"kind": 3,
						"win": 300,
						"positions": [
							{
								"reel": 0,
								"row": 1
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 12,
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
				"amount": 600,
				"winLevel": 5
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 600
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 600
			}
		],
		"criteria": "basegame",
		"baseGameWins": 6,
		"freeGameWins": 0
	},
	{
		"id": 17,
		"payoutMultiplier": 140,
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
							"name": "W",
							"wild": true,
							"multiplier": 1
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
							"name": "L1"
						},
						{
							"name": "H1"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
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
							"name": "L4"
						},
						{
							"name": "L2"
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
							"name": "L1"
						},
						{
							"name": "L2"
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
							"name": "L5"
						},
						{
							"name": "H2"
						},
						{
							"name": "L2"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					160,
					126,
					46,
					122,
					75
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 140,
				"wins": [
					{
						"symbol": "L2",
						"kind": 4,
						"win": 70,
						"positions": [
							{
								"reel": 0,
								"row": 3
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
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 7,
							"multiplier": 1,
							"winWithoutMult": 70,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					},
					{
						"symbol": "L2",
						"kind": 4,
						"win": 70,
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
							},
							{
								"reel": 3,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 16,
							"multiplier": 1,
							"winWithoutMult": 70,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 140,
				"winLevel": 3
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 140
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 140
			}
		],
		"criteria": "basegame",
		"baseGameWins": 1.4,
		"freeGameWins": 0
	},
	{
		"id": 18,
		"payoutMultiplier": 0,
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
							"name": "L2"
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
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
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
							"name": "L3"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
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
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						}
					]
				],
				"paddingPositions": [
					135,
					74,
					149,
					37,
					152
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 19,
		"payoutMultiplier": 0,
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
							"name": "H1"
						},
						{
							"name": "H2"
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
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
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
							"name": "H1"
						},
						{
							"name": "H1"
						},
						{
							"name": "H3"
						}
					]
				],
				"paddingPositions": [
					175,
					201,
					196,
					38,
					66
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	},
	{
		"id": 20,
		"payoutMultiplier": 200,
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
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
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
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "H1"
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
							"name": "L1"
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
							"name": "L5"
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
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						}
					]
				],
				"paddingPositions": [
					60,
					201,
					0,
					3,
					94
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 200,
				"wins": [
					{
						"symbol": "H4",
						"kind": 4,
						"win": 200,
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
							},
							{
								"reel": 3,
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 11,
							"multiplier": 1,
							"winWithoutMult": 200,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 200,
				"winLevel": 4
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 200
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 200
			}
		],
		"criteria": "basegame",
		"baseGameWins": 2,
		"freeGameWins": 0
	},
	{
		"id": 21,
		"payoutMultiplier": 20,
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
							"name": "L4"
						},
						{
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L2"
						},
						{
							"name": "H4"
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
							"name": "L5"
						},
						{
							"name": "L4"
						},
						{
							"name": "L3"
						},
						{
							"name": "S",
							"scatter": true
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
							"name": "L1"
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
							"name": "L3"
						},
						{
							"name": "H4"
						},
						{
							"name": "H1"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					35,
					62,
					6,
					156,
					114
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "winInfo",
				"totalWin": 20,
				"wins": [
					{
						"symbol": "L4",
						"kind": 3,
						"win": 20,
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
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 6,
							"multiplier": 1,
							"winWithoutMult": 20,
							"globalMult": 1,
							"lineMultiplier": 1
						}
					}
				]
			},
			{
				"index": 2,
				"type": "setWin",
				"amount": 20,
				"winLevel": 2
			},
			{
				"index": 3,
				"type": "setTotalWin",
				"amount": 20
			},
			{
				"index": 4,
				"type": "finalWin",
				"amount": 20
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.2,
		"freeGameWins": 0
	},
	{
		"id": 22,
		"payoutMultiplier": 30,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
						},
						{
							"name": "H4"
						},
						{
							"name": "L2"
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
							"name": "H1"
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
							"name": "L5"
						}
					],
					[
						{
							"name": "H1"
						},
						{
							"name": "L2"
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
							"name": "H4"
						},
						{
							"name": "H3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L4"
						},
						{
							"name": "H2"
						}
					],
					[
						{
							"name": "L1"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L3"
						},
						{
							"name": "L5"
						}
					]
				],
				"paddingPositions": [
					55,
					188,
					92,
					144,
					194
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
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
								"row": 2
							},
							{
								"reel": 1,
								"row": 2
							},
							{
								"reel": 2,
								"row": 1
							}
						],
						"meta": {
							"lineIndex": 14,
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
				"type": "finalWin",
				"amount": 30
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.3,
		"freeGameWins": 0
	},
	{
		"id": 24,
		"payoutMultiplier": 30,
		"events": [
			{
				"index": 0,
				"type": "reveal",
				"board": [
					[
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
							"name": "L4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L3"
						},
						{
							"name": "L1"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H2"
						},
						{
							"name": "L3"
						},
						{
							"name": "L4"
						},
						{
							"name": "H4"
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
							"name": "H3"
						},
						{
							"name": "L5"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "H1"
						}
					]
				],
				"paddingPositions": [
					10,
					193,
					65,
					8,
					78
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
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
								"row": 2
							},
							{
								"reel": 1,
								"row": 3
							},
							{
								"reel": 2,
								"row": 2
							}
						],
						"meta": {
							"lineIndex": 9,
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
				"type": "finalWin",
				"amount": 30
			}
		],
		"criteria": "basegame",
		"baseGameWins": 0.3,
		"freeGameWins": 0
	},
	{
		"id": 25,
		"payoutMultiplier": 0,
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
							"name": "L2"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
						},
						{
							"name": "W",
							"wild": true,
							"multiplier": 1
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
							"name": "H4"
						},
						{
							"name": "L5"
						},
						{
							"name": "L2"
						}
					],
					[
						{
							"name": "L3"
						},
						{
							"name": "H1"
						},
						{
							"name": "L3"
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
							"name": "L3"
						},
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
							"name": "L2"
						}
					],
					[
						{
							"name": "H2"
						},
						{
							"name": "H4"
						},
						{
							"name": "L4"
						},
						{
							"name": "L2"
						},
						{
							"name": "L1"
						}
					]
				],
				"paddingPositions": [
					51,
					168,
					52,
					110,
					153
				],
				"gameType": "basegame",
				"anticipation": [
					0,
					0,
					0,
					0,
					0
				]
			},
			{
				"index": 1,
				"type": "setTotalWin",
				"amount": 0
			},
			{
				"index": 2,
				"type": "finalWin",
				"amount": 0
			}
		],
		"criteria": "0",
		"baseGameWins": 0,
		"freeGameWins": 0
	}
];
