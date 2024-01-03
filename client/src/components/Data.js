export default function Data() {

    let baseUrl = "http://localhost:5050"

    let matchCollection = {
        "match_id": "1",
        "teams": ["India", "Australia"],
        "date": "2023-12-10",
        "venue": "MCG",
        "result": "",
        "innings": [
            {
                "team": "India",
                "players": [
                    {
                        "player_name": "",
                        "runs": 0,
                        "wickets": 0,
                        "overs_bowled": 0
                    },
                ],
                "total_runs": 0,
                "total_wickets": 0,
                "overs_played": 0
            },
            {
                "team": "Australia",
                "players": [
                    {
                        "player_name": "",
                        "runs": 0,
                        "wickets": 0,
                        "overs_bowled": 0
                    },
                ],
                "total_runs": 0,
                "total_wickets": 0,
                "overs_played": 0
            }
        ]
    }

    // let playerCollection = {
    //     "player_name": "Player 1",
    //     "runs": 0,
    //     "balls_faced": 0,
    //     "fours": 0,
    //     "sixes": 0,
    //     "status": "not out",
    //     "dismissal_type": "type_of_dismissal",
    //     "overs_bowled": 0,
    //     "maidens": 0,
    //     "runs_conceded": 0,
    //     "wickets_taken": 0
    // }

    const postData = async () => {

        matchCollection.result = "INDIA"
        await fetch(`${baseUrl}/save`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                // input: inputText
                // details: matchdetails
                details: matchCollection
                // details: playerCollection
                // details: teams
            })
        }).then(resp => resp.json());
    }

    const updateData = async () => {
        matchCollection.result = "DRAW";
        try {
            let results = await fetch(`${baseUrl}/update/657046764f9de92a276009bf`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    details: matchCollection
                })
            });

            results = await results.json();
            console.log(results);
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        <div>
            <input type="button" value={"postData"} onClick={postData} />
            <input type="button" value={"updateData"} onClick={updateData} />
        </div>
    )
}