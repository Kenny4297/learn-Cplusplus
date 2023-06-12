import { render, screen, fireEvent } from "@testing-library/react";
import QuizSlider from "../QuizSlider";

test('renders QuizSlider with correct content', () => {
  const slide = {
      QuestionNumber: 1,
      question: 'What is 1+1?',
      answer1: '1',
      answer2: '2',
      answer3: '3',
      answer4: '4',
      correct: '2'
  };
  
  const mockOnCorrectAnswer = jest.fn();

  render(<QuizSlider slide={slide} onCorrectAnswer={mockOnCorrectAnswer} />);

  // Check that the question is displayed
  expect(screen.getByText('What is 1+1?')).toBeInTheDocument();

  // Check that the answers are displayed
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('calls onCorrectAnswer when correct answer is clicked', () => {
    const slide = {
        QuestionNumber: 1,
        question: 'What is 1+1?',
        answer1: '1',
        answer2: '2',
        answer3: '3',
        answer4: '4',
        correct: '2'
    };
  
  const mockOnCorrectAnswer = jest.fn();

  render(<QuizSlider slide={slide} onCorrectAnswer={mockOnCorrectAnswer} />);

  // Click on the correct answer
  fireEvent.click(screen.getByText('2'));

  // Check that onCorrectAnswer was called
  expect(mockOnCorrectAnswer).toHaveBeenCalledTimes(1);
});
