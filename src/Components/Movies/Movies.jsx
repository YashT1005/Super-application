import React, { useEffect, useState } from 'react'
import './Movies.css'
// import { getMoviesByGenre } from '../../Apis/Movies';
import Images from './Images';


function Movies() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        let m = localStorage.getItem("categories");
        let a = 0;
        let j = 0;
        let last = m.lastIndexOf(",")
        // console.log(m);
        for (let i = 0; i <= last; i++) {
            let ch = m.charAt(i);
            if (i === last) {
                let value = m.slice(i + 1, m.length);
                // console.log(value);
                setCategories(categories => [...categories, value]);
            }
            if (ch === ",") {
                let value = m.slice(a, i);
                setCategories(categories => [...categories, value]);
                // console.log(m.slice(a, i));
                a = i + 1;
            }

        }

    }, [])




    return (
        <div className="movies-container">
            <h1 >
                Super apps
            </h1>
            <div className="content-box">
                <p>Entertainment according to your choice</p>
                {
                    categories.map((value) => {
                        return <Images genre={value} />

                    })
                }
            </div>
        </div>
    )
}

export default Movies