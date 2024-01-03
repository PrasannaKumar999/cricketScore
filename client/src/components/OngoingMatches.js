import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Ongoing() {
    const styles = {
        // width: '250px',
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        marginRight: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginLeft: '1px',
        minWidth: '250px',
        margin: '30px 0px',
        padding: '0px 5px 0px 12px',
        cursor: 'pointer',
    }
    const box = {
        display: "flex",
        overflowX: "auto",
        gap: "10px",
        whiteSpace: "nowrap",
        padding: "0px 1px",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        "msOverflowStyle": "none",
        "scrollbarColor": "transparent transparent",
        "&::WebkitScrollbar": {
            display: "none",
        },
    };




    let baseUrl = "http://localhost:5050"
    const [data, setData] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const [matchDetails, setMatchDetails] = useState()


    useEffect(() => {
        getData()
    }, []);

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

    function matchHandler(e) {
        navigate(`/feederIpl/${e}`)
    }

    return (
        <div style={box}>
            {matchDetails && (
                matchDetails.filter(ele => ele.series).reverse().map(ele => (
                    <div key={ele._id} style={styles} onClick={() => matchHandler(ele._id)}>
                        <div style={{ display: 'flex', gap: '20px', padding: "10px 0px", alignItems: 'center', }}>
                            <div style={{ fontSize: '10px', textOverflow: "ellipsis" }}>{ele?.series}</div>
                            <div style={{ backgroundColor: ele.type === 'TEST' ? "#e90b37" : (ele.type === 'ODI' ? "#0579bc" : "#464646"), fontSize: '10px', padding: "1px", borderRadius: "24px", color: "white", minWidth: "34px", textAlign: "center" }}>{ele?.type}</div>
                        </div>
                        <div style={{ display: 'flex', gap: "20px" }}>
                            {/* <div style={{ fontSize: '12px' }}>{ele?.venue?.name}</div> */}
                        </div>
                        <div style={{ marginTop: "10px", display: "flex", }}>
                            <div>{ele?.teams?.team1?.shortName}</div>
                            <div style={{ marginLeft: "80px" }}>
                                {ele?.teams?.team1?.overs !== 0 ? <b>
                                    <span>{ele?.teams?.team1?.score}-</span>
                                    <span>{ele?.teams?.team1?.wickets}</span>
                                    <span> ({ele?.teams?.team1?.overs}.{ele?.teams?.team1?.balls})</span>
                                </b> : 'Yet to bat'}
                            </div>
                        </div>
                        <div style={{ marginTop: "10px", display: "flex" }}>
                            <div>{ele?.teams?.team2?.shortName}</div>
                            <div style={{ marginLeft: "80px" }}>
                                {ele?.teams?.team2?.overs !== 0 && ele?.teams?.team2?.balls !== 0 ? <b>
                                    <span>{ele?.teams?.team2?.score}-</span>
                                    <span>{ele?.teams?.team2?.wickets}</span>
                                    <span> ({ele?.teams?.team2?.overs}.{ele?.teams?.team2?.balls})</span>
                                </b> : 'Yet to bat'}

                            </div>
                        </div>
                        <div style={{ marginTop: "10px", color: "#E90B37", fontSize: "12px", fontWeight: "500", paddingBottom: "10px" }}>{ele?.status}</div>
                    </div>
                ))
            )}
        </div>
    )
}