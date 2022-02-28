import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import axios from 'axios'
import { Button } from "@mui/material";
export default function SimpleSlider({ data }) {
    var baseURL = 'https://api.themoviedb.org/3';
    // life cycles
    // hook
    useEffect(() => {
        var fullURL = baseURL + data;
        axios.get(fullURL).then((res) => {
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
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
                <div className="carousel__item">
                    <img src="https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg" alt="" />
                    <div className="carousel__item__info">
                        <h3>Spider man: Home coming</h3>
                        <p>A journalist with a lot to prove investigates the case of Anna Delvey, the Instagram-legendary German heiress who stole the hearts of New York’s socia...</p>
                        <Button variant="outlined">Outlined</Button>
                    </div>
                </div>
            </Slider>
            <div className="carousel__overlay"></div>
        </div>
    );

}