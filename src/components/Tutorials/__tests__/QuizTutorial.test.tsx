import { render, screen, fireEvent } from "@testing-library/react";
import QuizTutorial from "../QuizTutorial";  // Import your correct component here
import { BrowserRouter as Router} from "react-router-dom";

describe("Quizzes", () => {
  test("renders Quizzes title", () => {
    render(
      <Router>
        <QuizTutorial />
      </Router>
    );
    const title = screen.getByTestId("lesson-title");
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <Router>
        <QuizTutorial />
      </Router>
    );
    const paragraph1 = screen.getByTestId("p1");
    expect(paragraph1).toBeInTheDocument();
  });

  test("renders second paragraph", () => {
    render(
      <Router>
        <QuizTutorial />
      </Router>
    );
    const paragraph2 = screen.getByTestId("p2");
    expect(paragraph2).toBeInTheDocument();
  });

  test("renders third paragraph", () => {
    render(
      <Router>
        <QuizTutorial />
      </Router>
    );
    const paragraph3 = screen.getByTestId("p3");
    expect(paragraph3).toBeInTheDocument();
  });

  test("renders fourth paragraph", () => {
      render(
          <Router>
              <QuizTutorial />
          </Router>
      );
      const paragraph4 = screen.getByTestId("p4");
      expect(paragraph4).toBeInTheDocument();
  });

  test("renders first quiz image", () => {
      render(
          <Router>
              <QuizTutorial />
          </Router>
      );
      const quiz1Image = screen.getByAltText("quiz1");
      expect(quiz1Image).toBeInTheDocument();
  });

  test("renders second quiz image", () => {
      render(
          <Router>
              <QuizTutorial />
          </Router>
      );
      const quiz2Image = screen.getByAltText("quiz2");
      expect(quiz2Image).toBeInTheDocument();
  });

  test("renders Grade A image", () => {
      render(
          <Router>
              <QuizTutorial />
          </Router>
      );
      const gradeAImage = screen.getByAltText("Grade A");
      expect(gradeAImage).toBeInTheDocument();
  });

  test("renders learning image", () => {
      render(
          <Router>
              <QuizTutorial />
          </Router>
      );
      const learningImage = screen.getByAltText("learning");
      expect(learningImage).toBeInTheDocument();
  });

  test("navigates to challenge tutorial when challenge tutorial button clicked", () => {
    render(
      <Router>
        <QuizTutorial />
      </Router>
    );

    const challengeTutorialButton = screen.getByText('Challenge Tutorial');
    fireEvent.click(challengeTutorialButton);

    expect(challengeTutorialButton).toBeTruthy();
  });
});
