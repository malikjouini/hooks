import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ Card }) {
    return (
        <div>
            {
                Card.map((user, i) => {
                    return (

                        <MovieCard
                            id={Card[i].id}
                            Name={Card[i].Name}
                            Genre={Card[i].Genre}
                            image={Card[i].image}
                            datesortir={Card[i].datesortir}
                            rate={Card[i].rate}
                        />

                    )

                })

            }
        </div>
    )
}

export default MovieList
