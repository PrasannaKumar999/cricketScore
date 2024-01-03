import { useEffect, useState } from 'react'

export default function Utility() {

    let batsmenCollection = {
        "name": "",
        "runs": 0,
        "ballsFaced": 0,
        "fours": 0,
        "sixes": 0,
        "strikeRate": "0",
        "status": "notout",
        "dismissalType": ""
    }

    let bowlingCollection = {
        "name": "",
        "overs": 0,
        "balls": 0,
        "maidens": 0,
        "runs": 0,
        "wickets": 0,
        "economy": 0
    }

    let inningsCollection = {
        "playingTeams": ["INDIA", "NEWZEALAND"],
        "battingTeam": "",
        "bowlingTeam": "",
        "runs": 0,
        "wickets": 0,
        "overs": 0,
        "extras": 0,
        "striker": {
            "name": "",
            "runs": 0,
            "ballsFaced": 0,
            "fours": 0,
            "sixes": 0,
            "strikeRate": 0
        },
        "nonStriker": {
            "name": "",
            "runs": 0,
            "ballsFaced": 0,
            "fours": 0,
            "sixes": 0,
            "strikeRate": 0
        },
        "currentBowler": {
            "name": "",
            "oversBowled": 0,
            "runsGiven": 0,
            "wicketsTaken": 0,
            "economyRate": 0
        },
        "batsmen": [
            {
                "name": "",
                "runs": 0,
                "ballsFaced": 0,
                "fours": 0,
                "sixes": 0,
                "strikeRate": 0
            },
            // Add more batsman details as needed
        ],
        "bowlers": [
            {
                "name": "",
                "oversBowled": 0,
                "runsGiven": 0,
                "wicketsTaken": 0,
                "economyRate": 0
            },
        ],
        "fallOfWickets": [
            { "wicketNumber": 1, "player": "Player 2", "score": 30, "overs": "5.2" },
        ],
        "partnerships": [
            { "players": ["Player 1", "Player 2"], "runs": 50, "overs": "6.4" },
        ]
        // Add other details like events, comments, etc.
    }

    let matchCollection = {
        details: {
            "match_details": {
                "date": "12-12-2023",
                "venue": "MUMBAI",
                "teams": {
                    "team1": "INDIA",
                    "team2": "NEW ZEALAND"
                },
                "squads": {
                    "teamSquad1": [
                        "RohitSharma",
                        "ShubmanGill",
                        "ViratKohli",
                        "ShreyasIyer",
                        "klRahul",
                        "SuryaKumarYadav",
                        "RavindraJadeja",
                        "MohammedShami",
                        "JaspritBumrah",
                        "KuldeepYadav",
                        "MohammedSiraj"
                    ],
                    "teamSquad2": [
                        "Mark Chapman",
                        "Daryl Mitchell",
                        "Will Young",
                        "James Neesham",
                        "Kyle Jamieson",
                        "Mitchell Santner",
                        "Rachin Ravindra",
                        "Devon Conway",
                        "Tim Southee,",
                        "Lockie Ferguson",
                        "Trent Boult"
                    ]
                },
                "format": "T20",
                "time": "8:30 PM",
                "status": "upcoming",
                "series": "New Zealand tour of India, 2023-24 "
            },
            "innings": [
                {
                    "team": "INDIA",
                    "runs": 0,
                    "wickets": 0,
                    "overs": 0,
                    "balls": 0,
                    "players": [
                        {
                            "player_name": "Player 1",
                            "runs": 0,
                            "balls_faced": 0,
                            "fours": 0,
                            "sixes": 0,
                            "status": "not out",
                            "dismissal_type": "type_of_dismissal"
                        }
                    ],
                    "bowlers": [
                        {
                            "bowler_name": "Bowler 1",
                            "overs_bowled": 0,
                            "maidens": 0,
                            "runs_conceded": 0,
                            "wickets_taken": 0
                        }
                    ],
                    "runrate": "0"
                },
                {
                    "team": "NEW ZEALAND",
                    "runs": 0,
                    "wickets": 0,
                    "overs": 0,
                    "balls": 0,
                    "players": [
                        {
                            "player_name": "Player 1",
                            "runs": 0,
                            "balls_faced": 0,
                            "fours": 0,
                            "sixes": 0,
                            "status": "not out",
                            "dismissal_type": "type_of_dismissal"
                        }
                    ],
                    "bowlers": [
                        {
                            "bowler_name": "Bowler 1",
                            "overs_bowled": 0,
                            "maidens": 0,
                            "runs_conceded": 0,
                            "wickets_taken": 0
                        }
                    ],
                    "runrate": 0
                }
            ]
        }
    }

    let cricket = {
        "type": "T20",
        "series": "Indian Premier League, 2023",
        "status": "Mumbai Indians opt to bat",
        "state": "ongoing",
        "venue": {
            "name": "chinna swamy stadium",
            "location": "Bangalore, India"
        },
        "score": {
            "runRate": "0",
            "target": "",
            "detail": {
                "currentInnings": 1,
                "batting": {
                    "name": "Mumbai Indians",
                    "shortName": "MI",
                    "score": 0,
                    "overs": 0,
                    "wickets": 0,
                    "balls": 0
                }
            },
            "partnership": "0(0)",
            "batsmen": [
                [
                    { name: "Rohit Sharma", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Quinton de Kock", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Suryakumar Yadav", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Ishan Kishan", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Hardik Pandya", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Kieron Pollard", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Krunal Pandya", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Jayant Yadav", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Rahul Chahar", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Jasprit Bumrah", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Trent Boult", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                ],
                [
                    { name: "Virat Kohli", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Devdutt Padikkal", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "AB de Villiers", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Glenn Maxwell", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Dan Christian", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Washington Sundar", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Kyle Jamieson", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Navdeep Saini", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Yuzvendra Chahal", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Mohammed Siraj", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                    { name: "Harshal Patel", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout' },
                ],
            ],
            "bowlers": [
                [
                    { name: "Trent Boult", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Jasprit Bumrah", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Rahul Chahar", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Jayant Yadav", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Krunal Pandya", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Kieron Pollard", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }
                ],
                [
                    { name: "Harshal Patel", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Mohammed Siraj", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Yuzvendra Chahal", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Navdeep Saini", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Kyle Jamieson", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },

                ]
            ],
            "lastBallDetail": {
                "batsman": [
                    [
                        null
                    ]
                ],
                "bowler": [
                    [
                        null
                    ]
                ],
                "commentary": "",
                "score": 0
            }
        },
        "teams": {
            "team1": {
                "name": "Mumbai Indians",
                "shortName": "MI",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0
            },
            "team2": {
                "name": "Royal Challengers Bangalore",
                "shortName": "RCB",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0
            }
        }
    }

    const cricketCollection = {
        "type": "",
        "series": "",
        "status": "india opt to bat",
        "state": "ongoing",
        "venue": {
            "name": "Boland Park, Paarl ",
            "location": "South Africa"
        },
        "score": {
            "runRate": 0,
            "target": "",
            "detail": {
                "currentInnings": 1,
                "batting": {
                    "name": "",
                    "shortName": "",
                    "score": 0,
                    "overs": 0,
                    "wickets": 0,
                    "balls": 0
                }
            },
            "partnership": "0(0)",
            "batsmen": [],
            "bowlers": [],
            "lastBallDetail": {
                "batsman": [
                    [
                        null
                    ]
                ],
                "bowler": [
                    [
                        null
                    ]
                ],
                "commentary": "",
                "score": 0
            }
        },
        "teams": {
            "team1": {
                "name": "",
                "shortName": "",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0,
                "runRate": "0"
            },
            "team2": {
                "name": "",
                "shortName": "",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0,
                "runRate": ""
            }
        }
    }

    const [matchName, setMatchName] = useState('Indian Premier League, 2023');
    const [location, setLocation] = useState('');
    const [stadium, setStadium] = useState('');
    const [matchId, setMatchId] = useState('');
    const [team1Name, setTeam1Name] = useState('');
    const [team1ShortName, setTeam1ShortName] = useState('');
    const [team2ShortName, setTeam2ShortName] = useState('');
    const [team2Name, setTeam2Name] = useState('');
    const [players1, setPlayers1] = useState(Array(11).fill(''));
    const [players2, setPlayers2] = useState(Array(11).fill(''));

    const [playerData, setPlayerData] = useState();

    const [playerRecord, setPlayerRecord] = useState();
    const [teamData, setTeamData] = useState();

    let baseUrl = "http://localhost:5050"
    const [selectedFormat, setSelectedFormat] = useState('ODI');


    const itemsList = [];


    const addField = (fieldName) => {
        fieldName === 'player1' ? setPlayers1(prevPlayers => [...prevPlayers, '']) : setPlayers2(prevPlayers => [...prevPlayers, ''])
    };

    const deleteField = (fieldName, index) => {
        // if (fieldName === 'player') {
        const newPlayers = fieldName === 'player1' ? [...players1] : [...players2];
        newPlayers.splice(index, 1);
        fieldName === 'player1' ? setPlayers1(newPlayers) : setPlayers2(newPlayers);
        // }
    };



    for (let i = 0; i < 11; i++) {
        itemsList.push(<input type="text" />);
    }


    const handlePlayerChange = (index, team) => (e) => {
        const newPlayers = team === 1 ? [...players1] : [...players2];
        newPlayers[index] = e.target.value;

        team === 1 ? setPlayers1(newPlayers) : setPlayers2(newPlayers);
    };


    // const handleSubmit = async () => {
    //     const playerRecords = [];
    //     players1.forEach((ele, index) => {
    //         const newPlayer = {
    //             ...batsmenCollection,
    //             "player_name": `${ele}`,
    //             "parentid": `${matchId}-${team1Name}-${ele}`
    //         };

    //         playerRecords.push(newPlayer);
    //     })
    //     players2.forEach((ele, index) => {
    //         const newPlayer = {
    //             ...batsmenCollection,
    //             "player_name": `${ele}`,
    //             "parentid": `${matchId}-${team2Name}-${ele}`
    //         };

    //         playerRecords.push(newPlayer);
    //     })

    //     setPlayerRecord(playerRecords)

    //     console.log(playerRecords);

    //     let totalTeamPlayerID = []
    //     if (playerData) {
    //         playerData.forEach((ele, index) => {
    //             totalTeamPlayerID.push(ele.parentid)
    //         })
    //     }

    //     setTeamData(totalTeamPlayerID)
    //     console.log(teamData);

    //     let team1 = [];
    //     let team2 = [];

    //     totalTeamPlayerID.forEach((ele, index) => {
    //         if (ele.includes("INDIA")) {
    //             team1.push(ele)
    //         } else {
    //             team2.push(ele)
    //         }
    //     })
    //     console.log(team1, team2);



    //     // let matchResults = await fetch(`${baseUrl}/saveMatch`, {
    //     //     method: "POST",
    //     //     headers: {
    //     //         "content-type": "application/json"
    //     //     },
    //     //     body: JSON.stringify({
    //     //         match: cricket
    //     //     })
    //     // }).then(resp => resp.json());
    // };

    const handleSubmit = async () => {
        cricketCollection.type = selectedFormat;
        cricketCollection.venue.location = location;
        cricketCollection.venue.name = stadium;
        cricketCollection.status = `${team1Name} opt to bat`;
        cricketCollection.series = matchName;
        cricketCollection.teams.team1.currentStriker = players1[0]
        cricketCollection.teams.team1.currentNonStriker = players1[1]

        cricketCollection.teams.team2.currentStriker = players2[0]
        cricketCollection.teams.team2.currentNonStriker = players2[1]
        cricketCollection.type = selectedFormat;
        cricketCollection.teams.team1.name = team1Name;
        cricketCollection.teams.team1.shortName = team1ShortName;
        cricketCollection.teams.team2.name = team2Name;
        cricketCollection.teams.team2.shortName = team2ShortName;
        cricketCollection.score.detail.batting.name = team1Name;
        cricketCollection.score.detail.batting.shortName = team1ShortName;
        cricketCollection.score.recentOvers = []
        const batsmenData1 = [];
        const batsmenData2 = [];
        const completeBatsmens = [];

        let bowlersData1 = [];
        let bowlersData2 = [];
        const completeBowlers = [];

        players1.forEach((ele, index) => {
            const newPlayer = {
                ...batsmenCollection,
                "name": `${ele}`,
            };

            batsmenData1.push(newPlayer);
        })
        // bowlersData1 = batsmenData1.slice(-5)
        batsmenData1.slice(-5).forEach((ele, index) => {
            const newPlayer = {
                ...bowlingCollection,
                "name": `${ele.name}`,
            };

            bowlersData1.push(newPlayer);
        })
        players2.forEach((ele, index) => {
            const newPlayer = {
                ...batsmenCollection,
                "name": `${ele}`,
            };

            batsmenData2.push(newPlayer);
        })
        // bowlersData2 = batsmenData2.slice(-5)
        batsmenData2.slice(-5).forEach((ele, index) => {
            const newPlayer = {
                ...bowlingCollection,
                "name": `${ele.name}`,
            };

            bowlersData2.push(newPlayer);
        })


        completeBatsmens.push(batsmenData1, batsmenData2);
        completeBowlers.push(bowlersData1, bowlersData2);
        cricketCollection.score.batsmen = completeBatsmens;
        cricketCollection.score.bowlers = completeBowlers;

        cricketCollection.teams.team1.currentBowler = bowlersData1[0].name
        cricketCollection.teams.team2.currentBowler = bowlersData2[0].name
        console.log(cricketCollection);

        let matchResults = await fetch(`${baseUrl}/saveMatch`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                match: cricketCollection
            })
        }).then(res => {
            if (res.status === 200) {
                alert('successfully saved')
            } else {
                alert('error in saving')
            }
        });
    };


    const handleFormatChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFormat(selectedValue);
        console.log(`Selected format: ${selectedValue}`);
    };

    return (
        <div>
            <div className='mt-5'>
                <div>
                    {/* <label>Format</label> */}
                    <select id='select' className="block w-50 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" value={selectedFormat} onChange={handleFormatChange}>
                        <option value="select" disabled >Select Type</option>
                        <option value="ODI">ODI</option>
                        <option value="T20">T20</option>
                        <option value="TEST">TEST</option>
                    </select>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <div className="relative mt-2 rounded-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">Location</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-50 rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) => setLocation(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className="relative mt-2 rounded-md">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">Stadium</span>
                            </div>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-50 rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder=""
                                onChange={(e) => setStadium(e.target.value)} />
                        </div>
                    </div>
                    {/* <label>Stadium</label>
                    <input type='text' onChange={(e) => setStadium(e.target.value)} /> */}
                </div>


                <div className='flex gap-5'>
                    <div className="relative mt-2 rounded-md">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">MatchName</span>
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-50 rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            onChange={(e) => setMatchName(e.target.value)} />
                    </div>
                    {/* <label htmlFor="name">Series Name</label>
                    <input id="name" type="text" onChange={(e) => setMatchName(e.target.value)} /> */}
                    <div className="relative mt-2 rounded-md">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">MatchID</span>
                        </div>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-50 rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder=""
                            onChange={(e) => setMatchId(e.target.value)} />
                    </div>
                    {/* <label htmlFor="id">Match-ID</label>
                    <input id="id" type="text" onChange={(e) => setMatchId(e.target.value)} /> */}
                </div>

            </div>
            <div className='text-2xl mt-5 mb-2'>Teams</div>
            <div className='flex gap-5'>
                <div className="max-w-md bg-white p-8  rounded-md shadow-md">
                    <div className='text-xl font-bold mx-auto'>Team 1</div>
                    <div className="mb-6">
                        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name:</label>
                        <input type="text" id="teamName" name="teamName" placeholder="Enter team1 name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setTeam1Name(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="shortName" className="block text-sm font-medium text-gray-700">Short Name:</label>
                        <input type="text" id="shortName" name="shortName" placeholder="Enter short name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setTeam1ShortName(e.target.value)} />
                    </div>
                </div>
                <div className="max-w-md bg-white p-8  rounded-md shadow-md">
                    <div className='text-xl font-bold mx-auto'>Team 2</div>
                    <div className="mb-6">
                        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name:</label>
                        <input type="text" id="teamName" name="teamName" placeholder="Enter team2 name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setTeam2Name(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="shortName" className="block text-sm font-medium text-gray-700">Short Name:</label>
                        <input type="text" id="shortName" name="shortName" placeholder="Enter short name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setTeam2ShortName(e.target.value)} />
                    </div>
                </div>
            </div>
            {/* <div>
                <h2>Team name 1</h2>
                <div>
                    <input id="team1name" type="text" onChange={(e) => setTeam1Name(e.target.value)} />
                    <label >shortname</label>
                    <input type='text' id='shortNameteam1' onChange={(e) => setTeam1ShortName(e.target.value)} />
                </div>
                <h2>Team name 2</h2>
                <div>
                    <input id="team2name" type="text" onChange={(e) => setTeam2Name(e.target.value)} />
                    <label  >shortname</label>
                    <input type='text' onChange={(e) => setTeam2ShortName(e.target.value)} />
                </div>
            </div> */}
            <div>
                <div className='text-2xl mt-5 mb-2'>
                    Team1 players
                </div>
                <div>
                    {players1.map((player, index) => (
                        <span key={index}>
                            <input key={index} type="text" value={player} onChange={handlePlayerChange(index, 1)} className="mt-1 p-2 w-30 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            {/* <button style={{ background: "#666", padding: "1px 5px", margin: "0px 5px" }} onClick={() => deleteField('player1', index)}>-</button> */}
                            <svg style={{ display: "inline", cursor: "pointer", margin: "0px 5px" }} onClick={() => deleteField('player1', index)} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                <path opacity="1" fill="#1E3050" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                        </span>
                    ))}
                    <button className='text-sm bg-indigo-500 text-white p-2 rounded-lg' onClick={() => addField('player1')}>Add Player</button>
                </div>

                <div className='text-2xl mt-5 mb-2'>
                    Team2 players
                </div>
                <div>
                    {players2.map((player, index) => (
                        <span key={index}>
                            <input key={index} type="text" value={player} onChange={handlePlayerChange(index, 2)} className="mt-1 p-2 w-30 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            {/* <button style={{ background: "#666", padding: "1px 5px", margin: "0px 5px" }} onClick={() => deleteField('player1', index)}>-</button> */}
                            {/* <span onClick={() => deleteField('player1', index)}> */}
                            <svg style={{ display: "inline", cursor: "pointer", margin: "0px 5px" }} onClick={() => deleteField('player2', index)} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                <path opacity="1" fill="#1E3050" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                            {/* </span> */}
                        </span>
                    ))}
                    <button className='text-sm bg-indigo-500 text-white p-2 rounded-lg' onClick={() => addField('player2')}>Add Player</button>
                </div>
                {/* <h2>
                    team players 2
                </h2>
                <div>
                    {players2.map((player, index) => (
                        <span key={index}>
                            <input key={index} type="text" value={player} onChange={handlePlayerChange(index, 2)} />
                            <button onClick={() => deleteField('player2', index)}>-</button>
                        </span>
                    ))}
                    <button onClick={() => addField('player2')}>Add Player</button>

                </div> */}
            </div>
            <div >
                <div style={{ background: "#666", width: '80px', fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={handleSubmit}>SUBMIT</div>
            </div>
        </div>
    )
}