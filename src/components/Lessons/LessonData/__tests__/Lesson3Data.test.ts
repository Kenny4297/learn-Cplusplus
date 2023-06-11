import { Lesson3Data, Lesson3DataTitle } from "../Lesson3Data";

describe("Lesson1Data", () => {
    test("is an array", () => {
        expect(Array.isArray(Lesson3Data)).toBe(true);
    });

    test("has correct title", () => {
        expect(Lesson3DataTitle).toBe("Lesson 3: Hello, World!");
    });

    test("has correct structure", () => {
        Lesson3Data.forEach((slide) => {
            expect(slide).toHaveProperty("SlideNumber");
            expect(slide).toHaveProperty("SlideTitle");
            expect(slide).toHaveProperty("disc");
            expect(typeof slide.SlideNumber).toBe("number");
            expect(typeof slide.SlideTitle).toBe("string");
            expect(typeof slide.disc).toBe("string");
        });
    });

    test("slide numbers are in correct order", () => {
        for (let i = 0; i < Lesson3Data.length - 1; i++) {
            expect(Lesson3Data[i].SlideNumber + 1).toBe(
                Lesson3Data[i + 1].SlideNumber
            );
        }
    });

    test("required fields are not null or undefined", () => {
        Lesson3Data.forEach((slide) => {
            expect(slide.SlideNumber).not.toBeNull();
            expect(slide.SlideTitle).not.toBeNull();
            expect(slide.disc).not.toBeNull();
            expect(slide.SlideNumber).not.toBeUndefined();
            expect(slide.SlideTitle).not.toBeUndefined();
            expect(slide.disc).not.toBeUndefined();
        });
    });
});
