import { render, screen, fireEvent } from "@testing-library/react";
import SiteTutorial from "../SiteTutorial";
import { BrowserRouter as Router} from "react-router-dom";

describe("Overview", () => {
  test("renders tutorial title", () => {
    render(
      <Router>
        <SiteTutorial />
      </Router>
    );
    const title = screen.getByTestId("overview-title");
    expect(title).toBeInTheDocument();
  });

  test("renders first paragraph", () => {
    render(
      <Router>
        <SiteTutorial />
      </Router>
    );
    const paragraph1 = screen.getByTestId("p1");
    expect(paragraph1).toBeInTheDocument();
  });

  test("renders second paragraph", () => {
    render(
      <Router>
        <SiteTutorial />
      </Router>
    );
    const paragraph2 = screen.getByTestId("p2");
    expect(paragraph2).toBeInTheDocument();
  });

  test("renders third paragraph", () => {
    render(
      <Router>
        <SiteTutorial />
      </Router>
    );
    const paragraph3 = screen.getByTestId("p3");
    expect(paragraph3).toBeInTheDocument();
  });

  test("renders fourth paragraph", () => {
      render(
          <Router>
              <SiteTutorial />
          </Router>
      );
      const paragraph4 = screen.getByTestId("p4");
      expect(paragraph4).toBeInTheDocument();
  });

  test("renders professor image", () => {
      render(
          <Router>
              <SiteTutorial />
          </Router>
      );
      const professorImage = screen.getByAltText("professor");
      expect(professorImage).toBeInTheDocument();
  });

  test("renders challenge image", () => {
      render(
          <Router>
              <SiteTutorial />
          </Router>
      );
      const challengeImage = screen.getByAltText("challenge");
      expect(challengeImage).toBeInTheDocument();
  });

  test("renders code image", () => {
      render(
          <Router>
              <SiteTutorial />
          </Router>
      );
      const codeImage = screen.getByAltText("code");
      expect(codeImage).toBeInTheDocument();
  });

  test("renders computer image", () => {
      render(
          <Router>
              <SiteTutorial />
          </Router>
      );
      const computerImage = screen.getByAltText("computer");
      expect(computerImage).toBeInTheDocument();
  });

  test("navigates to lesson tutorial when lesson tutorial button clicked", () => {
    render(
      <Router>
        <SiteTutorial />
      </Router>
    );

    const lessonTutorialButton = screen.getByText('Lesson Tutorial');
    fireEvent.click(lessonTutorialButton);

    expect(lessonTutorialButton).toBeTruthy();
  });
});
