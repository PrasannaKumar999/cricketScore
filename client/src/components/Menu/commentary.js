import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';


export default function Commentary({ matchDetails }) {

    useEffect(() => {
        console.log(matchDetails);
    }, [])

    return (
        <div style={{ margin: "20px" }}>
            {matchDetails && (
                <div>
                    {
                        matchDetails.score.detail.currentInnings === 1 && (
                            <div style={{ paddingBottom: "10px" }}>
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{matchDetails.teams.team1.shortName} {matchDetails.teams.team1.score}/{matchDetails.teams.team1.wickets} ({matchDetails.teams.team1.overs}.{matchDetails.teams.team1.balls})</span>
                                <span style={{ fontSize: '12px', marginLeft: "10px" }}>CRR: {matchDetails.teams.team1.runRate}</span>
                            </div>
                        )
                    }
                    {
                        matchDetails.score.detail.currentInnings === 2 && (
                            <div style={{ paddingBottom: "10px" }}>
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{matchDetails.teams.team2.shortName} {matchDetails.teams.team2.score}/{matchDetails.teams.team2.wickets} ({matchDetails.teams.team2.overs}.{matchDetails.teams.team2.balls})</span>
                                <span style={{ fontSize: '12px', marginLeft: "10px" }}>CRR: {matchDetails.teams.team2.runRate}</span>
                            </div>
                        )
                    }
                    <div style={{ color: '#d0021b', fontSize: "14px" }}>
                        {matchDetails.status}
                    </div>

                    <div style={{ width: '50%', marginTop: "20px" }}>
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
                                {matchDetails && matchDetails.score.batsmen[matchDetails.score.detail.currentInnings - 1].map((ele, index) => (
                                    (ele.name === `${matchDetails.score.detail.currentInnings === 1 ? matchDetails.teams.team1.currentStriker : matchDetails.teams.team2.currentStriker}` || ele.name === `${matchDetails.score.detail.currentInnings === 1 ? matchDetails.teams.team1.currentNonStriker : matchDetails.teams.team2.currentNonStriker}`) && (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            {ele.name === `${matchDetails.score.detail.currentInnings === 1 ? matchDetails.teams.team1.currentStriker : matchDetails.teams.team2.currentStriker}` ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
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

                    <div style={{ width: "50%" }}>
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
                                {matchDetails && matchDetails.score.bowlers[`${matchDetails.score.detail.currentInnings === 1 ? 1 : 0}`].map((ele, index) => (
                                    ele.name === `${matchDetails.score.detail.currentInnings === 1 ? matchDetails.teams.team2.currentBowler : matchDetails.teams.team1.currentBowler}` && (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            {ele.name === matchDetails.teams.team2.currentBowler ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                            <td> {ele.overs}.{ele.balls}</td>
                                            <td> {ele.maidens}</td>
                                            <td>{ele.runs}</td>
                                            <td> {ele.wickets}</td>
                                            <td> {ele.economy}</td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: "15px", fontSize: "12px", color: ' #666' }}>
                        {/* <span><b>Recent</b> :  ... | 1 1 1 1 1 1 | 0 1 6 1 1 1</span> */}
                        <span><b>Recent</b> :  ... {matchDetails && matchDetails?.score?.recentOvers && (
                            matchDetails?.score?.recentOvers.map((ele, index) => (
                                <span key={index} style={{ padding: "2px 5px", margin: "0px 1px" }}>{ele}</span>
                            ))
                        )}</span>
                    </div>
                </div>
            )}
            {/* <div style={{ width: "50%" }}>
                {matchDetails && matchDetails.score.detail.currentInnings === 2 && (
                    <div >
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
                                    {matchDetails && matchDetails.score.batsmen[1].map((ele, index) => (
                                        (ele.name === matchDetails.teams.team2.currentStriker || ele.name === matchDetails.teams.team2.currentNonStriker) && (
                                            <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                {ele.name === matchDetails.teams.team1.currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
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
                                            {ele.name === matchDetails.teams.team1.currentBowler ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
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
            </div> */}
        </div>

    )
}












