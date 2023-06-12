import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from "react-router-dom";
import Challenge7 from "../Challenge7";

describe("Challenge7", () => {
    test("renders without crashing", () => {
        render(
            <Router>
                <Challenge7 />
            </Router>
        );

        const title = screen.getByTestId("next-steps-title");
        expect(title).toBeInTheDocument();
    });

    test("renders project suggestions", () => {
        render(
            <Router>
                <Challenge7 />
            </Router>
        );

        const textBasedAdventureGame = screen.getByText(/Text-based Adventure Game/i);
        const studentGradeRecordSystem = screen.getByText(/Student Grade Record System/i);
        const bankingSystem = screen.getByTestId("banking-system-span");
        const libraryManagementSystem = screen.getByText(/Library Management System/i);
        const ticTacToeGame = screen.getByText(/Tic Tac Toe Game/i);
        const simpleChatbot = screen.getByText(/Simple Chatbot/i);
        const hangmanGame = screen.getByTestId("hangman-title");
        const unitConverter = screen.getByText(/Unit Converter/i);
        const simpleFileBasedDatabase = screen.getByText(/A Simple File-based 'Database'/i);

        expect(textBasedAdventureGame).toBeInTheDocument();
        expect(studentGradeRecordSystem).toBeInTheDocument();
        expect(bankingSystem).toBeInTheDocument();
        expect(libraryManagementSystem).toBeInTheDocument();
        expect(ticTacToeGame).toBeInTheDocument();
        expect(simpleChatbot).toBeInTheDocument();
        expect(hangmanGame).toBeInTheDocument();
        expect(unitConverter).toBeInTheDocument();
        expect(simpleFileBasedDatabase).toBeInTheDocument();
    });

    test("renders navigation buttons", () => {
        render(
            <Router>
                <Challenge7 />
            </Router>
        );

        const reviewButton = screen.getByText(/Review lesson/i);
        const homeButton = screen.getByText(/Home/i);

        expect(reviewButton).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    });

    test('navigates correctly when the review button is clicked', async () => {
        render(
            <MemoryRouter initialEntries={['/challenge7']}>
                <Routes>
                    <Route path="/challenge7" element={ <Challenge7 /> } />
                    <Route path="/lesson/7" element={ <div>Lesson 7</div> } />
                    <Route path="/" element={ <div>Home</div> } />
                </Routes>
            </MemoryRouter>
        );
        
        const reviewLessonButton = screen.getByText(/Review lesson/i);

        // Test navigation to Lesson 7
        fireEvent.click(reviewLessonButton);
        expect(await screen.findByText('Lesson 7')).toBeInTheDocument();
    });

    test('navigates correctly when the home button is clicked', async () => {
        render(
            <MemoryRouter initialEntries={['/challenge7']}>
                <Routes>
                    <Route path="/challenge7" element={ <Challenge7 /> } />
                    <Route path="/lesson/7" element={ <div>Lesson 7</div> } />
                    <Route path="/" element={ <div>Home</div> } />
                </Routes>
            </MemoryRouter>
        );
        
        const homeButton = screen.getByText(/Home/i);

        // Test navigation to Home
        fireEvent.click(homeButton);
        expect(await screen.findByText('Home')).toBeInTheDocument();
    });
});
