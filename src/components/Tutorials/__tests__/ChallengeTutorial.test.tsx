import { render, screen } from "@testing-library/react";
import ChallengeTutorial from "../ChallengeTutorial";
import { BrowserRouter as Router } from "react-router-dom";

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

  // Add more tests for other images and important text content
});
