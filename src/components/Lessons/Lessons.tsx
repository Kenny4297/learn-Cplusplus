import { useState, useEffect } from "react";
import LessonsSlider from "./LessonsSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { LessonSlideInterface } from "./LessonData/Lesson1Data";
import { useParams, useNavigate } from "react-router-dom";
import { Lesson1DataTitle } from "./LessonData/Lesson1Data";


type LessonParams = {
    lessonNumber: string;
};

const getLessonData = async (lessonNumber: number) => {
    const module = await import(`./LessonData/Lesson${lessonNumber}Data`);
    return module;
};

const Lessons = () => {

    const { lessonNumber } = useParams<LessonParams>();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [lessonData, setLessonData] = useState<LessonSlideInterface[] | null>(
        null
    );

    const nextSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide - 1);
    };

    useEffect(() => {
      const fetchLessonData = async () => {
          // Convert lessonNumber to a number before passing it to getLessonData
          const data = await getLessonData(Number(lessonNumber));
          console.log(`Got data in useEffect ${JSON.stringify(data)}`);
          // setLessonData(data);
          setLessonData(data.Lesson1Data);
      };
      
      fetchLessonData();
  }, [lessonNumber]);

    if (!lessonData) {
        return <p>Loading...</p> // Or a loading spinner
    }

    return (
        <Container id="lessons">
            <Title>
                <h1 className="blue" aria-label="Lessons">
                    {Lesson1DataTitle}
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
                        <button
                            onClick={() => navigate(`/quiz/${lessonNumber}`)}
                        >
                            Take the Quiz!
                        </button>
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
`;
