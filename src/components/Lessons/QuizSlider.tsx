import styled from 'styled-components';
import { QuizSlide } from './QuizData/Quiz1Data';
import { useState} from 'react'

//This is the lessonsSlider itself that will be passed into IntroToCPlusPlus

interface QuizSlideProps {
    slide: QuizSlide;
}

const QuizSlider = ({slide}: QuizSlideProps) => {
    const { QuestionNumber, QuizTitle, question, answer1, answer2, answer3, answer4, correct, img } = slide;

    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === correct);
    };

    return (
        <Container>
            <QuestionTitle>
                <h1>{QuestionNumber}: {QuizTitle}</h1>
            </QuestionTitle>

            <Question>
                {question}
            </Question>

            <Answers>
                {[answer1, answer2, answer3, answer4].map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        style={{
                            backgroundColor: selectedAnswer === answer
                                ? isCorrect
                                    ? "green"
                                    : "red"
                                : "transparent"
                        }}
                    >
                        {answer}
                    </button>
                ))}
            </Answers>
        </Container>
    );
};

export default QuizSlider;

const Container = styled.div`
    border: 2px solid blue;
    width:80%;
    height: 100%;
    font-size: .5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const QuestionTitle = styled.div`
    border: 2px solid green;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;

const Question = styled.div`
    text-align: center;
`;

const Answers = styled.div`
    

`

