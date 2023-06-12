import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock localStorage
const localStorageMock = (function () {
    let store: Record<string, string> = {};
    return {
        getItem: function (key: string) {
            return store[key] || null;
        },
        setItem: function (key: string, value: string) {
            store[key] = value.toString();
        },
        clear: function () {
            store = {};
        },
        removeItem: function (key: string) {
            delete store[key];
        },
    };
})();

jest.mock("./components/Header", () => {
    return function DummyHeader() {
        return <div data-testid="header">Header</div>;
    };
});

jest.mock("./components/HomePage", () => {
    return function DummyHomePage() {
        return <div data-testid="homePage">Home Page</div>;
    };
});

describe("App", () => {
    beforeAll(() => {
        // Mocks localStorage
        Object.defineProperty(window, "localStorage", {
            value: localStorageMock,
        });
    });

    test("renders without crashing", () => {
        render(<App />);
    });

    test("renders header", () => {
        render(<App />);
        const headerElement = screen.getByTestId("header");
        expect(headerElement).toBeInTheDocument();
    });

    test("renders home page", () => {
        render(<App />);
        const homePageElement = screen.getByTestId("homePage");
        expect(homePageElement).toBeInTheDocument();
    });
});
