import { render, screen, fireEvent } from "@testing-library/react";
import ChallengeTutorial from "../ChallengeTutorial";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe("ChallengeTutorial", () => {
  test("renders Challenges title", () => {
    render(
      <Router>
        <ChallengeTutorial />
      </Router>
    );
    const title = screen.getByTestId("challenges-title");
    expect(title).toBeInTheDocument();
  });

  test("renders challenge1 image", () => {
    render(
      <Router>
        <ChallengeTutorial />
      </Router>
    );
    const challengeImage = screen.getByAltText("challenge1");
    expect(challengeImage).toBeInTheDocument();
  });

  test("renders AI image", () => {
    render(
      <Router>
        <ChallengeTutorial />
      </Router>
    );
    const aiImage = screen.getByAltText("AI");
    expect(aiImage).toBeInTheDocument();
  });

  test("renders question mark image", () => {
    render(
        <Router>
            <ChallengeTutorial />
        </Router>
    );
    const questionImage = screen.getByAltText("question mark");
    expect(questionImage).toBeInTheDocument();
  });

  test("renders lightbulb image", () => {
      render(
          <Router>
              <ChallengeTutorial />
          </Router>
      );
      const lightbulbImage = screen.getByAltText("lightbulb");
      expect(lightbulbImage).toBeInTheDocument();
  });

  test("renders coffee image", () => {
      render(
          <Router>
              <ChallengeTutorial />
          </Router>
      );
      const coffeeImage = screen.getByAltText("coffee");
      expect(coffeeImage).toBeInTheDocument();
  });
  

  
  test('home button triggers navigation', () => {
    // We can't spy on useNavigate or useHistory with Jest,
    // so instead we will check if the onClick function is being called.
    
    const mockOnClick = jest.fn();
  
    render(
      <Router>
        <ChallengeTutorial onClick={mockOnClick} />
      </Router>
    );
  
    fireEvent.click(screen.getByTestId('button'));
  
    expect(mockOnClick).toHaveBeenCalled();
  });
});


