import { render, screen } from '@testing-library/react';
import LessonTemplate from '../LessonTemplate';

jest.mock('../Lessons', () => {
  return () => <div>Mocked Lessons</div>;
}); 

test('renders LessonTemplate component', () => {
  render(<LessonTemplate />);
  const lessonsElement = screen.getByText(/Mocked Lessons/i); 
  expect(lessonsElement).toBeInTheDocument();
});
