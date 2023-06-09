import { Lesson1Data, Lesson1DataTitle } from '../Lesson1Data';
import { LessonSlideInterface } from '../Lesson1Data';

describe("Lesson1Data", () => {
  test("is an array", () => {
    expect(Array.isArray(Lesson1Data)).toBe(true);
  });

  test("has correct title", () => {
    expect(Lesson1DataTitle).toBe("Lesson 1: Introduction To C++");
  });

  test("has correct structure", () => {
    Lesson1Data.forEach(slide => {
      expect(slide).toHaveProperty('SlideNumber');
      expect(slide).toHaveProperty('SlideTitle');
      expect(slide).toHaveProperty('disc');
      expect(typeof slide.SlideNumber).toBe('number');
      expect(typeof slide.SlideTitle).toBe('string');
      expect(typeof slide.disc).toBe('string');
    });
  });

  test("slide numbers are in correct order", () => {
    for (let i = 0; i < Lesson1Data.length - 1; i++) {
      expect(Lesson1Data[i].SlideNumber + 1).toBe(Lesson1Data[i + 1].SlideNumber);
    }
  });

  test("required fields are not null or undefined", () => {
    Lesson1Data.forEach(slide => {
      expect(slide.SlideNumber).not.toBeNull();
      expect(slide.SlideTitle).not.toBeNull();
      expect(slide.disc).not.toBeNull();
      expect(slide.SlideNumber).not.toBeUndefined();
      expect(slide.SlideTitle).not.toBeUndefined();
      expect(slide.disc).not.toBeUndefined();
    });
  });
});
