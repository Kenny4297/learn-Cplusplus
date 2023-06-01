import { useState, useEffect } from "react";
import LessonsSlider from "./LessonsSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { LessonSlideInterface } from "./LessonData/Lesson1Data";
import { useParams, useNavigate } from "react-router-dom";

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
            <Title>
                <h1 className="blue" aria-label="Lessons">
                    {lessonTitle}
                </h1>
            </Title>
            <LessonsSlider slide={lessonData[currentSlide]} />
            <Buttons>
                <ButtonWrapper>
                    {currentSlide !== 0 && (
                        <button onClick={prevSlide} aria-label="Previous slide">
                            <IoIosArrowBack />
                        </button>
                    )}
                </ButtonWrapper>
                <ButtonWrapper>
                    {currentSlide !== lessonData.length - 1 ? (
                        <button onClick={nextSlide} aria-label="Next slide">
                            <IoIosArrowForward />
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
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 80%; 
`;

const Title = styled.div`
    text-align: center;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    margin: 0 auto;
`;

const ButtonWrapper = styled.div`
    display: inline-block;
    border: 2px solid green;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 1.25rem;
    button {
        color: var(--gray);
    }
`;
