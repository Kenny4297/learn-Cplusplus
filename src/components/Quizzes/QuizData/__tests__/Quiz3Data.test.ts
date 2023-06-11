import { Quiz3Data, Quiz3DataTitle } from "../Quiz3Data";

describe("Quiz3Data", () => {
    test("is an array", () => {
        expect(Array.isArray(Quiz3Data)).toBe(true);
    });

    test("has correct title", () => {
        expect(Quiz3DataTitle).toBe("Quiz 3: Hello, World!");
    });

    test("has correct structure", () => {
        Quiz3Data.forEach((slide) => {
            expect(slide).toHaveProperty("QuestionNumber");
            expect(slide).toHaveProperty("question");
            expect(slide).toHaveProperty("answer1");
            expect(slide).toHaveProperty("answer2");
            expect(slide).toHaveProperty("correct");
    
            expect(typeof slide.QuestionNumber).toBe("number");
            expect(typeof slide.question).toBe("string");
            expect(typeof slide.answer1).toBe("string");
            expect(typeof slide.answer2).toBe("string");
            expect(["string", "undefined"]).toContain(typeof slide.answer3);
            expect(["string", "undefined"]).toContain(typeof slide.answer4);
            expect(typeof slide.correct).toBe("string");
        });
    });

    test("slide numbers are in correct order", () => {
        for (let i = 0; i < Quiz3Data.length - 1; i++) {
            expect(Quiz3Data[i].QuestionNumber + 1).toBe(
                Quiz3Data[i + 1].QuestionNumber
            );
        }
    });

    test("required fields for two answers questions are not null or undefined", () => {
        /* eslint-disable jest/no-conditional-expect */
        Quiz3Data.forEach((slide) => {
            if (!slide.answer3 && !slide.answer4) {
                expect(slide.QuestionNumber).not.toBeNull();
                expect(slide.question).not.toBeNull();
                expect(slide.answer1).not.toBeUndefined();
                expect(slide.answer2).not.toBeUndefined();
                expect(slide.correct).not.toBeUndefined();
            }
        });
    });
});
