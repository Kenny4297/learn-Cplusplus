import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from 'react-router-dom';
import Lessons from "../Lessons";
import userEvent from '@testing-library/user-event';

jest.mock("../LessonData/Lesson1Data", () => ({
  Lesson1Data: [
    { SlideNumber: 1, SlideTitle: 'Test Slide', disc: 'Test Description', code: 'Test Code' },
    { SlideNumber: 2, SlideTitle: 'Test Slide 2', disc: 'Test Description 2', code: 'Test Code 2' }
  ],
  Lesson1DataTitle: 'Lesson 1 Title'
}));

jest.mock("../LessonsSlider", () => {
  return () => <div>Mocked LessonsSlider</div>;
});

describe('Lessons component', () => {
    test('renders with correct title and slide data', async () => {
    
        render(
            <MemoryRouter initialEntries={['/lessons/1']}>
                <Route path="/lessons/:lessonNumber">
                    <Lessons />
                </Route>
            </MemoryRouter>
        );
  
      // Loading message should be in the document initially
      expect(screen.getByText('Loading...')).toBeInTheDocument();
  
      // Wait for async actions to complete and check title
      await waitFor(() => {
        // The title of the lesson should be displayed
        expect(screen.getByText('Lesson 1 Title')).toBeInTheDocument();
      });
  
      // Wait for async actions to complete and check LessonsSlider
      await waitFor(() => {
        // The mocked LessonsSlider should be in the document
        expect(screen.getByText('Mocked LessonsSlider')).toBeInTheDocument();
      });
    });

    test('handles next and back navigation correctly', async () => {
        render(
            <MemoryRouter>
                <Lessons />
            </MemoryRouter>
        );

        // Wait for the "Next" button to appear
        const nextButton = await screen.findByRole('button', { name: /Next slide/i });

        // Click the "Next" button
        userEvent.click(nextButton);

        // Wait for the "Back" button to appear
        const backButton = await screen.findByRole('button', { name: /Previous slide/i });

        // Check that "Back" button is in the document
        expect(backButton).toBeInTheDocument();

        // Click the "Back" button
        userEvent.click(backButton);

        // We should be back at the first slide
        await waitFor(() => {
            expect(screen.getByText('Mocked LessonsSlider')).toBeInTheDocument();
        });
    });

  // You could add more tests for the navigation to the quiz or the challenge based on the lesson number...
});
