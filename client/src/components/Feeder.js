import React, { useState } from 'react';

const styles = {
    listitem: {
        padding: "10px",
        margin: "0px 5px",
        cursor: "pointer"
    }
}
function Feeder() {
    const runs = [0, 1, 2, 3, 4, 6];
    const extras = ['wide', 'no-ball'];
    const wicket = ['stumpout', 'runout', 'lbw', 'catchout', 'bowled'];
    const indSquad = ['RohitSharma', 'ShubmanGill', 'ViratKohli', 'ShreyasIyer', 'klRahul', 'SuryaKumarYadav', 'RavindraJadeja', 'MohammedShami', 'JaspritBumrah', 'KuldeepYadav', 'MohammedSiraj']
    const nzSquad = ["MarkChapman", "DarylMitchell", "WillYoung", "JamesNeesham", "KyleJamieson", "MitchellSantner", "RachinRavindra", "DevonConway", "TimSouthee", "LockieFerguson", "TrentBoult"]

    const indBowlers = ['RavindraJadeja', 'MohammedShami', 'JaspritBumrah', 'KuldeepYadav', 'MohammedSiraj'];
    const nzBowlers = ["Mitchell Santner", "Rachin Ravindra", "Devon Conway", "Tim Southee", "Lockie Ferguson", "Trent Boult"]

    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);
    const [balls, setBalls] = useState(0);
    const [overs, setOvers] = useState(0);

    const [players, setPlayers] = useState(indSquad);
    const [strikerIndex, setStrikerIndex] = useState(0);
    const [nonStrikerIndex, setNonStrikerIndex] = useState(1);
    const [currentInnings, setCurrentInnings] = useState(1);

    const [playerRuns, setplayerRuns] = useState(Array(indSquad.length).fill(0));
    const [ballsFaced, setBallsFaced] = useState(Array(indSquad.length).fill(0));
    const [fours, setFours] = useState(Array(indSquad.length).fill(0));
    const [sixes, setSixes] = useState(Array(indSquad.length).fill(0));

    const [currentBowlerIndex, setCurrentBowlerIndex] = useState(0);
    const [curBowlerWickets, setCurBowlerWickets] = useState(Array(nzBowlers.length).fill(0));
    const [curBowlerRuns, setCurBowlerRuns] = useState(Array(nzBowlers.length).fill(0));

    function runsHandler(e) {
        // runrate();
        displayOvers();
        const newRuns = [...playerRuns];
        newRuns[strikerIndex] += e;

        const newBallsFaced = [...ballsFaced];
        newBallsFaced[strikerIndex] += 1;

        const newFours = [...fours];
        newFours[strikerIndex] += 1;

        const newSixes = [...sixes];
        newSixes[strikerIndex] += 1;

        const bowlerRuns = [...curBowlerRuns];
        bowlerRuns[currentBowlerIndex] += e;



        if (wickets < 10 && overs < 20) {
            if (e === 4) {
                setFours(newFours)
                // console.log(fours);
            } else if (e === 6) {
                setSixes(newSixes);
                // console.log(sixes);
            }
            setScore(score + e)
            setplayerRuns(newRuns);
            setBallsFaced(newBallsFaced);
            setCurBowlerRuns(bowlerRuns)

            if (e % 2 !== 0) {
                setStrikerIndex(nonStrikerIndex)
                setNonStrikerIndex(strikerIndex)
            }
            // console.log(playerRuns);
            // console.log(ballsFaced);
        }
        // console.log(`${players[strikerIndex]} scored ${e} runs. Total runs: ${newRuns[strikerIndex]}`);
    }

    function displayOvers() {
        if (overs < 20) {
            setBalls((balls + 1) % 6);

            // Check if the over is completed
            if (balls === 5) {
                // Increment overs and reset ball count
                setOvers(overs + 1);
                setBalls(0);

                setStrikerIndex(nonStrikerIndex)
                setNonStrikerIndex(strikerIndex)
                setCurrentBowlerIndex((currentBowlerIndex + 1) % nzBowlers.length);
                // console.log(currentBowlerIndex);
            }
        } else {
            setCurrentInnings(2)
            // console.log(currentInnings);
        }

        // if (currentInnings === 2) {
        //     setPlayers(nzSquad)
        // }

        console.log(currentInnings);
    }

    function wicketHandler(e) {
        if (wickets < 10 && overs <= 19) {
            const newBallsFaced = [...ballsFaced];
            newBallsFaced[strikerIndex] += 1;
            setBallsFaced(newBallsFaced);

            const newWickets = [...curBowlerWickets];
            newWickets[currentBowlerIndex] += 1;
            setCurBowlerWickets(newWickets);
            console.log(curBowlerWickets);

            setWickets(wickets + 1)
            let nextStrikerIndex = strikerIndex + 1;
            if (nextStrikerIndex === nonStrikerIndex) {
                nextStrikerIndex += 1;
            }
            setStrikerIndex(nextStrikerIndex);
            displayOvers()
        }
        console.log('You got wicket', e);
    }

    function extrasHandler(e) {
        setScore(score + 1)
        console.log('extra', e);

        const bowlerRuns = [...curBowlerRuns];
        bowlerRuns[currentBowlerIndex] += 1;
        setCurBowlerRuns(bowlerRuns)
    }

    // function runrate() {
    //     const runRate = overs !== 0 ? (score / overs).toFixed(2) : 0;
    //     // console.log(runRate);
    // }

    return (
        <div style={{ display: 'flex', gap: '100px' }}>
            <div>
                <div>
                    <h1>
                        Feeder
                    </h1>
                </div>
                <div>
                    <h2>
                        Runs:
                    </h2>
                    <div className="list-group">
                        {runs.map((score, index) => (
                            <button key={index} style={styles.listitem} onClick={() => runsHandler(score)}>
                                {score}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>
                        Wicket:
                    </h2>
                    <div className="list-group">
                        {wicket.map((wicket, index) => (
                            <button key={index} style={styles.listitem} onClick={() => wicketHandler(wicket)}>
                                {wicket}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>
                        Extras:
                    </h2>
                    <div className="list-group">
                        {extras.map((extras, index) => (
                            <button key={index} style={styles.listitem} onClick={() => extrasHandler(extras)}>
                                {extras}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <h2>
                        Results:
                    </h2>
                </div>
            </div>
            <div style={{ textAlign: 'center', }}>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: "20px", }}>
                    <div>
                        <h2>IND</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <h5>{score}/{wickets}({overs}.{balls})</h5>
                        </div>
                        <div>
                            <h3>Vs</h3>
                        </div>
                        <div>
                            <h5>{currentInnings === 1 ? 'Yet to bat' : '0-0'}</h5>
                        </div>
                    </div>
                    <div>
                        <h2>NZ</h2>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: "0px 20px", borderTop: '1px solid black' }}>
                    <div>
                        <div>
                            Batting
                        </div>
                        <div>
                            <div>{players[strikerIndex]}* -{[...playerRuns][strikerIndex]}</div>
                            <div>{players[nonStrikerIndex]}-{[...playerRuns][nonStrikerIndex]}</div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            current RR
                        </div>
                        <div>
                            {overs !== 0 ? (score / overs).toFixed(2) : 0}
                        </div>
                    </div>
                    <div>
                        <div>Bowling</div>
                        <div>{nzBowlers[currentBowlerIndex]}{curBowlerWickets[currentBowlerIndex]}-{curBowlerRuns[currentBowlerIndex]}</div>
                    </div>
                </div>
                <div>
                    {/* <h1>Scorecard</h1>
                <ol>
                    {[playerRuns].map((ele) => (
                        <li>
                            {ele}
                        </li>
                    ))}
                </ol> */}
                    {/* {playerRuns} */}
                    <ul>
                        {players.map((player, index) => (
                            <li key={index}>{player}: {playerRuns[index]}</li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Feeder;