import { WiSunset } from 'react-icons/wi';

function Info({ info, state }) {
    return (
        <div>
            {
                state === true ?
                    <div className="info">
                        <p id="City">{info.name}, {info.sys.country}</p>
                        <div className="oValue">
                            <p id="heat">{info.main.temp}</p><WiSunset className="fa-c" />
                        </div>
                        <p id="weather">{info.weather[0].description.charAt(0).toUpperCase() + info.weather[0].description.slice(1)}</p>
                        <div className="feel">
                            <p id="felt">{info.main.feels_like}</p><WiSunset className="fa-c" />
                        </div>
                    </div>
                    :
                    <div>
                        <p>
                            City not found
                        </p>
                    </div>
            }
        </div>
    )
}
export { Info };