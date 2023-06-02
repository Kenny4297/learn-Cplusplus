import "./index.css";
import HomePage from './components/HomePage';
import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LessonTemplate, QuizTemplate, ScoresTemplate } from "./components/Lessons";
import ChallengeLoader from "./components/Challenges/ChallengeLoader"
import SiteTutorial from "./components/Tutorials/SiteTutorial";
import QuizTutorial from "./components/Tutorials/QuizTutorial";
import LessonTutorial from "./components/Tutorials/LessonTutorial";
import ChallengeTutorial from "./components/Tutorials/ChallengeTutorial";
import Header from "./components/Header";
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop';

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
        quizScores: {quiz1: 0, quiz2: 0, quiz3: 0, quiz4: 0, quiz5: 0, quiz6: 0, quiz7: 0, quiz8: 0, quiz9: 0, quiz10: 0},
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
        <>
        <div className="wrapper">
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Router>
                    <ScrollToTop />
                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/lesson/:lessonNumber" element={<LessonTemplate />} />
                    <Route path="/quiz/:quizNumber" element={<QuizTemplate />} />
                    <Route path="/scores/:quizNumber" element={<ScoresTemplate />} />
                    <Route path="/challenge/:challengeNumber" element={<ChallengeLoader />} />
                    <Route path="/siteTutorial" element={<SiteTutorial />} />
                    <Route path="/lessonTutorial" element={<LessonTutorial />} />
                    <Route path="/quizTutorial" element={<QuizTutorial />} />
                    <Route path="/challengeTutorial" element={<ChallengeTutorial />} />
                    </Routes>
                </Router>
            </UserContext.Provider>
        </div>
        </>
    );
}

export default App;

const HeaderContainer = styled.div`
    /* height: 5rem; */
`
