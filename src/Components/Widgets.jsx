import React, { useEffect, useState } from 'react'
import './Widgets.css'
import { FaThermometerHalf } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { IoIosThunderstorm } from "react-icons/io";
import profile from '../assets/profile_img.png'
import { generateDateInDDMMYYYY, generateTimeInAmPmFormat } from '../utils/Helper';
import Stopwatch from './Stopwatch';
import { NavLink } from 'react-router-dom';
// import { fetchNewsDetails } from '../Apis/News';

function Widgets() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let m = localStorage.getItem("categories");
        let a = 0;
        let j = 0;
        let last = m.lastIndexOf(",")
        console.log(m);
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


    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [weather, setWeather] = useState();
    const [w, setW] = useState(false);
    const [news, setNews] = useState([]);
    const [n, setN] = useState(false);

    const fetchWeatherDetails = () => {
        const yash = "Delhi"
        fetch("http://api.weatherapi.com/v1/current.json?key=e0900c9f745f4fe2adf112724230412&q=$(yash)&aqi=no").then((res) => {
            return res.json();
        }).then((response) => {
            // console.log(response);
            setWeather(response)
            setW(true)
        }).catch((err) => {
            // console.log("Something went wrong in weather !");
        })
    }

    useEffect(() => {
        const dateInDDMMYYYY = generateDateInDDMMYYYY();
        setDate(dateInDDMMYYYY);
    }, [])

    useEffect(() => {
        const timeInAmPmFormat = generateTimeInAmPmFormat();
        setTime(timeInAmPmFormat);
    }, [])
    useEffect(() => {
        fetchWeatherDetails();
    }, [])

    useEffect(() => {
        fetchNews();
    }, [])


    const fetchNews = () => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-11-04&sortBy=english&apiKey=9926cdc149ab4d6a9e95322a72d5c4a0")
            .then(data => data.json())
            .then((res) => {
                const response = res.articles[12];
                console.log(response);
                setNews(response)
                setN(true);
            })
            .catch(err => console.log(err))
    }

    const [notes, setNotes] = useState("");
    
    const handleNotes = (e)=>{
        let n = e.target.value;
        localStorage.setItem("notes", n);
        // console.log(n);
        setNotes(n);
    }
    
    return (
        <div className='widgets'>
            <div className="upper-section">
                <div className="section section-1">
                    <div className="profile-box">
                        <div className="profile-img">
                            <img src={profile} />
                        </div>
                        <div className="information">
                            <p>{localStorage.getItem("inputName")}</p>
                            <p>{localStorage.getItem("inputUserName")}</p>
                            <h2>{localStorage.getItem("inputEmail")}</h2> <br />
                            <div className="choosed-categories">
                                {/* <div className="category">Horror</div>
                                <div className="category">Thriller</div>
                                <div className="category">Action</div>
                                <div className="category">Fiction</div> */}
                                {
                                    categories.map((value, idx) => {
                                        return <div className='category'>{value}</div>
                                    })
                                }
                            </div>

                        </div>
                    </div>

                    {
                        w && (
                            <div className="weather-box">
                                <div className="date">
                                    <p>{date}</p>
                                    <p>{time}</p>
                                </div>
                                <div className="weather">
                                    <div className="cloud equal-box">
                                        <img src={weather.current.condition.icon} className='thunder' />
                                        {/* <IoIosThunderstorm className='thunder' /> */}
                                        <p>{weather.current.condition.text}</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="celcius equal-box">
                                        <h1>{weather.current.temp_c} C</h1>
                                        <div className="pressure flex-row">
                                            <FaThermometerHalf className='small-icon' />
                                            <p>{weather.current.pressure_mb} mbar <br />Pressure</p>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="percentage equal-box">
                                        <div className="wind flex-row">
                                            <FaWind className='small-icon' />
                                            <p>{weather.current.wind_kph} km/h <br /> Wind</p>
                                        </div>
                                        <div className="humidity flex-row">
                                            <WiHumidity className='small-icon' />
                                            <p>{weather.current.humidity}% <br />Humidity</p>
                                        </div>

                                    </div>
                                </div>
                            </div>)
                    }
                </div>
                <div className="section section-2">
                    <h1>All notes</h1>
                    <textarea onChange={handleNotes} value={localStorage.getItem("notes")} placeholder='Enter your notes here' />
                </div>
                <div className="section section-3">
                    <div className="news-img">
                        <img src={news.urlToImage} />
                    </div>
                    <div className="news-heading">
                        <h2>{news.author}</h2>
                        <p>{date} | {time}</p>
                    </div>
                    <div className="news-content">
                        <p>{news.content}</p>
                    </div>
                </div>
            </div>
            <div className="lower-section">
                <div className="time">
                    <Stopwatch />
                </div>
            </div>

            <NavLink to='/page4'> <button className="browse">Browse</button></NavLink>


        </div>
    )
}

export default Widgets