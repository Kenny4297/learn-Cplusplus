import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from './HomePage';

beforeEach(() => {
  // Mock localStorage
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null), // Mocking no data in localStorage
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true
  });
});

test("renders the first TSX section if there's no user data in storage", () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  const textElement = screen.getByText(/Welcome to "Learn C\+\+"/i);
  expect(textElement).toBeInTheDocument();
});
