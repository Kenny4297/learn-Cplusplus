import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../App';
import ScoresTemplate from '../ScoresTemplate';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('<ScoresTemplate />', () => {
  const mockSetUserData = jest.fn();
  const mockUserContext = {
    userData: {
      username: 'test',
      lessonsCompleted: { lesson1: 'yes', lesson2: 'no' } as Record<string, 'yes' | 'no'>,
      quizScores: { quiz1: 1 },
      projectsCompleted: { project1: 'yes', project2: 'no' } as Record<string, 'yes' | 'no'>,
    },
    setUserData: mockSetUserData,
  };

  const quizNumber = "1";

  test('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/scores/1', state: { totalScore: 8 } }]}>
        <UserContext.Provider value={mockUserContext}>
          <Routes>
            <Route path='/scores/:id' element={<ScoresTemplate />} />
            <Route path='*' element={<div>All routes</div>} />
          </Routes>
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  test('renders the correct elements', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/scores/1', state: { totalScore: 8 } }]}>
        <UserContext.Provider value={mockUserContext}>
          <Routes>
            <Route path='/scores/:id' element={<ScoresTemplate />} />
            <Route path='*' element={<div>All routes</div>} />
          </Routes>
        </UserContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Well Done!')).toBeInTheDocument();
    expect(screen.getByText('Retake quiz')).toBeInTheDocument();
    expect(screen.getByText('Study lesson')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('buttons navigate to the correct paths', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/scores/1', state: { totalScore: 8 } }]}>
        <UserContext.Provider value={mockUserContext}>
          <Routes>
            <Route path='/scores/:id' element={<ScoresTemplate />} />
            <Route path='*' element={<div>All routes</div>} />
          </Routes>
        </UserContext.Provider>
      </MemoryRouter>
    );

    const navigate = useNavigate() as jest.Mock;

    fireEvent.click(screen.getByText('Retake quiz'));
    expect(navigate).toHaveBeenCalledWith(`/quiz/${quizNumber}`);

    fireEvent.click(screen.getByText('Study lesson'));
    expect(navigate).toHaveBeenCalledWith(`/lesson/${quizNumber}`);

    fireEvent.click(screen.getByText('Home'));
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
