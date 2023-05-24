import "./index.css";
import { LoginOrSignup, LogIn, SignUp } from "./components/LogIn";
import HomePage from './components/HomePage' 
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const UserContext = createContext<{
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
}>({
    username: "",
    setUsername: () => {},
});

function App() {
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <Router>
                <Routes>
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/" element={<LoginOrSignup />} />
                  <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
