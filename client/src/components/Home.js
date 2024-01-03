import React, { useState, useEffect } from "react";
import Feeder from "./Feeder";
import Scorecard from "./scorecard";
import { useParams } from 'react-router-dom';

export default function Home() {
    const styles = {
        table_th: {
            backgroundColor: "#f2f2f2",
            margin: '0px',
            padding: '10px',
        }
    }

    let baseUrl = "http://localhost:5050"

    const [fetchedData, setFetchedData] = useState(null);
    const [details, setDetails] = useState({ runs: 0, wickets: 0, overs: 0, balls: 0, runrate: 0, striker: {}, nonStriker: {} })

    const [striker, setStriker] = useState()
    const [nonstriker, setnonStriker] = useState()
    const [strikerIndex, setStrikerIndex] = useState(0);
    const [nonStrikerIndex, setNonStrikerIndex] = useState(1);

    const runs = [0, 1, 2, 3, 4, 6];
    const wicket = ['stumpout', 'runout', 'lbw', 'catchout', 'bowled'];

    const { matchId } = useParams();

    useEffect(() => {
        console.log(matchId);
        getData()
    }, []);

    useEffect(() => {
        console.log(details);
    }, [details]);

    async function getData() {
        try {
            const response = await fetch(`${baseUrl}/getMatchDetails/${matchId}`);
            const data = await response.json();
            console.log(data);
            setFetchedData(data);
            setStriker(data.innings[0].striker)
            setnonStriker(data.innings[0].nonStriker)
            setDetails({
                ...details,
                runs: data.match[0].details.innings[0].runs,
                wickets: data.match[0].details.innings[0].wickets,
                overs: data.match[0].details.innings[0].overs,
                balls: data.match[0].details.innings[0].balls,
                runrate: data.match[0].details.innings[0].runrate,
                striker: data.innings[0].striker,
                nonStriker: data.innings[0].nonStriker
            })
            console.log(details);
        }
        catch (err) {
            console.log(err);
        }
    }

    // async function getData() {
    //     try {
    //         const response = await fetch(`${baseUrl}/getData`);
    //         const data = await response.json();
    //         console.log(data);
    //         setFetchedData(data);
    //         setStriker(data.innings[0].striker)
    //         setnonStriker(data.innings[0].nonStriker)
    //         setDetails({
    //             ...details,
    //             runs: data.match[0].details.innings[0].runs,
    //             wickets: data.match[0].details.innings[0].wickets,
    //             overs: data.match[0].details.innings[0].overs,
    //             balls: data.match[0].details.innings[0].balls,
    //             runrate: data.match[0].details.innings[0].runrate,
    //             striker: data.innings[0].striker,
    //             nonStriker: data.innings[0].nonStriker
    //         })
    //         console.log(details);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }

    async function updateScoreInDatabase(updatedVal) {
        console.log(updatedVal);
        try {
            const response = await fetch(`${baseUrl}/update/${matchId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    score: updatedVal.runs,
                    wickets: updatedVal.wickets,
                    overs: updatedVal.overs,
                    balls: updatedVal.balls,
                    runrate: updatedVal.runrate,
                    striker: updatedVal.striker
                }),
            });
            const data = await response.json();
            console.log("Response from server:", data);
        } catch (error) {
            console.error("Error updating score:", error);
        }
        // console.log('updating-----', details);
    }



    function runsHandler(e) {
        if (details.overs < 20 && details.wickets < 10) {
            ballsHandler()
            runrate()
            console.log(striker);

            setDetails((prevState) => {
                const striker = {
                    ...prevState.striker,
                    runs: prevState.striker.runs + e,
                    ballsFaced: prevState.striker.ballsFaced + 1,
                    fours: e === 4 ? prevState.striker.fours + 1 : prevState.striker.fours,
                    sixes: e === 6 ? prevState.striker.sixes + 1 : prevState.striker.sixes,
                    strikeRate: ((prevState.striker.runs + e) / (prevState.striker.ballsFaced + 1)) * 100
                };
                striker.strikeRate = striker.strikeRate.toFixed(2);

                const updatedDetails = {
                    ...prevState,
                    runs: prevState.runs + e,
                    striker: striker,
                };
                updateScoreInDatabase(updatedDetails);
                return updatedDetails;
            });
            console.log(striker);

        }
    }

    function wicketsHandler() {
        if (details.overs < 20 && details.wickets < 10) {
            ballsHandler()
            if (details.wickets < 10) {
                setDetails((prevState) => {
                    const updatedDetails = {
                        ...prevState,
                        wickets: prevState.wickets + 1
                    };
                    updateScoreInDatabase(updatedDetails);
                    return updatedDetails;
                });
                runrate()
            }
        }
    }

    function runrate() {
        setDetails((prevState) => {
            const updatedDetails = {
                ...prevState,
                runrate: prevState.overs !== 0 ? (prevState.runs / prevState.overs).toFixed(2) : 0,
            };
            updateScoreInDatabase(updatedDetails);
            return updatedDetails;
        });
    }

    function ballsHandler() {
        if (details.overs < 20 && details.wickets < 10) {
            if (details.balls === 5) {
                setDetails((prevState) => {
                    const updatedDetails = {
                        ...prevState,
                        overs: prevState.overs + 1,
                        balls: 0,
                    };
                    updateScoreInDatabase(updatedDetails);
                    return updatedDetails;
                });
            } else {
                setDetails((prevState) => {
                    const updatedDetails = {
                        ...prevState,
                        balls: prevState.balls + 1
                    };
                    updateScoreInDatabase(updatedDetails);
                    return updatedDetails;
                });
            }
        }
    }

    // function oversHandler() {
    //     let oversDisplay = `${overs} ${balls}`
    //     if (overs < 20 && details.wickets < 10) {
    //         setBalls((balls + 1) % 6);
    //         if (balls === 5) {
    //             setOvers(overs + 1);
    //             setBalls(0);
    //         }
    //         console.log(oversDisplay, 'overss');
    //     }
    // }



    function extrasHandler(e) {
        console.log(e);
    }





    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <div>
                    <div>
                        <h2>
                            Add Runs:
                        </h2>
                        <div className="list-group">
                            {runs.map((score, index) => (
                                <button key={index} onClick={() => runsHandler(score)}>
                                    {score}
                                </button>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h2>
                            Add wicket:
                        </h2>
                        <button onClick={wicketsHandler}>Wicket</button>
                    </div>

                    <div>
                        <h2>
                            Add extras:
                        </h2>
                        <div className="list-group">
                            {runs.map((score, index) => (
                                <button key={index} onClick={() => extrasHandler(score)}>
                                    {score}
                                </button>
                            ))}
                        </div>
                    </div>
                    <hr></hr>

                </div>
            </div>
            <div style={{ margin: '50px 0px 0px 50px' }}>
                <div style={{ display: 'flex', alignItems: 'end', gap: "10px" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {fetchedData && fetchedData.match[0].details.innings[0].team} {details.runs}/{details.wickets}   ({details.overs}.{details.balls})
                    </div>
                    <div style={{ fontSize: "14px", color: "#666", fontWeight: "bold" }}>
                        CRR: {details.runrate}
                    </div>
                </div>
            </div>
            <table style={{ width: '50%' }}>
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
                    <tr>
                        <td style={{ textAlign: 'center' }}>{details.striker.name}</td>
                        <td style={{ textAlign: 'center' }}>{details.striker.runs}</td>
                        <td style={{ textAlign: 'center' }}>{details.striker.ballsFaced}</td>
                        <td style={{ textAlign: 'center' }}>{details.striker.fours}</td>
                        <td style={{ textAlign: 'center' }}>{details.striker.sixes}</td>
                        <td style={{ textAlign: 'center' }}>{details.striker.strikeRate}</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.name}</td>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.runs}</td>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.ballsFaced}</td>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.fours}</td>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.sixes}</td>
                        <td style={{ textAlign: 'center' }}>{details.nonStriker.strikeRate}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



