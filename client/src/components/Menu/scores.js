import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


export default function Scores({ matchDetails }) {

    // let baseUrl = "http://localhost:5050";
    // let params = useParams();
    // const [currentStriker, setCurrentStriker] = useState(0);
    // const [currentNonStriker, setCurrentNonStriker] = useState(1);
    // const [currentBowler, setCurrentBowler] = useState();

    useEffect(() => {
        console.log(matchDetails);
    }, [])

    return (
        <div style={{ margin: "20px" }}>
            {matchDetails && (
                <div>
                    <div style={{ paddingBottom: "10px" }}>
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}>{matchDetails.teams.team1.shortName} {matchDetails.teams.team1.score}/{matchDetails.teams.team1.wickets} ({matchDetails.teams.team1.overs}.{matchDetails.teams.team1.balls})</span>
                        <span style={{ fontSize: '12px', marginLeft: "10px" }}>CRR: {matchDetails.teams.team1.runRate}</span>
                    </div>
                    <div style={{ color: '#d0021b', fontSize: "14px" }}>
                        {matchDetails.status}
                    </div>

                    <div style={{ width: '50%', marginTop: "20px" }}>
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
                                    <th>Batter</th>
                                    <th></th>
                                    <th>Runs</th>
                                    <th>Balls</th>
                                    <th>4's</th>
                                    <th>6's</th>
                                    <th>SR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchDetails && matchDetails.score.batsmen[0].map((ele, index) => (
                                    (ele.name === matchDetails.teams.team1.currentStriker || ele.name === matchDetails.teams.team1.currentNonStriker || ele.status === 'out') && (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            <td>{ele.name} </td>
                                            {(ele.name === matchDetails.teams.team1.currentStriker || ele.name === matchDetails.teams.team1.currentNonStriker) && ele.status !== 'out' ? <td>batting </td> : <td style={{ fontSize: "13px", color: "#666" }}>{ele?.dismissalType} b {ele?.dismissedBy}</td>}
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
                                {matchDetails && matchDetails.score.bowlers[1].map((ele, index) => (
                                    // ele.name === matchDetails.teams.team2.currentBowler && (
                                    <tr style={{ textAlign: 'center' }} key={ele.name}>
                                        <td>{ele.name} </td>
                                        <td> {ele.overs}.{ele.balls}</td>
                                        <td> {ele.maidens}</td>
                                        <td>{ele.runs}</td>
                                        <td> {ele.wickets}</td>
                                        <td> {ele.economy}</td>
                                    </tr>
                                    // )
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <div style={{ width: "50%" }}>
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
                                        <th></th>
                                        <th>Runs</th>
                                        <th>Balls</th>
                                        <th>4's</th>
                                        <th>6's</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {matchDetails && matchDetails.score.batsmen[1].map((ele, index) => (
                                        // (ele.name === matchDetails.teams.team2.currentStriker || ele.name === matchDetails.teams.team2.currentNonStriker) && (
                                        <tr style={{ textAlign: 'center' }} key={ele.name}>
                                            {ele.name === matchDetails.teams.team2.currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
                                            {ele.name === matchDetails.teams.team2.currentStriker || ele.name === matchDetails.teams.team2.currentNonStriker ? <td> <b>Batting</b> </td> : <td style={{ fontSize: "13px", color: "#666" }}> {ele?.dismissedBy} {ele?.dismissalType} </td>}
                                            <td> {ele.runs}</td>
                                            <td> {ele.ballsFaced}</td>
                                            <td>{ele.fours}</td>
                                            <td> {ele.sixes}</td>
                                            <td>{ele.strikeRate}</td>
                                        </tr>
                                        // )
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
                                        ele.name === matchDetails.teams.team1.currentBowler && (
                                            <tr style={{ textAlign: 'center' }} key={ele.name}>
                                                {ele.name === matchDetails.teams.team1.currentBowler ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
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

    )
}












// <div style={{ display: 'flex' }}>
//     {/* first Innings */}
//     <div style={{ width: "50%" }}>
//         <div>
//             <div style={{ margin: '50px 0px 0px 50px' }}>
//                 <div style={{ display: 'flex', alignItems: 'end', gap: "10px" }}>
//                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>
//                         {matchDetails && matchDetails.teams.team1.shortName} {matchDetails && matchDetails.teams.team1.score}/{matchDetails && matchDetails.teams.team1.wickets}   ({matchDetails && matchDetails.teams.team1.overs}.{matchDetails && matchDetails.teams.team1.balls})
//                     </div>
//                     <div style={{ fontSize: "14px", color: "#666", fontWeight: "bold" }}>
//                         CRR: {matchDetails && matchDetails.teams.team1.runRate}
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div>
//             <table style={{ width: '100%' }}>
//                 <thead>
//                     <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
//                         <th>Batter</th>
//                         <th>Runs</th>
//                         <th>Balls</th>
//                         <th>4's</th>
//                         <th>6's</th>
//                         <th>SR</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {matchDetails && matchDetails.score.batsmen[0].map((ele, index) => (
//                         (index === currentStriker || index === currentNonStriker) && (
//                             <tr style={{ textAlign: 'center' }} key={ele.name}>
//                                 {index === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
//                                 <td> {ele.runs}</td>
//                                 <td> {ele.ballsFaced}</td>
//                                 <td>{ele.fours}</td>
//                                 <td> {ele.sixes}</td>
//                                 <td>{ele.strikeRate}</td>
//                             </tr>
//                         )
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//         <div>
//             <table style={{ width: '100%' }}>
//                 <thead>
//                     <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
//                         <th>Bowler</th>
//                         <th>Overs</th>
//                         <th>Maidens</th>
//                         <th>Runs</th>
//                         <th>Wickets</th>
//                         <th>Economy</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {matchDetails && matchDetails.score.bowlers[1].map((ele, index) => (
//                         <tr style={{ textAlign: 'center' }} key={ele.name}>
//                             {ele.name === currentBowler.name ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
//                             <td> {ele.overs}.{ele.balls}</td>
//                             <td> {ele.maidens}</td>
//                             <td>{ele.runs}</td>
//                             <td> {ele.wickets}</td>
//                             <td> {ele.economy}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>

//     {/* second innings */}
//     <div style={{ width: "50%" }}>
//         {matchDetails && matchDetails.score.detail.currentInnings === 2 && (
//             <div >
//                 <div>
//                     <div style={{ margin: '50px 0px 0px 50px' }}>
//                         <div style={{ display: 'flex', alignItems: 'end', gap: "10px" }}>
//                             <div style={{ fontSize: "20px", fontWeight: "bold" }}>
//                                 {matchDetails && matchDetails.teams.team2.shortName} {matchDetails && matchDetails.teams.team2.score}/{matchDetails && matchDetails.teams.team2.wickets}   ({matchDetails && matchDetails.teams.team2.overs}.{matchDetails && matchDetails.teams.team2.balls})
//                             </div>
//                             <div style={{ fontSize: "14px", color: "#666", fontWeight: "bold" }}>
//                                 CRR: {matchDetails && matchDetails.teams.team2.runRate}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <table style={{ width: '100%' }}>
//                         <thead>
//                             <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
//                                 <th>Batter</th>
//                                 <th>Runs</th>
//                                 <th>Balls</th>
//                                 <th>4's</th>
//                                 <th>6's</th>
//                                 <th>SR</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {matchDetails && matchDetails.score.batsmen[1].map((ele, index) => (
//                                 (index === currentStriker || index === currentNonStriker) && (
//                                     <tr style={{ textAlign: 'center' }} key={ele.name}>
//                                         {index === currentStriker ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
//                                         <td> {ele.runs}</td>
//                                         <td> {ele.ballsFaced}</td>
//                                         <td>{ele.fours}</td>
//                                         <td> {ele.sixes}</td>
//                                         <td>{ele.strikeRate}</td>
//                                     </tr>
//                                 )
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div>
//                     <table style={{ width: '100%' }}>
//                         <thead>
//                             <tr style={{ background: '#ecebeb', color: '#666', fontSize: "14px", fontWeight: '100' }}>
//                                 <th>Bowler</th>
//                                 <th>Overs</th>
//                                 <th>Maidens</th>
//                                 <th>Runs</th>
//                                 <th>Wickets</th>
//                                 <th>Economy</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {matchDetails && matchDetails.score.bowlers[0].map((ele, index) => (
//                                 <tr style={{ textAlign: 'center' }} key={ele.name}>
//                                     {ele.name === currentBowler.name ? <td>{ele.name} * </td> : <td>{ele.name} </td>}
//                                     <td> {ele.overs}.{ele.balls}</td>
//                                     <td> {ele.maidens}</td>
//                                     <td>{ele.runs}</td>
//                                     <td> {ele.wickets}</td>
//                                     <td> {ele.economy}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 <div>
//                     {matchDetails && (
//                         <div>
//                             <div>
//                                 {matchDetails.teams.team2.score > matchDetails.teams.team1.score && (
//                                     <div style={{ fontWeight: "bold", fontSize: "20px" }}>
//                                         {matchDetails.teams.team2.shortName} Won the Match
//                                     </div>
//                                 )}
//                             </div>

//                             <div>
//                                 {matchDetails.teams.team2.score < matchDetails.teams.team1.score && (
//                                     <div style={{ fontWeight: "bold", fontSize: "20px" }}>
//                                         {matchDetails.teams.team2.shortName} Need {matchDetails.teams.team1.score - matchDetails.teams.team2.score} to win
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                     )}
//                 </div>

//             </div>


//         )}


//     </div>


// </div>