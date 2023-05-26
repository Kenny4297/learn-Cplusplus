import "./index.css";
import HomePage from './components/HomePage';
import IntroPage from "./components/IntroPage";
import IntroductionToCPlusPlus from './components/Lessons/Lesson1/IntroductionToC++';
import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const UserContext = createContext<{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
}>({
    username: "",
    setUsername: () => {},
});

function App() {
    const storedUserData = localStorage.getItem('user');
    const storedUser = storedUserData ? JSON.parse(storedUserData) : {username: "", lessonsCompleted: [], challengesCompleted: [], projectsCompleted: []};
    const [username, setUsername] = useState(storedUser.username);

    useEffect(() => {
        const updatedUser = {...storedUser, username};
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);
    
    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <Router>
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/lesson1" element={<IntroductionToCPlusPlus />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
