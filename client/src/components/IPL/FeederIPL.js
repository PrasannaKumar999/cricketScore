import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import io from "socket.io-client"
import NextBowlerModal from "../modals/NextBowlerModal";
const socket = io.connect("http://localhost:3001");

export default function FeederIPL() {
    const [messageRecieved, setMessageRecieved] = useState('')

    const buttonStyle = {
        backgroundColor: '#3498db',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    let cricket = {
        "type": "T20",
        "series": "Indian Premier League, 2018",
        "status": "Sunrisers Hyderabad opt to bowl",
        "state": "inprogress",
        "venue": {
            "name": "Rajiv Gandhi International Stadium",
            "location": "Hyderabad, India"
        },
        "score": {
            "runRate": "0",
            "target": "",
            "detail": {
                "currentInnings": 1,
                "batting": {
                    "name": "Chennai Super Kings",
                    "shortName": "CSK",
                    "score": 0,
                    "overs": 0,
                    "wickets": 0,
                    "balls": 0
                }
            },
            "partnership": "0(0)",
            "batsmen": [
                [
                    { name: "Ruturaj Gaikwad", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Faf du Plessis", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Shane Watson", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Ambati Rayudu", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Suresh Raina", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Sam Curran", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "MS Dhoni", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Ravindra Jadeja", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Dwayne Bravo", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Deepak Chahar", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Imran Tahir", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                ],
                [
                    { name: "David Warner", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Jonny Bairstow", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Kane Williamson", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Manish Pandey", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Vijay Shankar", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Mohammad Nabi", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Rashid Khan", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Bhuvneshwar Kumar", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "T Natarajan", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Wriddhiman Saha", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' },
                    { name: "Jason Holder", runs: 0, ballsFaced: 0, fours: 0, sixes: 0, strikeRate: 0, status: 'notout', dismissalType: '' }
                ]
            ],
            "bowlers": [
                [
                    { name: "Dwayne Bravo", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Deepak Chahar", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Imran Tahir", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Sam Curran", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Ruturaj Gaikwad", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }
                ],
                [
                    { name: "Rashid Khan", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Bhuvneshwar Kumar", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "T Natarajan", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Wriddhiman Saha", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 },
                    { name: "Jason Holder", overs: 0, balls: 0, maidens: 0, runs: 0, wickets: 0, economy: 0 }
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
                "commentary": "Deepak Hooda to Raina, 1 run, to sweeper cover",
                "score": 0
            }
        },
        "teams": {
            "team1": {
                "name": "Chennai Super Kings",
                "shortName": "CSK",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0
            },
            "team2": {
                "name": "Sunrisers Hyderabad",
                "shortName": "SRH",
                "score": 0,
                "overs": 0,
                "wickets": 0,
                "balls": 0
            }
        }
    }

    const resetObject = async () => {
        // updateScoreInDatabase(cricket)
        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                score: {
                    ...prevState.score,
                    // currentStriker: matchDetails.score.batsmen[0][0].name,
                    // currentNonStriker: matchDetails.score.batsmen[0][1].name,
                    runRate: 0,
                    detail: {
                        ...prevState.score.detail,
                        currentInnings: 1
                    },
                    batsmen: prevState.score.batsmen.map(teamBatsmen =>
                        teamBatsmen.map(player => ({
                            ...player,
                            runs: 0,
                            ballsFaced: 0,
                            fours: 0,
                            sixes: 0,
                            strikeRate: 0,
                            status: 'notout',
                            dismissalType: '',
                        }))
                    ),
                    bowlers: prevState.score.bowlers.map(teamBowlers =>
                        teamBowlers.map(bowler => ({
                            ...bowler,
                            overs: 0,
                            balls: 0,
                            maidens: 0,
                            runs: 0,
                            wickets: 0,
                            economy: 0,
                        }))
                    ),
                },
                teams: {
                    ...prevState.teams,
                    team1: {
                        ...prevState.teams.team1,
                        score: 0,
                        overs: 0,
                        wickets: 0,
                        balls: 0,
                        runRate: 0,
                        currentStriker: matchDetails.score.batsmen[0][0].name,
                        currentNonStriker: matchDetails.score.batsmen[0][1].name,
                        currentBowler: matchDetails.score.bowlers[0][4].name,
                    },
                    team2: {
                        ...prevState.teams.team2,
                        score: 0,
                        overs: 0,
                        wickets: 0,
                        balls: 0,
                        runRate: 0,
                        currentStriker: matchDetails.score.batsmen[1][0].name,
                        currentNonStriker: matchDetails.score.batsmen[1][1].name,
                        currentBowler: matchDetails.score.bowlers[1][4].name,
                    },
                }
            };
            updateScoreInDatabase(updatedVal);
            return updatedVal;
        });
        getData()
    };


    let baseUrl = "http://localhost:5050";
    const runs = [0, 1, 2, 3, 4, 6];
    const wicket = ['Bowled', 'Caught', 'Lbw', 'Runout', 'Stumped', 'Hitwicket'];
    const extras = ['wide', 'no-ball', 'free-hit', 'lb+1', 'lb+2', 'lb+3', 'lb+4',];

    let params = useParams();
    const [matchDetails, setMatchDetails] = useState(null);

    const [currentInnings, setCurrentInnings] = useState();

    // const [players, setPlayers] = useState();
    // const [currentStriker, setCurrentStriker] = useState(0);
    // const [currentNonStriker, setCurrentNonStriker] = useState(1);
    const [currentStriker, setCurrentStriker] = useState('');
    const [currentNonStriker, setCurrentNonStriker] = useState('');
    const [currentBowler, setCurrentBowler] = useState('');
    const [completeovers, setCompleteOvers] = useState('');
    const [recentBalls, setRecentBalls] = useState([]);
    const [overCompleted, isOverCompleted] = useState(false)

    useEffect(() => {
        if (matchDetails &&
            (
                matchDetails.teams.team1.wickets === 10 ||
                matchDetails.teams.team1.overs === completeovers)
        ) {
            if (matchDetails.score.detail.currentInnings !== 2) {
                console.log('setting 2 innings');
                setCurrentInnings(2);
                setCurrentStriker(matchDetails.teams.team2.currentStriker);
                setCurrentNonStriker(matchDetails.teams.team2.currentNonStriker);
                setCurrentBowler(matchDetails.teams.team1.currentBowler)
                setMatchDetails((prevState) => {
                    const updatedVal = {
                        ...prevState,
                        status: `${matchDetails.teams.team2.shortName} Need ${matchDetails.teams.team1.score} To Win`,
                        score: {
                            ...prevState.score,
                            detail: {
                                ...prevState.score.detail,
                                currentInnings: 2
                            }
                        },
                    };
                    updateScoreInDatabase(updatedVal);
                    return updatedVal;
                });
            }
        }
    }, [matchDetails])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log('checkkkk');
        socket.on('recieved', (data) => {
            setMatchDetails(data.updatedVal)
        })
    }, [])


    useEffect(() => {
        // console.log(currentStriker, '-----striker');
        // console.log(currentNonStriker, '----nonstriker');
        if (matchDetails) {
            setMatchDetails((prevState) => {
                const updatedVal = {
                    ...prevState,
                    teams: {
                        ...prevState.teams,
                        team1: {
                            ...prevState.teams.team1,
                            currentStriker: currentInnings === 1 ? currentStriker : prevState.teams.team1.currentStriker,
                            currentNonStriker: currentInnings === 1 ? currentNonStriker : prevState.teams.team1.currentNonStriker,
                        },
                        team2: {
                            ...prevState.teams.team2,
                            currentStriker: currentInnings === 2 ? currentStriker : prevState.teams.team2.currentStriker,
                            currentNonStriker: currentInnings === 2 ? currentNonStriker : prevState.teams.team2.currentNonStriker,
                        }
                    },
                };
                updateScoreInDatabase(updatedVal);
                return updatedVal;
            });
        }

    }, [currentStriker, currentNonStriker]);


    async function getData() {
        console.log(params.matchId);
        try {
            const response = await fetch(`${baseUrl}/getMatchDetails/${params.matchId}`);
            const data = await response.json();
            setMatchDetails(data.match[0]);
            if (!data.match[0]) {
                console.log('cant get the match Details');
            }
            setCurrentInnings(data.match[0].score.detail.currentInnings)
            let format = data.match[0].type;
            let completeOvers;

            switch (format) {
                case 'ODI':
                    completeOvers = 50;
                    break;
                case 'T20':
                    completeOvers = 20;
                    break;
                case 'TEST':
                    completeOvers = 90;
                    break;
                default:
                    // Handle unexpected format (optional)
                    break;
            }

            if (completeOvers !== undefined) {
                setCompleteOvers(completeOvers);
            }
            if (data.match[0].score.detail.currentInnings === 1) {
                setCurrentStriker(data.match[0].teams.team1.currentStriker);
                setCurrentNonStriker(data.match[0].teams.team1.currentNonStriker);
                setCurrentBowler(data.match[0].teams.team2.currentBowler);
            }
            if (data.match[0].score.detail.currentInnings === 2) {
                setCurrentStriker(data.match[0].teams.team2.currentStriker)
                setCurrentNonStriker(data.match[0].teams.team2.currentNonStriker)
                setCurrentBowler(data.match[0].teams.team1.currentBowler)
            }

        }
        catch (err) {
            console.log(err);
        }
    }


    async function updateScoreInDatabase(updatedVal) {
        console.log(updatedVal, '------while posting');
        try {
            const response = await fetch(`${baseUrl}/updateMatch/${params.matchId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    teams: updatedVal.teams,
                    score: updatedVal.score,
                    status: updatedVal.status,
                }),
            });
            const data = await response.json();
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error updating score:", error);
        }
    }

    function rotateStrike(runs) {
        console.log('-----rotate');
        if (currentInnings === 1) {
            if ((matchDetails.teams.team1.balls === 5 && runs % 2 === 0) || (runs % 2 !== 0 && matchDetails.teams.team1.balls !== 5)) {
                setCurrentStriker(matchDetails.teams.team1.currentNonStriker)
                setCurrentNonStriker(matchDetails.teams.team1.currentStriker)
            }
        }
        if (currentInnings === 2) {
            if (runs === 1 || runs === 3 || runs === 'overCompleted') {
                setCurrentStriker(matchDetails.teams.team2.currentNonStriker)
                setCurrentNonStriker(matchDetails.teams.team2.currentStriker)
            }
        }
    }

    function runsHandler(e) {
        // console.log(currentBowler);
        ballsHandler()
        getLastOvers(e)

        rotateStrike(e)
        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                teams: {
                    ...prevState.teams,
                    team1: {
                        ...prevState.teams.team1,
                        score: currentInnings === 1 ? prevState.teams.team1.score + e : prevState.teams.team1.score,
                        currentStriker: currentInnings === 1 ? currentStriker : prevState.teams.team1.currentStriker,
                        currentNonStriker: currentInnings === 1 ? currentNonStriker : prevState.teams.team1.currentNonStriker,
                    },
                    team2: {
                        ...prevState.teams.team2,
                        score: currentInnings === 2 ? prevState.teams.team2.score + e : prevState.teams.team2.score,
                        currentStriker: currentInnings === 2 ? currentStriker : prevState.teams.team2.currentStriker,
                        currentNonStriker: currentInnings === 2 ? currentNonStriker : prevState.teams.team2.currentNonStriker,
                    }
                },
                status: currentInnings === 2 ? `${matchDetails.teams.team2.shortName} Need ${prevState.teams.team1.score - prevState.teams.team2.score + e} To Win` : `${matchDetails.teams.team1.shortName} opt to bat`,
                score: {
                    ...prevState.score,
                    batsmen: prevState.score.batsmen.map((curTeam, arrayIndex) =>
                        curTeam.map((batsman, index) =>
                            arrayIndex === currentInnings - 1 && batsman.name === currentStriker
                                ? {
                                    ...batsman,
                                    runs: batsman.runs + e,
                                    ballsFaced: batsman.ballsFaced + 1,
                                    fours: e === 4 ? batsman.fours + 1 : batsman.fours,
                                    sixes: e === 6 ? batsman.sixes + 1 : batsman.sixes,
                                    strikeRate: ((prevRuns, prevBallsFaced) => (
                                        (prevRuns + e) / (prevBallsFaced + 1) * 100
                                    ))(batsman.runs, batsman.ballsFaced).toFixed(2),
                                }
                                : batsman
                        )
                    ),
                    bowlers: prevState.score.bowlers.map((curBowler, arrayIndex) =>
                        curBowler.map((bowler, index) =>
                            (arrayIndex === 0 || arrayIndex === 1) && bowler.name === currentBowler
                                ? {
                                    ...bowler,
                                    runs: bowler.runs + e,
                                }
                                : bowler
                        )
                    ),
                },
            };

            runrate()
            bowlerEconomy()
            updateScoreInDatabase(updatedVal);
            socket.emit('match_details', { updatedVal })

            return updatedVal;
        });

    }

    function setNextBatsmen() {
        const firstSatisfyingBatsman = matchDetails.score.batsmen[currentInnings - 1].find((ele) => {
            return ele.status === "notout" && currentNonStriker !== ele.name && currentStriker !== ele.name;
        });
        console.log(firstSatisfyingBatsman);

        if (firstSatisfyingBatsman) {
            setCurrentStriker((prevStriker) => {
                const newStriker = firstSatisfyingBatsman.name;
                setMatchDetails((prevDetails) => {
                    const updatedDetails = {
                        ...prevDetails,
                        score: {
                            ...prevDetails.score,
                            currentStriker: newStriker,
                        },
                        teams: {
                            ...prevDetails.teams,
                            team1: {
                                ...prevDetails.teams.team1,
                                currentStriker: currentInnings === 1 ? newStriker : prevDetails.teams.team1.currentStriker,
                                // currentStriker: newStriker,
                            },
                            team2: {
                                ...prevDetails.teams.team2,
                                currentStriker: currentInnings === 2 ? newStriker : prevDetails.teams.team2.currentStriker,
                            }
                        }
                    };
                    updateScoreInDatabase(updatedDetails);

                    return updatedDetails;
                });
                return newStriker;
            });
        }
        console.log(currentStriker, 'striker');
    }

    function setNextBowler(nextBowlerName) {
        // const randomNumber = Math.floor(Math.random() * 5);
        // console.log(currentBowler, '-------bowler');
        // let newBowler = matchDetails.score.bowlers[1][randomNumber];
        // if (newBowler.overs < 4) {
        // setCurrentBowler(matchDetails.score.bowlers[1][randomNumber].name)
        setCurrentBowler((prevBowler) => {
            const newBowler = nextBowlerName;
            setMatchDetails((prevDetails) => {
                const updatedDetails = {
                    ...prevDetails,
                    teams: {
                        ...prevDetails.teams,
                        team1: {
                            ...prevDetails.teams.team1,
                            currentBowler: currentInnings === 2 ? newBowler : matchDetails.teams.team1.currentBowler,
                        },
                        team2: {
                            ...prevDetails.teams.team2,
                            currentBowler: currentInnings === 1 ? newBowler : matchDetails.teams.team2.currentBowler,
                        }
                    }
                };
                updateScoreInDatabase(updatedDetails);

                return updatedDetails;
            });
            return newBowler;
        });
        // }
    }

    function wicketsHandler(type) {
        // if (matchDetails.teams.team1.overs < 20 && matchDetails.teams.team1.wickets < 10) {
        ballsHandler()
        setNextBatsmen()

        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                // currentStriker: currentStriker,
                // currentNonStriker: currentNonStriker,
                teams: {
                    ...prevState.teams,
                    team1: {
                        ...prevState.teams.team1,
                        wickets: currentInnings === 1 ? prevState.teams.team1.wickets + 1 : prevState.teams.team1.wickets
                    },
                    team2: {
                        ...prevState.teams.team2,
                        wickets: currentInnings === 2 ? prevState.teams.team2.wickets + 1 : prevState.teams.team2.wickets
                    },
                },
                score: {
                    ...prevState.score,
                    // currentStriker: currentStriker,
                    // currentNonStriker: currentNonStriker,
                    bowlers: prevState.score.bowlers.map((curBowler) =>
                        curBowler.map((bowler, index) =>
                            bowler.name === currentBowler
                                ? {
                                    ...bowler,
                                    wickets: bowler.wickets + 1
                                }
                                : bowler
                        )
                    ),
                    batsmen: prevState.score.batsmen.map((curBatsmen, arrayIndex) =>
                        curBatsmen.map((batsman, index) =>
                            arrayIndex === currentInnings - 1 && batsman.name === currentStriker
                                ? {
                                    ...batsman,
                                    status: 'out',
                                    ballsFaced: batsman.ballsFaced + 1,
                                    dismissalType: type,
                                    dismissedBy: currentBowler
                                }
                                : batsman
                        )
                    ),
                },

            };
            socket.emit('match_details', { updatedVal })
            updateScoreInDatabase(updatedVal);
            return updatedVal;
        });

        // }
    }

    function extrasHandler(e) {
        console.log(e);
        let legBye;
        let legByeRuns;
        if (e.slice(0, 2) === 'lb') {
            legBye = true;
            legByeRuns = Number(e.slice(-1));
            ballsHandler()
            if (currentInnings === 1) {
                if ((matchDetails.teams.team1.balls === 5 && runs % 2 === 0) || (runs % 2 !== 0 && matchDetails.teams.team1.balls !== 5)) {
                    setCurrentStriker(matchDetails.teams.team1.currentNonStriker)
                    setCurrentNonStriker(matchDetails.teams.team1.currentStriker)
                }
            }
            if (currentInnings === 2) {
                if (runs === 1 || runs === 3 || runs === 'overCompleted') {
                    setCurrentStriker(matchDetails.teams.team2.currentNonStriker)
                    setCurrentNonStriker(matchDetails.teams.team2.currentStriker)
                }
            }
        }
        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                teams: {
                    ...prevState.teams,
                    team1: {
                        ...prevState.teams.team1,
                        score: currentInnings === 1 ? prevState.teams.team1.score + (legBye ? legByeRuns : 1) : prevState.teams.team1.score,
                        // currentStriker: currentInnings === 1 ? currentStriker : prevState.teams.team1.currentStriker,
                        // currentNonStriker: currentInnings === 1 ? currentNonStriker : prevState.teams.team1.currentNonStriker,
                    },
                    team2: {
                        ...prevState.teams.team2,
                        score: currentInnings === 2 ? prevState.teams.team2.score + (legBye ? legByeRuns : 1) : prevState.teams.team2.score,
                        // currentStriker: currentInnings === 2 ? currentStriker : prevState.teams.team2.currentStriker,
                        // currentNonStriker: currentInnings === 2 ? currentNonStriker : prevState.teams.team2.currentNonStriker,
                    }
                },
                status: currentInnings === 2 ? `${matchDetails.teams.team2.shortName} Need ${prevState.teams.team1.score - prevState.teams.team2.score + 1} To Win` : `${matchDetails.teams.team1.shortName} opt to bat`,
                score: {
                    ...prevState.score,
                    bowlers: prevState.score.bowlers.map((curBowler, arrayIndex) =>
                        curBowler.map((bowler, index) =>
                            (arrayIndex === 0 || arrayIndex === 1) && bowler.name === currentBowler
                                ? {
                                    ...bowler,
                                    runs: bowler.runs + 1,
                                }
                                : bowler
                        )
                    ),
                },
            };

            runrate()
            bowlerEconomy()
            updateScoreInDatabase(updatedVal);

            return updatedVal;
        });
    }

    // function ballsHandler() {
    //     if (matchDetails.teams.team1.overs < 20 && currentInnings === 1) {
    //         if (matchDetails.teams.team1.balls === 5) {
    //             setNextBowler()
    //         }
    //         setMatchDetails((prevState) => {
    //             const updatedVal = {
    //                 ...prevState,
    //                 teams: {
    //                     ...prevState.teams,
    //                     team1: {
    //                         ...prevState.teams.team1,
    //                         overs: prevState.teams.team1.balls === 5 ? prevState.teams.team1.overs + 1 : prevState.teams.team1.overs,
    //                         balls: prevState.teams.team1.balls === 5 ? 0 : prevState.teams.team1.balls + 1,
    //                     },
    //                     team2: {
    //                         ...prevState.teams.team2,
    //                         currentBowler: currentBowler,
    //                     }
    //                 },
    //                 score: {
    //                     ...prevState.score,
    //                     bowlers: prevState.score.bowlers.map((curBowler) =>
    //                         curBowler.map((bowler, index) =>
    //                             bowler.name === currentBowler
    //                                 ? {
    //                                     ...bowler,
    //                                     overs: prevState.teams.team1.balls === 5 ? bowler.overs + 1 : bowler.overs,
    //                                     balls: prevState.teams.team1.balls !== 5 ? bowler.balls + 1 : 0
    //                                 }
    //                                 : bowler
    //                         )
    //                     ),
    //                 },
    //             };
    //             setCurrentStriker(currentNonStriker)
    //             setCurrentNonStriker(currentStriker)
    //             updateScoreInDatabase(updatedVal);
    //             return updatedVal;
    //         });
    //     }
    // }

    function ballsHandler() {
        if (matchDetails.teams.team1.overs < completeovers && currentInnings === 1) {
            console.log(currentInnings, '-----innings1');
            if (matchDetails.teams.team1.balls === 5) {
                console.log('over completed');
                // rotateStrike('overCompleted')
                setNextBowler()
                isOverCompleted(true)

                setMatchDetails((prevState) => {
                    const updatedVal = {
                        ...prevState,
                        teams: {
                            ...prevState.teams,
                            team1: {
                                ...prevState.teams.team1,
                                overs: prevState.teams.team1.overs + 1,
                                balls: 0,
                            },
                            team2: {
                                ...prevState.teams.team2,
                                currentBowler: currentBowler,
                            }
                        },
                        score: {
                            ...prevState.score,
                            bowlers: prevState.score.bowlers.map((curBowler) =>
                                curBowler.map((bowler, index) =>
                                    bowler.name === currentBowler
                                        ? {
                                            ...bowler,
                                            overs: bowler.overs + 1,
                                            balls: 0
                                        }
                                        : bowler
                                )
                            ),
                        },
                    };
                    // setCurrentStriker(currentNonStriker)
                    // setCurrentNonStriker(currentStriker)
                    updateScoreInDatabase(updatedVal);
                    return updatedVal;
                });
            } else {
                setMatchDetails((prevState) => {
                    const updatedVal = {
                        ...prevState,
                        teams: {
                            ...prevState.teams,
                            team1: {
                                ...prevState.teams.team1,
                                balls: prevState.teams.team1.balls + 1,
                            },
                        },
                        score: {
                            ...prevState.score,
                            bowlers: prevState.score.bowlers.map((curBowler) =>
                                curBowler.map((bowler, index) =>
                                    bowler.name === currentBowler
                                        ? {
                                            ...bowler,
                                            balls: bowler.balls + 1
                                        }
                                        : bowler
                                )
                            ),
                        },
                    };
                    updateScoreInDatabase(updatedVal);
                    return updatedVal;
                });
            }
        }
        if (matchDetails.teams.team2.overs < completeovers && currentInnings === 2) {
            console.log(currentInnings, '----innings2');
            if (matchDetails.teams.team2.balls === 5) {
                rotateStrike('overCompleted')
                const randomNumber = Math.floor(Math.random() * 5);
                if (matchDetails.score.bowlers[0][randomNumber].overs < 4) {
                    setCurrentBowler(matchDetails.score.bowlers[0][randomNumber].name)
                }
                setMatchDetails((prevState) => {
                    const updatedVal = {
                        ...prevState,
                        teams: {
                            ...prevState.teams,
                            team2: {
                                ...prevState.teams.team2,
                                overs: prevState.teams.team2.overs + 1,
                                balls: 0,
                            },
                        },
                        score: {
                            ...prevState.score,
                            bowlers: prevState.score.bowlers.map((curBowler) =>
                                curBowler.map((bowler, index) =>
                                    bowler.name === currentBowler
                                        ? {
                                            ...bowler,
                                            overs: bowler.overs + 1,
                                            balls: 0
                                        }
                                        : bowler
                                )
                            ),
                        },
                    };
                    // setCurrentStriker(currentNonStriker)
                    // setCurrentNonStriker(currentStriker)
                    updateScoreInDatabase(updatedVal);
                    return updatedVal;
                });

            } else {
                setMatchDetails((prevState) => {
                    const updatedVal = {
                        ...prevState,
                        teams: {
                            ...prevState.teams,
                            team2: {
                                ...prevState.teams.team2,
                                balls: prevState.teams.team2.balls + 1,
                            },
                        },
                        score: {
                            ...prevState.score,
                            bowlers: prevState.score.bowlers.map((curBowler) =>
                                curBowler.map((bowler, index) =>
                                    bowler.name === currentBowler
                                        ? {
                                            ...bowler,
                                            balls: bowler.balls + 1
                                        }
                                        : bowler
                                )
                            ),
                        },
                    };
                    updateScoreInDatabase(updatedVal);
                    return updatedVal;
                });
            }
        }


    }

    function runrate() {
        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                // score: {
                //     ...prevState.score,
                //     runRate: currentInnings === 1 && prevState.teams.team1.overs !== 0 ? (prevState.teams.team1.score / (prevState.teams.team1.overs + (prevState.teams.team1.balls / 6))).toFixed(2) : 0
                // },
                teams: {
                    ...prevState.teams,
                    team1: {
                        ...prevState.teams.team1,
                        runRate: prevState.teams.team1.overs !== 0 ? (prevState.teams.team1.score / (prevState.teams.team1.overs + (prevState.teams.team1.balls / 6))).toFixed(2) : 0
                    },
                    team2: {
                        ...prevState.teams.team2,
                        runRate: prevState.teams.team1.overs !== 0 ? (prevState.teams.team2.score / (prevState.teams.team2.overs + (prevState.teams.team2.balls / 6))).toFixed(2) : 0
                    },
                },
            };
            console.log();
            updateScoreInDatabase(updatedVal);
            return updatedVal;
        });
    }

    function bowlerEconomy() {
        setMatchDetails((prevState) => {
            const updatedVal = {
                ...prevState,
                score: {
                    ...prevState.score,
                    bowlers: prevState.score.bowlers.map((curBowler) =>
                        curBowler.map((bowler, index) =>
                            bowler.name === currentBowler
                                ? {
                                    ...bowler,
                                    economy: bowler.overs > 0 ? (bowler.runs / Number(bowler.overs + '.' + bowler.balls)).toFixed(2) : 0
                                }
                                : bowler
                        )
                    ),
                },

            };
            // updateScoreInDatabase(updatedVal);
            return updatedVal;
        });
    }

    function getLastOvers(runs) {
        // setRecentBalls([...recentBalls.slice(-11), runs])
        if (matchDetails.score.recentOvers) {
            let tempArr = [...matchDetails.score.recentOvers.slice(-13)];
            tempArr.push(runs)
            if (matchDetails.teams.team1.balls === 5) {
                tempArr.push('|')
            }
            setMatchDetails((prevState) => {
                const updatedVal = {
                    ...prevState,
                    score: {
                        ...prevState.score,
                        recentOvers: tempArr
                    },
                };
                updateScoreInDatabase(updatedVal);

                return updatedVal;
            });
        }
    }

    const handleOverCompletedChange = (nextBowlerName) => {
        console.log(nextBowlerName);
        setNextBowler(nextBowlerName)
        isOverCompleted(false);
    };

    return (
        <div style={{ color: 'black' }}>

            <div style={{ marginLeft: "auto" }}>
                <div onClick={resetObject} style={{ padding: '10px 20px', margin: "20px", marginLeft: "auto", width: '80px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', }}>RESET</div>
            </div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div>
                    <div>
                        <h2>
                            Add Runs:
                        </h2>
                        <div style={{ display: 'flex', gap: "10px" }}>
                            {runs.map((score, index) => (
                                <button key={index} onClick={() => runsHandler(score)} style={buttonStyle}>
                                    {score}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>
                            Add wicket:
                        </h2>
                        <div style={{ display: 'flex', gap: "10px" }}>
                            {wicket.map((wicket, index) => (
                                <button key={index} onClick={() => wicketsHandler(wicket)} style={buttonStyle}>
                                    {wicket}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>
                            Add extras:
                        </h2>
                        <div style={{ display: 'flex', gap: "10px" }}>
                            {extras.map((extras, index) => (
                                <button key={index} onClick={() => extrasHandler(extras)} style={buttonStyle}>
                                    {extras}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>

            {!matchDetails && (
                <h1>matchId doesn't exists</h1>
            )}

            <div style={{ display: 'flex' }}>
                {/* first Innings */}
                {matchDetails && (
                    <div style={{ width: "50%" }}>
                        <div>
                            <div style={{ margin: '50px 0px 0px 50px' }}>
                                <div style={{ display: 'flex', alignItems: 'end', gap: "10px" }}>
                                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                                        {matchDetails && matchDetails.teams.team1.shortName} {matchDetails && matchDetails.teams.team1.score}/{matchDetails && matchDetails.teams.team1.wickets}   ({matchDetails && matchDetails.teams.team1.overs}.{matchDetails && matchDetails.teams.team1.balls})
                                    </div>
                                    <div style={{ fontSize: "14px", color: "#666", fontWeight: "bold" }}>
                                        CRR: {matchDetails && matchDetails.teams.team1.runRate}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
                                        <th>Batter</th>
                                        <th>Runs</th>
                                        <th>Balls</th>
                                        <th>4's</th>
                                        <th>6's</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {matchDetails && matchDetails.score.batsmen[0].map((ele, index) => (
                                    (index === currentStriker || index === currentNonStriker) && (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            {index === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                            <td> {ele.runs}</td>
                                            <td> {ele.ballsFaced}</td>
                                            <td>{ele.fours}</td>
                                            <td> {ele.sixes}</td>
                                            <td>{ele.strikeRate}</td>
                                        </tr>
                                    )
                                ))} */}
                                    {matchDetails && matchDetails.score.batsmen[0].map((ele, index) => (
                                        (ele.name === matchDetails.teams.team1.currentStriker || ele.name === matchDetails.teams.team1.currentNonStriker) && (
                                            <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                {ele.name === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                                <td> {ele.runs}</td>
                                                <td> {ele.ballsFaced}</td>
                                                <td>{ele.fours}</td>
                                                <td> {ele.sixes}</td>
                                                <td>{ele.strikeRate}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
                                        <th>Bowler</th>
                                        <th>Overs</th>
                                        <th>Maidens</th>
                                        <th>Runs</th>
                                        <th>Wickets</th>
                                        <th>Economy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchDetails && matchDetails.score.bowlers[1].map((ele, index) => (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            {ele.name === currentBowler ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                            <td> {ele.overs}.{ele.balls}</td>
                                            <td> {ele.maidens}</td>
                                            <td>{ele.runs}</td>
                                            <td> {ele.wickets}</td>
                                            <td> {ele.economy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* second innings */}
                <div style={{ width: "50%" }}>
                    {matchDetails && matchDetails.score.detail.currentInnings === 2 && (
                        <div>
                            <div>
                                <div style={{ margin: '50px 0px 0px 50px' }}>
                                    <div style={{ display: 'flex', alignItems: 'end', gap: "10px" }}>
                                        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                                            {matchDetails && matchDetails.teams.team2.shortName} {matchDetails && matchDetails.teams.team2.score}/{matchDetails && matchDetails.teams.team2.wickets}   ({matchDetails && matchDetails.teams.team2.overs}.{matchDetails && matchDetails.teams.team2.balls})
                                        </div>
                                        <div style={{ fontSize: "14px", color: "#666", fontWeight: "bold" }}>
                                            CRR: {matchDetails && matchDetails.teams.team2.runRate}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <table style={{ width: '100%' }}>
                                    <thead>
                                        <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
                                            <th>Batter</th>
                                            <th>Runs</th>
                                            <th>Balls</th>
                                            <th>4's</th>
                                            <th>6's</th>
                                            <th>SR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {matchDetails && matchDetails.score.batsmen[1].map((ele, index) => (
                                            (index === currentStriker || index === currentNonStriker) && (
                                                <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                    {index === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                                    <td> {ele.runs}</td>
                                                    <td> {ele.ballsFaced}</td>
                                                    <td>{ele.fours}</td>
                                                    <td> {ele.sixes}</td>
                                                    <td>{ele.strikeRate}</td>
                                                </tr>
                                            )
                                        ))} */}
                                        {matchDetails && matchDetails.score.batsmen[1].map((ele, index) => (
                                            (ele.name === matchDetails.teams.team2.currentStriker || ele.name === matchDetails.teams.team2.currentNonStriker) && (
                                                <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                    {ele.name === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                                    <td> {ele.runs}</td>
                                                    <td> {ele.ballsFaced}</td>
                                                    <td>{ele.fours}</td>
                                                    <td> {ele.sixes}</td>
                                                    <td>{ele.strikeRate}</td>
                                                </tr>
                                            )
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <table style={{ width: '100%' }}>
                                    <thead>
                                        <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
                                            <th>Bowler</th>
                                            <th>Overs</th>
                                            <th>Maidens</th>
                                            <th>Runs</th>
                                            <th>Wickets</th>
                                            <th>Economy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {matchDetails && matchDetails.score.bowlers[0].map((ele, index) => (
                                            <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                {ele.name === currentBowler ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                                <td> {ele.overs}.{ele.balls}</td>
                                                <td> {ele.maidens}</td>
                                                <td>{ele.runs}</td>
                                                <td> {ele.wickets}</td>
                                                <td> {ele.economy}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                {matchDetails && (
                                    <div>
                                        <div>
                                            {matchDetails.teams.team2.score > matchDetails.teams.team1.score && (
                                                <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                                                    {matchDetails.teams.team2.shortName} Won the Match
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            {matchDetails.teams.team2.score < matchDetails.teams.team1.score && (
                                                <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                                                    {matchDetails.teams.team2.shortName} Need {matchDetails.teams.team1.score - matchDetails.teams.team2.score} to win
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div>
                recent Balls
                ...{matchDetails && matchDetails.score.recentOvers && (
                    matchDetails.score.recentOvers.map(ele => (
                        <span>{ele}</span>
                    ))
                )}
            </div>
            <div>
                {overCompleted && (
                    <NextBowlerModal matchDetails={matchDetails} onOverCompletedChange={handleOverCompletedChange} />
                )}
            </div>
        </div>
    )
}

