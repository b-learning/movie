import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import axios from 'axios'
import { Button } from "@mui/material";
export default function SimpleSlider({ data }) {
    // chạy lần đầu
    //
    var baseURL = 'https://api.themoviedb.org/3';
    // life cycles
    // hook
    var [list, setList] = useState([]);
    useEffect(() => {
        var fullURL = baseURL + data;
        axios.get(fullURL).then((res) => {
            setList(res.data.results);
            console.log(res.data.results);
        }).catch()
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                {list.map(item => {
                    return (
                        <div className="carousel__item">
                            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
                            <div className="carousel__item__info">
                                <h3>{item.name}</h3>
                                <p>{item.overview}</p>
                                <Button variant="outlined">Outlined</Button>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className="carousel__overlay"></div>
        </div>
    );

}