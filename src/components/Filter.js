import React, { useState, useEffect } from 'react'
import '../App.css'
import { Card } from './Card'
import MovieCard from './MovieCard'
import MovieList from './MovieList'

function Filter() {
    const [title, setTitle] = useState('')
    const [searchresult, setseachResult] = useState([])
    const handleChange = e => {
        setTitle(e.target.value)
    }
    useEffect(() => {
        const results = Card.filter(film =>
            film.toLowerCase().includes(title)
        );
        setseachResult(results);
    }, [title]);
    return (
        <div>
            <input type="text" className="search" placeholder="Search.." value={title}
                onChange={handleChange} />
            <button className="btn" onClick={useEffect}>Search</button>
            <div>
                {searchresult.map(item => (
                    <li>{item}</li>
                ))}
            </div>
        </div>
    )
}

export default Filter
