import styled from 'styled-components';
import { QuizSlideInterface } from './QuizData/Quiz1Data';
import { useState, useImperativeHandle, forwardRef, useEffect } from 'react'

interface QuizSlideProps {
    slide: QuizSlideInterface;
    onCorrectAnswer: () => void;
}

const QuizSlider = forwardRef<{}, QuizSlideProps>((props, ref) => {
    const { slide, onCorrectAnswer } = props;

    const { question, answer1, answer2, answer3, answer4, correct } = slide;

    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useImperativeHandle(ref, () => ({
        hasAnsweredCurrentQuestion: () => selectedAnswer !== null
      }));

    const handleAnswerClick = (answer: string) => {
        if (selectedAnswer !== null) return;  // Add this line. It will return from the function if an answer is already selected
        setSelectedAnswer(answer);
        const correctAnswer = answer === correct;
        setIsCorrect(correctAnswer);
        if (correctAnswer) {
          onCorrectAnswer();
        }
    };

    useEffect(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
    }, [slide]);

    return (
        <Container>
            <Question>
                {question}
            </Question>

            {[answer1, answer2, answer3, answer4].filter(answer => answer).map((answer, index) => (
                <AnswerButton
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
                </AnswerButton>
            ))}
        </Container>
    );
});

export default QuizSlider;

const Container = styled.div`
    /* border: 2px solid blue; */
    width:80%;
    height: auto;
    font-size: .5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Question = styled.h2`
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    margin-top: 5rem;
    color: var(--blue);
    @media (min-height: 800px) {
        font-size: 3rem;
    }
`;

const AnswerButton = styled.button`
    border: 2px solid var(--purple);
    margin-bottom: .5rem;
    border-radius: .2rem;
    padding: .25rem;
    color: var(--gray);
    width: 25rem;
    @media (max-width: 500px) {
        width: 15rem;
    }
    @media (min-height: 800px) {
        font-size: 2rem;
        width: 35rem;
        margin-bottom: 1rem;
    }
`;






