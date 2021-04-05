import React from 'react'
import '../App.css'


const Filter = ({ searchfield, searchChange }) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search.." onChange={searchChange} />
        </div>
    )
}

export default Filter
