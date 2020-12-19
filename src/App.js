import React, { useEffect, useState } from 'react';
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export const App = () => {
    const [city, setCity] = useState(null); //Will use after getting json data for particular city
    const [search, setSearch] = useState('Bhubaneswar');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=yourapikey`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);

        }

        fetchApi();
    }, [search])
    return (
        <>

            <div className="app">
                <card className="app__card">
                    <h1>Live Weather</h1>
                    <br />
                    <input
                        type='search'
                        onChange={event => { setSearch(event.target.value) }}
                        value={search}

                    />
                    <br /><br />
                    {!city ? (
                        <p style={{ color: 'darkorange', fontSize: '2rem' }}>No data found!</p>
                    ) : (
                            <div>
                                <CloudTwoToneIcon />
                                <h2>{search}</h2>
                                <h1>{city.temp}&deg; Cel</h1>
                                <h3>Min: {city.temp_min}&deg; Cel | Max:{city.temp_max}&deg; Cel</h3>
                            </div>

                        )}
                </card>
            </div>

        </>
    )
}

