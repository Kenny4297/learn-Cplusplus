import { Lesson7Data, Lesson7DataTitle } from "../Lesson7Data";

describe("Lesson1Data", () => {
    test("is an array", () => {
        expect(Array.isArray(Lesson7Data)).toBe(true);
    });

    test("has correct title", () => {
        expect(Lesson7DataTitle).toBe("Lesson 7: Next Steps");
    });

    test("has correct structure", () => {
        Lesson7Data.forEach((slide) => {
            expect(slide).toHaveProperty("SlideNumber");
            expect(slide).toHaveProperty("SlideTitle");
            expect(slide).toHaveProperty("disc");
            expect(typeof slide.SlideNumber).toBe("number");
            expect(typeof slide.SlideTitle).toBe("string");
            expect(typeof slide.disc).toBe("string");
        });
    });

    test("slide numbers are in correct order", () => {
        for (let i = 0; i < Lesson7Data.length - 1; i++) {
            expect(Lesson7Data[i].SlideNumber + 1).toBe(
                Lesson7Data[i + 1].SlideNumber
            );
        }
    });

    test("required fields are not null or undefined", () => {
        Lesson7Data.forEach((slide) => {
            expect(slide.SlideNumber).not.toBeNull();
            expect(slide.SlideTitle).not.toBeNull();
            expect(slide.disc).not.toBeNull();
            expect(slide.SlideNumber).not.toBeUndefined();
            expect(slide.SlideTitle).not.toBeUndefined();
            expect(slide.disc).not.toBeUndefined();
        });
    });
});
