import React, { useState } from 'react';
import LessonsSlider from '../LessonsSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import { Slide } from '../LessonData/Lesson1Data';
import {Lesson1DataTitle } from "../LessonData/Lesson1Data"

interface LessonsProps {
    lesson: Slide[];
}

const Lessons = ({lesson}: LessonsProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((oldSlide) => (oldSlide === lesson.length - 1 ? 0 : oldSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => (oldSlide === 0 ? lesson.length - 1 : oldSlide - 1));
    };

    return (
        <Container id="lessons">
            <Title>
                <h1 className="blue" aria-label="Lessons">{Lesson1DataTitle}</h1>
            </Title>
                <LessonsSlider slide={lesson[currentSlide]} />
                <Buttons>
                    <button onClick={prevSlide} aria-label="Previous slide">
                        <IoIosArrowBack />
                    </button>
                    <button onClick={nextSlide} aria-label="Next slide">
                        <IoIosArrowForward />
                    </button>
                </Buttons>
        </Container>
    );
}

export default Lessons;

const Container = styled.div`
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Title = styled.div`
    text-align: center;
`;

const SliderContainer = styled.div`
    border: 2px solid red;
    height: 90%;
`

const Buttons = styled.div`
    text-align: center;
`




