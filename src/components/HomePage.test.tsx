import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import { UserContext } from "../App";

// Mock useNavigate
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
}));

// Set up your localStorage mock
let getItem: jest.Mock;

beforeAll(() => {
    // Mock localStorage
    getItem = jest.fn();

    Object.defineProperty(window, "localStorage", {
        value: {
            getItem,
            setItem: jest.fn(),
            clear: jest.fn(),
        },
        writable: true,
    });
});

afterEach(() => {
    jest.resetAllMocks();
});

test("renders the first TSX section if there's no user data in storage", () => {
    // Mimic no data in localStorage
    getItem.mockReturnValueOnce(null);

    render(
        <Router>
            <HomePage />
        </Router>
    );
    const textElement = screen.getByText(/Welcome to "Learn C\+\+"/i);
    expect(textElement).toBeInTheDocument();
});

// Mock user data
const testUserData = {
    username: "TestUser",
    lessonsCompleted: { lesson1: "yes" as const, lesson2: "no" as const },
    quizScores: { quiz1: 1, quiz3: 3, quiz4: 4, quiz5: 5, quiz6: 6, quiz7: 7 },
    projectsCompleted: { project1: "yes" as const, project2: "no" as const },
};

test("renders individual lesson section correctly and responds to button click", () => {
    const setUserData = jest.fn();

    render(
        <Router>
            <UserContext.Provider
                value={{ userData: testUserData, setUserData }}
            >
                <HomePage />
            </UserContext.Provider>
        </Router>
    );

    // Lesson 1
    const link1 = screen.getByTestId("individual-lesson-section-1");
    expect(link1).toBeInTheDocument();

    const quizScore1 = screen.getByText(/Best Quiz score: 1\/10/i);
    expect(quizScore1).toBeInTheDocument();

    const buttonQuiz1 = screen.getByText(/Quiz 1/i);
    fireEvent.click(buttonQuiz1);

    // Lesson2
    const link2 = screen.getByTestId("individual-lesson-section-2");
    expect(link2).toBeInTheDocument();

    const buttonChallenge1 = screen.getByText(/Challenge #1/i);
    fireEvent.click(buttonChallenge1);

    //Lesson 3
    const link3 = screen.getByTestId("individual-lesson-section-3");
    expect(link3).toBeInTheDocument();

    const quizScore3 = screen.getByText(/Best Quiz score: 3\/9/i);
    expect(quizScore3).toBeInTheDocument();

    const buttonQuiz3 = screen.getByText(/Quiz 3/i);
    fireEvent.click(buttonQuiz3);

    //Lesson 4
    const link4 = screen.getByTestId("individual-lesson-section-4");
    expect(link4).toBeInTheDocument();

    const quizScore4 = screen.getByText(/Best Quiz score: 4\/8/i);
    expect(quizScore4).toBeInTheDocument();

    const buttonQuiz4 = screen.getByText(/Quiz 4/i);
    fireEvent.click(buttonQuiz4);

    const buttonChallenge2 = screen.getByText(/Challenge #2/i);
    fireEvent.click(buttonChallenge2);

    // Lesson 5
    const link5 = screen.getByTestId("individual-lesson-section-5");
    expect(link5).toBeInTheDocument();

    const quizScore5 = screen.getByText(/Best Quiz score: 5\/6/i);
    expect(quizScore5).toBeInTheDocument();

    const buttonQuiz5 = screen.getByText(/Quiz 5/i);
    fireEvent.click(buttonQuiz5);

    const buttonChallenge5 = screen.getByText(/Challenge #3/i);
    fireEvent.click(buttonChallenge5);

    // Lesson 6
    const link6 = screen.getByTestId("individual-lesson-section-6");
    expect(link6).toBeInTheDocument();

    const quizScore6 = screen.getByText(/Best Quiz score: 6\/5/i);
    expect(quizScore6).toBeInTheDocument();

    const buttonQuiz6 = screen.getByText(/Quiz 6/i);
    fireEvent.click(buttonQuiz6);

    const buttonChallenge6 = screen.getByText(/Challenge #4/i);
    fireEvent.click(buttonChallenge6);

    // Lesson 7
    const link7 = screen.getByTestId("individual-lesson-section-7");
    expect(link7).toBeInTheDocument();

    const quizScore7 = screen.getByText(/Best Quiz score: 7\/6/i);
    expect(quizScore7).toBeInTheDocument();

    const buttonQuiz7 = screen.getByText(/Quiz 7/i);
    fireEvent.click(buttonQuiz7);

    const buttonChallenge7 = screen.getByText(/Challenge #5/i);
    fireEvent.click(buttonChallenge7);
});
