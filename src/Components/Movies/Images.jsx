import React, { useEffect, useState } from 'react'
import './Images.css'
import axios from 'axios'


function Images({genre}) {

    const [id, setId] = useState("");
    useEffect(() => {
        if(genre === "Action")
        {
           setId("28")
        }
        if(genre === "Romance")
        {
           setId("10749")
        }
        if(genre === "Thriller")
        {
           setId("53")
        }
        if(genre === "Western")
        {
           setId("37")
        }
        if(genre === "Drama")
        {
           setId("18")
        }
        if(genre === "Horror")
        {
           setId("27")
        }
        if(genre === "Fantasy")
        {
           setId("14")
        }
        if(genre === "Music")
        {
           setId("10402")
        }
        if(genre === "Fiction")
        {
           setId("878")
        }
        getMoviesByGenre(id);
    })
    const getMoviesByGenre = async (id) => {
        const options = {
            method: 'GET',
            // url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
            url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE4ZjA3NWZjNDYzZDI2NGJkNWI1MzRhMmIxMzRmZSIsInN1YiI6IjY1NzNhM2I3MDA2YjAxMDEzODFhYTMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QlMDVjVBmGoS6ryF8r3Us2kkHDE1PPogfbaMJhvoUEk'
            }
        };


        axios
            .request(options)
            .then(function (response) {
                // return (response.data.results[0].original_title);
                setPoster1(response.data.results[0].poster_path);
                setPoster2(response.data.results[7].poster_path);
                setPoster3(response.data.results[9].poster_path);
                setPoster4(response.data.results[10].poster_path);
                console.log(url);
            })
            .catch(function (error) {
                console.error(error);
            });
    }
    let [poster1, setPoster1] = useState("");
    let [poster2, setPoster2] = useState("");
    let [poster3, setPoster3] = useState("");
    let [poster4, setPoster4] = useState("");
    return (
        <div className='Images-box'>
            <p>{genre}</p>
            <div className="suggestions">
                <div className="movie-img"><img src={`https://image.tmdb.org/t/p/w500${poster1}`} /></div>
                <div className="movie-img"><img src={`https://image.tmdb.org/t/p/w500${poster2}`} /></div>
                <div className="movie-img"><img src={`https://image.tmdb.org/t/p/w500${poster3}`} /></div>
                <div className="movie-img"><img src={`https://image.tmdb.org/t/p/w500${poster4}`} /></div>
            </div>
        </div>
    )
}

export default Images