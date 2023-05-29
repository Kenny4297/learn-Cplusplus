import styled from 'styled-components';
import { QuizSlideInterface } from './QuizData/Quiz1Data';
import { useState, useImperativeHandle, forwardRef, useEffect } from 'react'

interface QuizSlideProps {
    slide: QuizSlideInterface;
    onCorrectAnswer: () => void;
}

const QuizSlider = forwardRef<{}, QuizSlideProps>((props, ref) => {
    const { slide, onCorrectAnswer } = props;

    const { QuestionNumber, QuizTitle, question, answer1, answer2, answer3, answer4, correct, img } = slide;

    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    useImperativeHandle(ref, () => ({
        hasAnsweredCurrentQuestion: () => selectedAnswer !== null
      }));

      const handleAnswerClick = (answer: string) => {
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
});

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

