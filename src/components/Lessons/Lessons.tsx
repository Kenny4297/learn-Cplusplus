import { useState, useEffect } from "react";
import LessonsSlider from "./LessonsSlider";
import styled from "styled-components";
import { LessonSlideInterface } from "./LessonData/Lesson1Data";
import { useParams, useNavigate } from "react-router-dom";
import '../../index.css';

type LessonParams = {
    lessonNumber: string;
};

const getLessonData = async (lessonNumber: number) => {
    const module = await import(`./LessonData/Lesson${lessonNumber}Data`);
    return {
        data: module[`Lesson${lessonNumber}Data`], 
        title: module[`Lesson${lessonNumber}DataTitle`]
    };
};

const Lessons = () => {
    const { lessonNumber } = useParams<LessonParams>();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [lessonData, setLessonData] = useState<LessonSlideInterface[] | null>(
        null
    );
    const [lessonTitle, setLessonTitle] = useState('');

    // Array of lessons without quizzes
    const noQuizLessons = ["2"]; // Add other lesson numbers as needed

    const nextSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide - 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentSlide]);

    useEffect(() => {
        const fetchLessonData = async () => {
            const lesson = await getLessonData(Number(lessonNumber));
            setLessonData(lesson.data);
            setLessonTitle(lesson.title);
        };

        fetchLessonData();
    }, [lessonNumber]);

    if (!lessonData) {
        return <p>Loading...</p>
    }

    return (
        <Container id="lessons">
                <Title className="blue" aria-label="Lessons">
                        {lessonTitle}
                </Title>
                <LessonsSlider slide={lessonData[currentSlide]} />
                <Buttons>
                    <ButtonWrapper>
                        {currentSlide !== 0 && (
                            <button onClick={prevSlide} aria-label="Previous slide">
                                Back
                            </button>
                        )}
                    </ButtonWrapper>
                    <ButtonWrapper>
                        {currentSlide !== lessonData.length - 1 ? (
                            <button onClick={nextSlide} aria-label="Next slide">
                                Next
                            </button>
                        ) : (
                            lessonNumber && noQuizLessons.includes(lessonNumber) ? (
                                <button
                                    onClick={() => navigate(`/challenge/${lessonNumber}`)}
                                >
                                    Go to Challenge!
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate(`/quiz/${lessonNumber}`)}
                                >
                                    Quiz
                                </button>
                            )
                        )}
                    </ButtonWrapper>
                </Buttons>
        </Container>
    );
};

export default Lessons;


const Container = styled.div`
    /* border: 2px solid green; */
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 80%; 
    color: var(--gray);
`;

const Title = styled.h1`
    text-align: center;
    @media (min-height: 800px) {
        font-size: 2rem;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;

    /* border: 2px solid purple; */
    width: 15rem;
    height: auto;
    margin: 0 auto;
    margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
    display: inline-flex;
    /* border: 2px solid green; */
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 4rem;
    width: 80%;
    button {
        color: var(--gray);
        height:2rem;
        width:100%;
        background-color: var(--blue);
        padding:.2rem .5rem;
        border-radius: 2px;
        border: none;
        &:hover {
            cursor: pointer;
            background-color: var(--purple);
            color: var(--teal);
            outline: 1px solid var(--blue)
        }
        @media (min-height: 800px) {
            font-size: 2.25rem;
            height: 3.5rem;
            padding:1rem 2rem 3.25rem 2rem;
        }
    }
`;
