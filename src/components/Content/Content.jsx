import React, { useState, useEffect } from "react";
import "./Content.css"

const Content = () => {
    let [heros, setHeros] = useState([])
    let [heroDetails, setheroDetails] = useState([])

    useEffect(() => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                setHeros(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    let Details = (data) => {
        console.log(data)
        setheroDetails(data)
    }

    let [width, setWidth] = useState('')
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
    })

    return (
       
            <div className="content">            
            {heros.map((data) => {
                return (
                    <div className="card" key={data.id}>
                <img src={((width < 600) ? data.images.sm : data.images.md)}  alt="" />                        

                        <h2>Name - {data.name}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td>Power</td>
                                    <td>Speed</td>
                                    <td>strength</td>
                                    <td>combat</td>                        
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.powerstats.power}</td>
                                    <td>{data.powerstats.speed}</td>
                                    <td>{data.powerstats.strength}</td>
                                    <td>{data.powerstats.combat}</td>                                  
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>HairColor</td>
                                    <td>Height</td>
                                    <td>Weight</td>
                                </tr>
                                <tr>
                                    <td>{data.appearance.gender}</td>
                                    <td>{data.appearance.hairColor}</td>
                                    <td>{data.appearance.height[0]}</td>
                                    <td>{data.appearance.weight[1]}</td>
                                </tr>
                            </tbody>
                        </table>                       
                    </div>
                )
            })}
            </div>
    );
}

export default Content;