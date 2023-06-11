import { render, screen } from "@testing-library/react";
import QuizTemplate from "../QuizTemplate";

jest.mock("../Quizzes", () => {
    return () => <div>Mocked Quiz</div>;
});

test("renders QuizTemplate component", () => {
    render(<QuizTemplate />);
    const QuizElement = screen.getByText(/Mocked Quiz/i);
    expect(QuizElement).toBeInTheDocument();
});
