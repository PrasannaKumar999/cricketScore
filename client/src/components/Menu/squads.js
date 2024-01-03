import { useState, useEffect } from "react";

export default function Squads({ matchDetails }) {
    let baseUrl = "http://localhost:5050"

    const [data, setData] = useState();
    const [team1, setTeam1] = useState();
    const [team2, setTeam2] = useState();


    useEffect(() => {
    }, [])


    return (
        <div style={{ width: "60%", margin: '20px', }}>
            <div style={{ display: 'flex', background: '#daf1eb', height: '48px', padding: '0px 20px', alignItems: "center", borderRadius: '5px', justifyContent: "space-between" }}>
                <div><b>{matchDetails.teams.team1.shortName}</b></div>
                <div><b>{matchDetails.teams.team2.shortName}</b></div>
            </div>
            <div style={{ textAlign: "center", margin: "20px" }}><b>Playing XI</b></div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "50%" }}>
                    {matchDetails.score.batsmen[0].map(ele => (
                        <div key={ele.name} style={{ display: "flex", alignItems: "center", padding: "20px", gap: "20px", borderBottom: '1px solid #f0f0f0' }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: '50%', border: '1px solid #d3d3d3' }}></div>
                            <div>
                                <div>{ele.name}</div>
                                <div style={{ fontSize: '12px', color: '#666' }}>position</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "end", width: "50%" }}>
                    {matchDetails.score.batsmen[1].map(ele => (
                        <div key={ele.name} style={{ display: "flex", alignItems: "center", padding: "20px", gap: "20px", justifyContent: "end", borderBottom: '1px solid #f0f0f0', borderLeft: '1px solid grey' }}>
                            <div>
                                <div>{ele.name}</div>
                                <div> <div style={{ fontSize: '12px', color: '#666' }}>position</div></div>
                            </div>
                            <div style={{ width: "40px", height: "40px", borderRadius: '50%', border: '1px solid #d3d3d3' }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}