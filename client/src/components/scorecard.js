import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Feeder from "./Feeder";


export default function Scorecard() {
    const styles = {
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
        backgroundColor: "white"
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
        overflowX: "hidden"

    };


    let baseUrl = "http://localhost:5050";
    const navigate = useNavigate();
    const scroll = useRef(null);

    // const [data, setData] = useState();
    // const [team1, setTeam1] = useState();
    // const [team2, setTeam2] = useState();
    // const [score, setScore] = useState();
    // const { matchId } = useParams();

    const [matchDetails, setMatchDetails] = useState()

    // useEffect((ele, index) => {
    //     const getData = async () => {
    //         try {
    //             const response = await fetch(`${baseUrl}/getData`);
    //             const res = await response.json();
    //             if (res) {
    //                 setData(res);
    //                 setScore(res.match[0].details.innings[0].runs)
    //             }

    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getData()
    // }, [])

    // useEffect(() => {
    //     if (data) {
    //         const team1Players = data.teams[0].team1.map((ele) => {
    //             const player = data.players.find((obj) => ele === obj.parentid);
    //             return player ? player.player_name : null;
    //         });
    //         const team2Players = data.teams[1].team2.map((ele) => {
    //             const player = data.players.find((obj) => ele === obj.parentid);
    //             return player ? player.player_name : null;
    //         });

    //         setTeam1(team1Players.filter(Boolean));
    //         setTeam2(team2Players.filter(Boolean));
    //     }
    // }, [data]);
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
        navigate(`/scorecard/${e}`)
        // navigate(`/menu`)
    }

    const handleScroll = () => {
        if (scroll.current) {
            scroll.current.style.scrollBehavior = 'auto';
        }
    };

    function scrollBar(position) {
        if (scroll.current) {
            scroll.current.style.scrollBehavior = 'smooth';
            if (position === 'right') {
                scroll.current.scrollLeft += 680; // Adjust the scroll amount as needed
            }
            if (position === 'left') {
                scroll.current.scrollLeft -= 680; // Adjust the scroll amount as needed
            }
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <div style={box} ref={scroll} onScroll={handleScroll}>
                <div style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: '40%',
                    right: '1%',
                    borderRadius: '50%',
                    width: '40px',
                    height: '30px',
                    cursor: "pointer",
                    opacity: 0.8
                }} onClick={() => scrollBar('right')}>
                    <img src="https://static.cricbuzz.com/images/view_next.png" alt="next" />
                </div>
                <div style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: '40%',
                    left: '1%',
                    borderRadius: '50%',
                    width: '40px',
                    height: '30px',
                    cursor: "pointer",
                    opacity: 0.8
                    ,
                }} onClick={() => scrollBar('left')}>
                    <img src="https://static.cricbuzz.com/images/view_prev.png" alt="next" />
                </div>
                {
                    matchDetails && (
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
                                        {(ele?.teams?.team1?.overs !== 0 || ele?.teams?.team1?.balls !== 0) ? <b>
                                            <span>{ele?.teams?.team1?.score}-</span>
                                            <span>{ele?.teams?.team1?.wickets}</span>
                                            <span> ({ele?.teams?.team1?.overs}.{ele?.teams?.team1?.balls})</span>
                                        </b> : 'Yet to bat'}
                                    </div>
                                </div>
                                <div style={{ marginTop: "10px", display: "flex" }}>
                                    <div>{ele?.teams?.team2?.shortName}</div>
                                    <div style={{ marginLeft: "80px" }}>
                                        {ele?.teams?.team2?.overs !== 0 || ele?.teams?.team2?.balls !== 0 ? <b>
                                            <span>{ele?.teams?.team2?.score}-</span>
                                            <span>{ele?.teams?.team2?.wickets}</span>
                                            <span> ({ele?.teams?.team2?.overs}.{ele?.teams?.team2?.balls})</span>
                                        </b> : 'Yet to bat'}

                                    </div>
                                </div>
                                <div style={{ marginTop: "10px", color: ele?.result ? "#1866db" : "#E90B37", fontSize: "12px", fontWeight: "500", paddingBottom: "10px" }}>{ele?.result ? ele.result : ele?.status}</div>
                            </div>
                        ))
                    )
                }
            </div >
        </div>

    )
}