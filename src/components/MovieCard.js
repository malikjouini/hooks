import React from 'react'
import Filter from './Filter'

function MovieCard(props) {
    return (
        
        <div className="container">
            <div className="box">
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Name:</span> {props.Name}</h3>
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Genre:</span> {props.Genre}</h3>
                <img src={`./images/movie${props.id}.jpg`} style={{ width: "250px", height: "300px" }} />
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Date de sortir:</span> {props.datesortir}</h3>
                <h3 id="color-props"><span id="color-text" style={{ color: "#4CAF50" }}>Rate:</span> {props.rate}</h3>
            </div>
        </div>
    )
}

export default MovieCard
