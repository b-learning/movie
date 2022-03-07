import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import axios from 'axios'
import { Button } from "@mui/material";
export default function SimpleSlider({ data, isPoster }) {
    // chạy lần đầu
    //
    var baseURL = 'https://api.themoviedb.org/3';
    // life cycles
    // hook
    var [list, setList] = useState([]);

    // useEffect(callback function) : chạy mỗi khi render component (ko quan tâm lần đầu hay lần thứ mấy)
    // useEffect(callback function , [dependence]): chạy khi render lần đầu và dependence thay đổi

    // khi nào thì reactjs re-render: bất cứ khi nào mà state bị thay đổi
    useEffect(() => {
        var fullURL = baseURL + data;
        axios.get(fullURL).then((res) => {
            setList(res.data.results);
            console.log(res.data.results);
        }).catch()

    }, []);

    let numberOfItem = isPoster ? 6 : 1


    const settings = {
        dots: false,
        infinite: true,
        arrows: isPoster,
        speed: 500,
        slidesToShow: numberOfItem,
        slidesToScroll: numberOfItem,
        // carousel => isPoster == undifine => !undifine == true
        // poster => isPoster == true => !true == false
        autoplay: !isPoster
    };
    return (
        <div className="carousel">
            <Slider {...settings}>
                {list.map(item => {

                    return (
                        <div className="carousel__item">
                            <img src={`https://image.tmdb.org/t/p/original${isPoster ? item.poster_path : item.backdrop_path}`} alt="" />
                            {isPoster ? <div></div> : (<div className="carousel__item__info">
                                <h3>{item.name}</h3>
                                <p>{item.overview}</p>
                                <Button variant="outlined">Outlined</Button>
                            </div>)}
                        </div>
                    )
                })}
            </Slider>
            <div className="carousel__overlay"></div>
        </div>
    );

}