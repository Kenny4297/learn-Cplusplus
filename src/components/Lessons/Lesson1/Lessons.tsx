import React, { useRef } from 'react';
import Slider from 'react-slick';
import LessonsSlider from '../LessonsSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Lesson1Data } from '../LessonData/Lesson1Data';
import styled from 'styled-components';

// Setting for the slideshow
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]}

    const Lessons = () => {
        const sliderRef = useRef<Slider | null>(null);
        const lessonSlides = Lesson1Data.map((slide, i) => (
            <LessonsSlider slide={slide} key={i} />
        ));
    
        return (
            <Container id="lessons">
                <h1 className="blue" aria-label="Lessons">Lessons</h1>
                <SliderContainer>
                    <Slider ref={sliderRef} {...settings}>
                        {lessonSlides}
                    </Slider>
                    <Buttons>
                        <button onClick={() => sliderRef.current?.slickPrev()} aria-label="Previous slide">
                            <IoIosArrowBack />
                        </button>
                        <button onClick={() => sliderRef.current?.slickNext()} aria-label="Next slide">
                            <IoIosArrowForward />
                        </button>
                    </Buttons>
                </SliderContainer>
            </Container>
        );
    }
    
export default Lessons;

const Container = styled.div`
    width: 80%;
    max-width: 1270px;
    margin: 0 auto;
    padding-bottom: 5rem;
    height: 100vh;

    @media (max-width: 913px) {
        height: 60vh;
    }
    @media(max-width: 840px) {
        width: 90%;
    }
    @media (max-width: 821px) {
        height: 60vh;
    }
    @media(max-width: 626px) {
        width: 90%;
        padding-bottom: 13rem;
    }
    @media (max-width: 541px) {
        padding-bottom: 25rem;
    }
    @media(max-width: 415px) {
        width: 90%;
        padding-bottom: .1rem;
    }
    @media (max-width: 413px) {
        padding-bottom: 20rem;
    }
    @media(max-width: 391px) {
        width: 90%;
        padding-bottom: 5rem;
    }
    @media(max-width: 376px) {
        width: 90%;
        padding-bottom: 20rem;
    }
    @media (max-width: 361px) {
        padding-bottom: 25rem;
    }

    span {
        font-weight: 700;
        text-transform: uppercase;
    }
    h1 {
        padding-top: 2.5rem;
        text-transform: capitalize;
    }
    .slick-list, .slick-slider, .slick-track {
        padding: 0;
        @media (max-width:526px) {
            margin-right: -.9rem;
        }
    }
    .slick-dots {
        text-align: left;
    }
    .slick-dots li button:before {
        content: " ";
    }
    .slick-dots li button {
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    .slick-dots li.slick-active button {
        background: #0077b3;
        width: 15px;
    }
    .slick-dots li {
    margin: 0;
    }
`

const SliderContainer = styled.div`
    margin-top: 2rem;
    position: relative;
    font-size: 3rem;
    @media (max-width: 527px) {
        width: 100%;
        position: relative;
        right: 1.7rem;
        margin-right: 0rem;
    }
`

const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;
    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #0077b3;
        cursor: pointer;
        font-size: 1.1rem;
    }
    @media(max-width:530px){
        display: none;
    }
`


