import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from "react-router-dom";
import Challenge2Component from "../Challenge2";

// Mock the SyntaxHighlighter as it doesn't need to be tested here
jest.mock('react-syntax-highlighter', () => ({
    Prism: jest.fn(({children}) => children)
  }));

describe("Challenge2Component", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <Challenge2Component />
      </Router>
    );

    const title = screen.getByText(/Challenge 1: Testing our Set Up/i);
    expect(title).toBeInTheDocument();
  });

  test('renders SyntaxHighlighter with code block', async () => {
    render(
      <MemoryRouter>
        <Challenge2Component />
      </MemoryRouter>
    );
  
    expect(await screen.findByTestId('syntax-highlighter')).toBeInTheDocument();
  });

  test("renders navigation buttons", () => {
    render(
      <Router>
        <Challenge2Component />
      </Router>
    );

    const reviewButton = screen.getByText(/Review lesson/i);
    const homeButton = screen.getByText(/Home/i);

    expect(reviewButton).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  });

  test('navigates correctly when the review button is clicked', async () => {
    render(
        <MemoryRouter initialEntries={['/challenge2']}>
            <Routes>
                <Route path="/challenge2" element={ <Challenge2Component /> } />
                <Route path="/lesson/2" element={ <div>Lesson 2</div> } />
                <Route path="/" element={ <div>Home</div> } />
            </Routes>
        </MemoryRouter>
    );
    
    const reviewLessonButton = screen.getByText(/Review lesson/i);

    // Test navigation to Lesson 2
    fireEvent.click(reviewLessonButton);
    expect(await screen.findByText('Lesson 2')).toBeInTheDocument();
});

test('navigates correctly when the home button is clicked', async () => {
    render(
        <MemoryRouter initialEntries={['/challenge2']}>
            <Routes>
                <Route path="/challenge2" element={ <Challenge2Component /> } />
                <Route path="/lesson/2" element={ <div>Lesson 2</div> } />
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
