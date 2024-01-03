// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    function navigateRoute(route) {
        console.log(route);
        if (route === "Live Scores") {
            navigate(`/scorecard`)
        }
    }

    const headerOptions = ['Live Scores', 'Schedule', 'Archives', 'News', 'Series', 'Teams', 'Videos', 'Rankings', 'More']
    return (
        // <div style={{ width: "980px", margin: "auto" }}>
        // style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: "20px", backgroundColor: "#009270" }}
        <div style={{ backgroundColor: "#009270", }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", justifyContent: "center", gap: "20px", backgroundColor: "#009270", fontFamily: "helvetica,'SegoeUI',Arial,sans-serif" }}>
                <div style={{ padding: "10px 18px 10px 20px", cursor: "pointer" }} onClick={() => navigate(`/`)}>
                    <img width={"100px"} src='https://static.cricbuzz.com/images/cb_logo.svg' alt='no' />
                </div>
                {headerOptions && headerOptions.map((ele) => (
                    <div key={ele} style={linkStyle}>
                        <div style={{ padding: "16px 6px 11px" }}>
                            <div onClick={() => navigateRoute(ele)}>{ele}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center", gap: "20px", backgroundColor: "#009270" }}>

                <div>
                    <Link to="/createNewMatch" style={linkStyle}>createNewMatch</Link>
                </div>
                <div>
                    <Link to="/scorecard" style={linkStyle}>Scorecard</Link>
                </div>
                <div>
                    <Link to="/ipl" style={linkStyle}>IPL</Link>
                </div>
                <div>
                    <Link to="/matches" style={linkStyle}>FeedMatch</Link>
                </div>
            </div>
        </div>
        // </div>
    );
};
const linkStyle = {
    all: "unset",
    color: 'white',
    cursor: 'pointer'
};
export default Header;
