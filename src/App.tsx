import "./index.css";
import HomePage from './components/HomePage';
import IntroPage from "./components/IntroPage";
import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LessonTemplate, QuizTemplate, ScoresTemplate } from "./components/Lessons";
import ChallengeTemplate from './components/Challenges/ChallengeTemplate'

export const UserContext = createContext<{
    userData: {
        username: string;
        lessonsCompleted: Record<string, 'yes' | 'no'>; 
        quizScores: Record<string, number>; 
        projectsCompleted: Record<string, 'yes' | 'no'>; 
    };
    setUserData: Dispatch<SetStateAction<{
        username: string;
        lessonsCompleted: Record<string, 'yes' | 'no'>;
        quizScores: Record<string, number>;
        projectsCompleted: Record<string, 'yes' | 'no'>;
    }>>;
}>({
    userData: {
        username: "",
        lessonsCompleted: {},
        quizScores: {},
        projectsCompleted: {}
    },
    setUserData: () => {},
});

function App() {
    const storedUserData = localStorage.getItem('user');
    const defaultUser = {
        username: "",
        lessonsCompleted: {lesson1: 'no', lesson2: 'no', lesson3: 'no', lesson4: 'no', lesson5: 'no', lesson6: 'no', lesson7: 'no', lesson8: 'no', lesson9: 'no', lesson10: 'no'},
        quizScores: {quiz1: 0, quiz2: 0, quiz3: 0, quiz4: 0, quiz5: 0, quiz6: 0, quiz7: 0, quiz8: 0, quiz9: 0, quiz10: 0},
        projectsCompleted: {project1: 'no', /* other projects */}
    };
    const storedUser = storedUserData 
        ? JSON.parse(storedUserData) 
        : defaultUser;

        const [userData, setUserData] = useState<{
            username: string;
            lessonsCompleted: Record<string, 'yes' | 'no'>;
            quizScores: Record<string, number>;
            projectsCompleted: Record<string, 'yes' | 'no'>;
        }>(storedUser);

    // Update the storedUserData in localStorage every time userData changes
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userData));
    }, [userData]);
    
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <Router>
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/lesson/:lessonNumber" element={<LessonTemplate />} />
                    <Route path="/quiz/:quizNumber" element={<QuizTemplate />} />
                    <Route path="/scores/:quizNumber" element={<ScoresTemplate />} />
                    <Route path="/challenge/:challengeNumber" element={<ChallengeTemplate />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
