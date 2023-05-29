import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizSlider from "./QuizSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { QuizSlideInterface } from "./QuizData/Quiz1Data";

type QuizParams = {
    quizNumber: string;
};

const getQuizData = async (quizNumber: number) => {
    console.log("fetching quiz data");
    const module = await import(`./QuizData/Quiz${quizNumber}Data`);
    console.log(module);
    console.log(module.Quiz1Data);
    return {
      data: module[`Quiz${quizNumber}Data`], 
      title: module[`Quiz${quizNumber}DataTitle`]
  };
};

const Quizzes = () => {
    const { quizNumber } = useParams<QuizParams>();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [quizData, setQuizData] = useState<QuizSlideInterface[] | null>(null);

    const [quizTitle, setQuizTitle] = useState('');

    const [totalScore, setTotalScore] = useState(0);

    const quizSliderRef = useRef<any>(null);

    const nextSlide = () => {
        // Check if the user has answered the current question
        if (!quizSliderRef.current?.hasAnsweredCurrentQuestion()) {
            alert(
                "You must answer the current question before moving to the next slide."
            );
        } else {
            setCurrentSlide((oldSlide) => oldSlide + 1);
        }
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide - 1);
    };

    const handleSubmit = () => {
        // If the user is on the last page and hasn't answered the question yet, show an alert
        if (
            quizData &&
            currentSlide === quizData.length - 1 &&
            !quizSliderRef.current?.hasAnsweredCurrentQuestion()
        ) {
            alert(
                "You must answer the last question before submitting the quiz."
            );
        } else {
            navigate(`/scores/${quizNumber}`, {
                state: { totalScore, quizNumber },
            });
        }
    };

    useEffect(() => {
      const fetchQuizData = async () => {
          const quiz = await getQuizData(Number(quizNumber));
          setQuizData(quiz.data);
          setQuizTitle(quiz.title);
      };

      fetchQuizData();
  }, [quizNumber]);

    if (!quizData) {
        return <p>Loading...</p>; // Or a loading spinner
    }

    return (
        <Container id="quizzes">
            <Title>
                <h1 className="blue" aria-label="Quizzes">
                    {quizTitle}
                </h1>
            </Title>
            <QuizSlider
                ref={quizSliderRef}
                slide={quizData[currentSlide]}
                onCorrectAnswer={() => setTotalScore(totalScore + 1)}
            />

            <Buttons>
                <ButtonWrapper>
                    {currentSlide !== 0 && (
                        <button onClick={prevSlide} aria-label="Previous slide">
                            <IoIosArrowBack />
                        </button>
                    )}
                </ButtonWrapper>
                <ButtonWrapper>
                    {currentSlide !== quizData.length - 1 ? (
                        <button onClick={nextSlide} aria-label="Next slide">
                            <IoIosArrowForward />
                        </button>
                    ) : (
                        <button onClick={handleSubmit}>Submit!</button>
                    )}
                </ButtonWrapper>
            </Buttons>
        </Container>
    );
};

export default Quizzes;

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
