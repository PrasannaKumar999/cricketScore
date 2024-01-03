import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ipl() {
    const styles = {
        // width: '250px',
        width: "fit-content",
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        marginRight: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '1px',
        // minWidth: '250px',
        margin: '30px',
        padding: '10px 15px',
        cursor: 'pointer'
    }
    const box = {
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        /* Hide scrollbar for most browsers */
        "msOverflowStyle": "none", // Microsoft Edge
        "scrollbarColor": "transparent transparent", // Firefox
        "&::WebkitScrollbar": {
            display: "none", // Hide scrollbar for WebKit browsers (Chrome, Safari)
        },
    };

    const [matchDetails, setMatchDetails] = useState()

    let navigate = useNavigate();

    useEffect(() => {
        getData()
    }, []);

    function matchHandler(e) {
        console.log(e);
        navigate(`/feederIpl/${e}`)
    }

    async function getData() {
        try {
            const response = await fetch(`http://localhost:5050/getData`);
            const data = await response.json();
            console.log(data.match);
            setMatchDetails(data.match)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={box}>
            {matchDetails && (
                matchDetails.map(ele => (
                    (ele.series === "Indian Premier League, 2024") && (
                        <div key={ele._id} style={styles} onClick={() => matchHandler(ele._id)}>
                            <div style={{ display: 'flex', gap: '20px', padding: "10px 0px", alignItems: 'center' }}>
                                <div style={{ fontSize: '14px' }}>{ele.series}</div>
                                <div style={{ fontSize: '14px', backgroundColor: "red", padding: "4px 10px", borderRadius: "10px", color: "white" }}>{ele.type}</div>

                            </div>
                            <div style={{ display: 'flex', gap: "20px" }}>
                                <div style={{ fontSize: '12px' }}>{ele.venue.name}</div>

                            </div>
                            <div style={{ marginTop: "10px", display: "flex" }}>
                                <div>{ele.teams.team1.shortName}</div>
                                <div style={{ marginLeft: "80px" }}>
                                    {ele?.teams?.team1?.overs !== 0 && ele?.teams?.team1?.balls !== 0 ? <b>
                                        <span>{ele?.teams?.team1?.score}-</span>
                                        <span>{ele?.teams?.team1?.wickets}</span>
                                        <span> ({ele?.teams?.team1?.overs}.{ele?.teams?.team1?.balls})</span>
                                    </b> : <b>Yet to bat</b>}

                                </div>
                            </div>
                            <div style={{ marginTop: "10px", display: "flex" }}>
                                <div>{ele.teams.team2.shortName}</div>
                                <div style={{ marginLeft: "80px" }}>
                                    {ele?.teams?.team2?.overs !== 0 && ele?.teams?.team2?.balls !== 0 ? <b>
                                        <span>{ele?.teams?.team2?.score}-</span>
                                        <span>{ele?.teams?.team2?.wickets}</span>
                                        <span> ({ele?.teams?.team2?.overs}.{ele?.teams?.team2?.balls})</span>
                                    </b> : <b>Yet to bat</b>}

                                </div>
                            </div>
                            <div style={{ marginTop: "10px" }}>{ele.status}</div>
                        </div>
                    )
                ))
            )}
        </div>
    )
}