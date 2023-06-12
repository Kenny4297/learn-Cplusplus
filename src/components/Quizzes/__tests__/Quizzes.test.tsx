import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Quizzes from "../Quizzes";
import React from "react";

afterEach(() => {
      jest.resetAllMocks();
  });

  jest.mock("../QuizSlider", () => {
      const React = jest.requireActual('react');
      return React.forwardRef(({ onCorrectAnswer }: any, ref: React.Ref<any>) => {
          React.useImperativeHandle(ref, () => ({
              hasAnsweredCurrentQuestion: () => true,
          }), []);
    
        return (
            <div>
                Mocked QuizSlider
                <button onClick={onCorrectAnswer}>Answer Correctly</button>
            </div>
          );
      });
  });
  

jest.mock("../QuizData/Quiz1Data", () => ({
[`Quiz1Data`]: [
    {
    QuestionNumber: 1,
    question : "What kind of language is C++?",
    answer1: "Low-level, specific purpose language",
    answer2: "High-level, specific purpose language",
    answer3: "Low-level, general-purpose language",
    answer4: "High-level, general-purpose language",
    correct: "High-level, general-purpose language"
    }
],
[`Quiz1DataTitle`]: "Quiz 1: Introduction To C++"
}));


describe('Quizzes component', () => {
    test('renders with correct title and slide data', async () => {
        render(
            <MemoryRouter initialEntries={['/quizzes/1']}>
                <Routes>
                    <Route path="/quizzes/:quizNumber" element={<Quizzes />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Quiz 1: Introduction To C++')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText('Mocked QuizSlider')).toBeInTheDocument();
        });
    });
});