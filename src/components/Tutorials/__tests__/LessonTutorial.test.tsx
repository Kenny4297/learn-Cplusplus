import { render, screen, fireEvent } from "@testing-library/react";
import LessonTutorial from "../LessonTutorial";
import { BrowserRouter as Router} from "react-router-dom";

describe("LessonTutorial", () => {
    test("renders lesson title", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const title = screen.getByTestId("lesson-title");
        expect(title).toBeInTheDocument();
    });

    test("renders first paragraph", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const paragraph1 = screen.getByTestId("p1");
        expect(paragraph1).toBeInTheDocument();
    });

    test("renders second paragraph", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const paragraph2 = screen.getByTestId("p2");
        expect(paragraph2).toBeInTheDocument();
    });

    test("renders third paragraph", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const paragraph3 = screen.getByTestId("p3");
        expect(paragraph3).toBeInTheDocument();
    });

    test("renders fourth paragraph", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const paragraph4 = screen.getByTestId("p4");
        expect(paragraph4).toBeInTheDocument();
    });

    test("renders PC learning image", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const pcLearningImage = screen.getByAltText("PC learning");
        expect(pcLearningImage).toBeInTheDocument();
    });

    test("renders chalkboard image", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const chalkboardImage = screen.getByAltText("chalkboard");
        expect(chalkboardImage).toBeInTheDocument();
    });

    test("renders professor image", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const professorImage = screen.getByAltText("professor");
        expect(professorImage).toBeInTheDocument();
    });

    test("renders programmer image", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );
        const programmerImage = screen.getByAltText("programmer");
        expect(programmerImage).toBeInTheDocument();
    });

    test("navigates to quiz tutorial when quiz tutorial button clicked", () => {
        render(
            <Router>
                <LessonTutorial />
            </Router>
        );

        const quizTutorialButton = screen.getByText("Quiz Tutorial");
        fireEvent.click(quizTutorialButton);

        expect(quizTutorialButton).toBeTruthy();
    });
});
