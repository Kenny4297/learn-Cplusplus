import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from "react-router-dom";
import Challenge6 from "../Challenge6";

jest.mock('react-syntax-highlighter', () => ({
    Prism: jest.fn(({children}) => children)
}));

describe("Challenge6", () => {
    test("renders without crashing", () => {
        render(
            <Router>
                <Challenge6 />
            </Router>
        );

        const title = screen.getByText(/Challenge 4: Guessing Game/i);
        expect(title).toBeInTheDocument();
    });

    test('renders first SyntaxHighlighter with code block', async () => {
        render(
            <MemoryRouter>
                <Challenge6 />
            </MemoryRouter>
        );
    
        expect(await screen.findByTestId('syntax-highlighter-1')).toBeInTheDocument();
    });

    test('renders second SyntaxHighlighter with solution code block when the "Show Solution" button is clicked', async () => {
        render(
            <MemoryRouter>
                <Challenge6 />
            </MemoryRouter>
        );
    
        const showSolutionButton = screen.getByText(/Show Solution/i);
        fireEvent.click(showSolutionButton);
    
        expect(await screen.findByTestId('syntax-highlighter-2')).toBeInTheDocument();
    });

    test("renders navigation buttons", () => {
        render(
            <Router>
                <Challenge6 />
            </Router>
        );

        const reviewButton = screen.getByText(/Review lesson/i);
        const homeButton = screen.getByText(/Home/i);

        expect(reviewButton).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    });

    test('navigates correctly when the review button is clicked', async () => {
        render(
            <MemoryRouter initialEntries={['/challenge6']}>
                <Routes>
                    <Route path="/challenge6" element={ <Challenge6 /> } />
                    <Route path="/lesson/6" element={ <div>Lesson 6</div> } />
                    <Route path="/" element={ <div>Home</div> } />
                </Routes>
            </MemoryRouter>
        );
        
        const reviewLessonButton = screen.getByText(/Review lesson/i);

        // Test navigation to Lesson 6
        fireEvent.click(reviewLessonButton);
        expect(await screen.findByText('Lesson 6')).toBeInTheDocument();
    });

    test('navigates correctly when the home button is clicked', async () => {
        render(
            <MemoryRouter initialEntries={['/challenge6']}>
                <Routes>
                    <Route path="/challenge6" element={ <Challenge6 /> } />
                    <Route path="/lesson/6" element={ <div>Lesson 6</div> } />
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
