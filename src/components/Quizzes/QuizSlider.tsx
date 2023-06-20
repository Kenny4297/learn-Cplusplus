import styled from "styled-components";
import { QuizSlideInterface } from "./QuizData/Quiz1Data";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";

interface QuizSlideProps {
    slide: QuizSlideInterface;
    onCorrectAnswer: () => void;
}

interface AnswerButtonProps {
    onClick: () => void;
    selected: boolean;
    isCorrect: boolean;
}

const QuizSlider = forwardRef<{}, QuizSlideProps>((props, ref) => {
    const { slide, onCorrectAnswer } = props;
    const { question, answer1, answer2, answer3, answer4, correct } = slide;

    const answers = [answer1, answer2, answer3, answer4].filter(
        (answer) => answer
    );
    const initialButtonStates = answers.map((answer) => ({
        answer,
        selected: false,
        isCorrect: false,
    }));

    const [buttonStates, setButtonStates] = useState(initialButtonStates);

    useImperativeHandle(ref, () => ({
        hasAnsweredCurrentQuestion: () =>
            buttonStates.some((state) => state.selected),
    }));

    const handleAnswerClick = (clickedAnswer: string) => {
        setButtonStates((states) =>
            states.map((state) =>
                state.answer === clickedAnswer
                    ? {
                          ...state,
                          selected: true,
                          isCorrect: state.answer === correct,
                      }
                    : state
            )
        );

        if (clickedAnswer === correct) {
            onCorrectAnswer();
        }
    };

    useEffect(() => {
        setButtonStates(initialButtonStates);
    }, [slide]);
    return (
        <Container>
            <Question>{question}</Question>
            {buttonStates.map((state, index) => (
                <AnswerButton
                    key={index}
                    onClick={() => handleAnswerClick(state.answer)}
                    selected={state.selected}
                    isCorrect={state.isCorrect}
                >
                    {state.answer}
                </AnswerButton>
            ))}
        </Container>
    );
});

export default QuizSlider;

const Container = styled.div`
    /* border: 2px solid blue; */
    width: 80%;
    height: auto;
    font-size: 0.5rem;
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

const AnswerButton = styled.button<AnswerButtonProps>`
    border: 2px solid var(--purple);
    margin-bottom: 0.5rem;
    border-radius: 0.2rem;
    padding: 0.25rem;
    color: var(--gray);
    width: 25rem;
    background-color: ${(props) =>
        props.selected ? (props.isCorrect ? "green" : "red") : "transparent"};
    color: ${(props) => (props.selected ? "white" : "var(--gray)")};

    &:hover {
        background-color: ${(props) =>
            props.selected
                ? props.isCorrect
                    ? "green"
                    : "red"
                : "var(--blue)"};
        color: ${(props) => (props.selected ? "white" : "var(--teal)")};
        cursor: pointer;
    }
    &[selected]:hover {
        background-color: ${(props) =>
            props.isCorrect ? "green" : "red"} !important;
        color: white !important;
    }

    @media (max-width: 500px) {
        width: 15rem;
    }
    @media (min-height: 800px) {
        font-size: 2rem;
        width: 35rem;
        margin-bottom: 1rem;
    }
`;
