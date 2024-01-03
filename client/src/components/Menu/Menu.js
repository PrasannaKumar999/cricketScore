import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Scorecard from "../scorecard";
import Squads from "./squads";
import Utility from "../Utility";
import Scores from "./scores";
import Commentary from "./commentary";
import io from "socket.io-client"
const socket = io.connect("http://localhost:3001");

export default function Menu() {
    const [selectedOption, setSelectedOption] = useState('Commentary');
    const [matchDetails, setMatchDetails] = useState('')

    const options = ['Commentary', 'Scorecard', 'Squads', 'Highlights', 'Full Commentary', 'Live Blog', 'Match Facts', 'News', 'Photos']

    const handleOptionClick = (option) => {
        console.log(option);
        setSelectedOption(option);
    };

    let params = useParams();
    let baseUrl = "http://localhost:5050";

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        console.log('checkkkk');
        socket.on('recieved', (data) => {
            setMatchDetails(data.updatedVal)
        })
    }, [])

    async function getData() {
        console.log(params.matchId);
        try {
            const response = await fetch(`${baseUrl}/getMatchDetails/${params.matchId}`);
            const data = await response.json();
            setMatchDetails(data.match[0]);
            console.log(data.match[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{ background: "white" }}>
            <div style={{ display: 'flex', flexWrap: "wrap", gap: "20px", margin: "0px 20px", borderBottom: "1px solid #e3e6e3" }}>
                {options && options.map(ele => (
                    <div key={ele} onClick={() => handleOptionClick(ele)} style={{ borderBottom: selectedOption === ele ? '4px solid green' : '', padding: "10px 0px", cursor: "pointer" }}>{ele}</div>
                ))}

            </div>
            <div>
                {selectedOption && selectedOption === "Commentary" && (
                    <Commentary matchDetails={matchDetails} />
                )}
                {selectedOption && selectedOption === "Scorecard" && (
                    <Scores matchDetails={matchDetails} />
                )}
                {selectedOption && selectedOption === "Squads" && (
                    <Squads matchDetails={matchDetails} />
                )}
            </div>
        </div>
    )
}