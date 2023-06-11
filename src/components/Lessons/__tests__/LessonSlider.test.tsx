import { render, screen } from "@testing-library/react";
import LessonsSlider from "../LessonsSlider";
import { ReactNode } from 'react';

jest.mock('react-player', () => () => <div data-testid="react-player" />);

jest.mock('react-syntax-highlighter', () => ({
  Prism: ({ children }: { children?: ReactNode }) => <div data-testid="syntax-highlighter">{children}</div>,
}));

  
  test('renders LessonsSlider with correct content', () => {
    const slide = {
      SlideNumber: 1,
      SlideTitle: 'Test Slide',
      disc: 'Test Description',
      code: 'Test Code'
    };
  
    render(<LessonsSlider slide={slide} />);
  
    // Check that the slide title is displayed
    expect(screen.getByText('Test Slide')).toBeInTheDocument();
  
    // Check that the description is displayed
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    
    // Check that the code is displayed
    expect(screen.getByText('Test Code')).toBeInTheDocument();
  });

test('renders LessonsSlider with video', () => {
  const slide = {
    SlideNumber: 1,
    SlideTitle: 'Test Slide',
    disc: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    code: 'Test Code'
  };

  render(<LessonsSlider slide={slide} />);

  // Check that the ReactPlayer is rendered
  expect(screen.getByTestId('react-player')).toBeInTheDocument();
});
