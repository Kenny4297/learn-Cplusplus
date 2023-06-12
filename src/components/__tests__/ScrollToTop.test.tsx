import { render, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useEffect } from "react";

// Mock window.scrollTo function
global.window.scrollTo = jest.fn();

describe("<ScrollToTop />", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    const TestComponent = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate("/test");
        }, [navigate]);
        return null;
    };

    it("calls window.scrollTo with (0, 0) when pathname changes", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<TestComponent />} />
                    <Route path="/test" element={<div>Test Page</div>} />
                </Routes>
            </MemoryRouter>
        );

        await act(() => Promise.resolve());

        expect(window.scrollTo).toHaveBeenCalledTimes(2);
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
});
