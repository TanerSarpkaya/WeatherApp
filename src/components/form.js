import { useState } from "react"
import axios from "axios";

export default function Form({ info, setInfo, setState }) {
    const [city, setCity] = useState("");
    const handleChange = async () => {
        const api = process.env.REACT_APP_API_KEY;
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
        await axios(baseUrl)
            .then(res => { setInfo(res.data); setState(true) })
            .catch((e) => { setState(false); alert(e.response.data.message) });

    }
    return (
        <div>
            <h1>Weather</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleChange() }}>
                <div className="form">
                    <input value={city} onChange={(e) => setCity(e.target.value)} className="inputText" type="text" placeholder="City Name" />
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn">Enter</button>
                </div>
            </form>
        </div>
    )
}