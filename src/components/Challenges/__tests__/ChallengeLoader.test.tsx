import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ChallengeLoader from "../ChallengeLoader";

// Mock dynamic import of challenge component
jest.mock("../Challenge7", () => ({
    __esModule: true,
    default: jest.fn(() => <div>Challenge 7</div>),
}));

describe("ChallengeLoader", () => {
    test("displays loading text and then the challenge", async () => {
        render(
            <MemoryRouter initialEntries={["/challenge/7"]}>
                <Routes>
                    <Route path="/challenge/:challengeNumber" element={<ChallengeLoader />} />
                </Routes>
            </MemoryRouter>
        );

        // Check that loading message is initially shown
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        // Check that challenge component is shown
        const challengeText = await screen.findByText("Challenge 7");
        expect(challengeText).toBeInTheDocument();
    });
});
