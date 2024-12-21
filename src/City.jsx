import cold from './cold.jpeg';
import hot from './hot.jpeg';
import moderate from './moderate.jpeg';
import React from "react";
import sad from './sad.jpeg'

export default function City(props) {
    const [state, setstate] = React.useState({
        city: "Gajuwaka",
        temperature: "26",
        temperaturemin: "23",
        temperaturemax: "28",
        humidity: "17",
        error: false,
    });

    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bd4377a3ee938ae7ca09f983ef201709";

    React.useEffect(() => {
        if (props.city) {
            fetch(`${URL}?q=${props.city}&appid=${API_KEY}&units=metric`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("City not found");
                    }
                    return response.json();
                })
                .then((data) => {
                    setstate({
                        city: data.name,
                        temperature: data.main?.temp ,
                        temperaturemin: data.main?.temp_min ,
                        temperaturemax: data.main?.temp_max ,
                        humidity: data.main?.humidity ,
                        error: false,
                    });
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setstate((prevState) => ({
                        ...prevState,
                        error: true,
                    }));
                });
        }
    }, [props.city]);

    let pic;
    if (state.temperature <= 20) {
        pic = cold;
    } else if (state.temperature >= 21 && state.temperature <= 30) {
        pic = moderate;
    } else {
        pic = hot;
    }

    return (
        <div className="City">
            {state.error ? (
                <div>
                    <img src={sad} width="420" height="300"/>
                    <h3>OOPS!!!!</h3>
                    <h2>city not found</h2>
                    <p>please try again</p>
                    
                </div>
            ) : (
                <div>
                    <img src={pic} alt="Weather condition" width="420" />
                    <h2 className="cityname">{state.city}</h2>
                    <p>Temperature: {state.temperature}°C</p>
                    <p>Temperature Min: {state.temperaturemin}°C</p>
                    <p>Temperature Max: {state.temperaturemax}°C</p>
                    <p>Humidity: {state.humidity}%</p>
                </div>
            )}
        </div>
    );
}
