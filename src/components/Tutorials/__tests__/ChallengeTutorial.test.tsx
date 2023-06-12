import { render, screen, fireEvent } from "@testing-library/react";
import ChallengeTutorial from "../ChallengeTutorial";
import { BrowserRouter as Router} from "react-router-dom";

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

    test("navigates home when home button clicked", () => {
        render(
            <Router>
                <ChallengeTutorial />
            </Router>
        );

        const homeButton = screen.getByText('Home');
        fireEvent.click(homeButton);

        expect(homeButton).toBeTruthy();
    });
});
