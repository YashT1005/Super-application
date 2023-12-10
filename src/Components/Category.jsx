import React, { useEffect, useState } from 'react'
import './Category.css'
import { IoMdWarning } from "react-icons/io";
import action from '../assets/action-img.png';
import drama from '../assets/drama-img.png';
import fantasy from '../assets/fantasy-img.png';
import fiction from '../assets/fiction-img.png';
import horror from '../assets/horror-img.png';
import music from '../assets/music-img.png';
import romance from '../assets/romance-img.png';
import thriller from '../assets/thriller-img.png';
import western from '../assets/western-img.png';
import { NavLink } from 'react-router-dom';

function Category() {

    const [categories, setCategories] = useState([]);
    const [lengthErr, setLengthErr] = useState(false);
    const [path, setPath] = useState("/page2");
    const [count, setCount] = useState(0);
    const [c, setC] = useState(0);

    const [selected, setSelected] = useState(false)

    function addCategory(data) {
        let choice = data.target.id;
        if (categories.includes(choice)) {
            const index = categories.indexOf(choice);
            categories.splice(index, 1)
            setCategories([...categories]);
            let c = count - 1;
            setCount(c)
        } else if (count <= 5) {
            setCategories([...categories, choice])
            let d = count + 1;
            setCount(d)
        }
        setSelected(!selected);
        console.log(count);

    }


    const handleNextPage = () => {
        let m = localStorage.getItem("categories");
        console.log(m[0]);
        if (categories.length < 3) {
            setLengthErr(true);
        }
    }
    const changePath = () => {
        if (categories.length >= 3) {
            setPath("/page3")
            setLengthErr(false)
            localStorage.setItem("categories", categories)
        }
        else {
            setPath("/page2")
        }
    }

    useEffect(() => {
        changePath();
    }, [categories]);


    return (
        <div>
            <div className="container">
                <div className="left-content">
                    <div className="left">
                        <h1>Super app</h1>
                        <p><b>Choose your <br /> entertainment <br /> category</b></p>
                        <div className="choosen-box">
                            {
                                categories.map((value, idx) => {
                                    return <div className='choosed'><p>{value}</p><p>X</p></div>
                                })
                            }
                        </div>
                        {
                            lengthErr ? (
                                <p className="warning"> <IoMdWarning /> &nbsp; Mininum 3 category required</p>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="options">
                        <div className="option option-1" id='Action' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Action") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Action'>Action</p>
                            <img id='Action' src={action} />
                        </div>
                        <div className="option option-2" id='Drama' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Drama") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Drama'>Drama</p>
                            <img id='Drama' src={drama} />
                        </div>
                        <div className="option option-3" id='Romance' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Romance") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Romance'>Romance</p>
                            <img id='Romance' src={romance} />
                        </div>
                        <div className="option option-4" id='Thriller' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Thriller") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Thriller'>Thriller</p>
                            <img id='Thriller' src={thriller} />
                        </div>
                        <div className="option option-5" id='Western' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Western") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Western'>Western</p>
                            <img id='Western' src={western} />
                        </div>
                        <div className="option option-6" id='Horror' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Horror") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Horror'>Horror</p>
                            <img id='Horror' src={horror} />
                        </div>
                        <div className="option option-7" id='Fantasy' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Fantasy") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Fantasy'>Fantasy</p>
                            <img id='Fantasy' src={fantasy} />
                        </div>
                        <div className="option option-8" id='Music' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Music") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Music'>Music</p>
                            <img id='Music' src={music} />
                        </div>
                        <div className="option option-9" id='Fiction' onClick={addCategory}
                            style={{
                                border: `${categories.includes("Fiction") ? "4px solid green" : "4px solid white"}`
                            }}>
                            <p id='Fiction'>Fiction</p>
                            <img id='Fiction' src={fiction} />
                        </div>
                    </div>
                    <NavLink to={path} ><button onClick={handleNextPage} className='nextPage'>Next Page</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Category