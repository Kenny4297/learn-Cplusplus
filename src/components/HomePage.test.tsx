import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './HomePage';
import { UserContext } from '../App';

// Set up your localStorage mock
let getItem: jest.Mock;

beforeAll(() => {
  // Mock localStorage
  getItem = jest.fn();

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem,
      setItem: jest.fn(),
      clear: jest.fn()
    },
    writable: true
  });
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
    username: 'TestUser',
    lessonsCompleted: { lesson1: 'yes' as const, lesson2: 'no' as const },
    quizScores: { quiz1: 5, quiz2: 8 },
    projectsCompleted: { project1: 'yes' as const, project2: 'no' as const },
  };
  
  // Create a TestComponent that uses the UserContext.Provider
  const TestComponent = () => (
    <Router>
      <UserContext.Provider value={{ userData: testUserData, setUserData: jest.fn() }}>
        <HomePage />
      </UserContext.Provider>
    </Router>
  );
  
  test('displays second section when userData is provided', async () => {
    render(<TestComponent />);
    
    // Check for a unique element in the second section
    const greeting = await screen.findByText(/What are we going to learn today?/i);
    expect(greeting).toBeInTheDocument();
    
    // Check for the lesson link
    const lessonLink = screen.getByText(/Lesson 1: Introduction to C\+\+/i);
    expect(lessonLink).toBeInTheDocument();
    
    // Check for the quiz score
    const quizScore = screen.getByText(/Best Quiz score: 5\/10/i);
    expect(quizScore).toBeInTheDocument();
  });
