import {
    useState,
    useContext,
    ReactElement,
    ChangeEvent,
    FormEvent,
} from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import {useNavigate} from 'react-router-dom'

const LogIn = (): ReactElement => {
    const navigate = useNavigate();
    const { username, setUsername } = useContext(UserContext)
    const [ password, setPassword ] = useState<string>("");
    const [ createNewUsername, setCreateNewUsername] = useState<boolean>(false)

    const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        // Clear the input entires here:
    
        // Get stored user data from localStorage
        const storedUserData: string | null = localStorage.getItem("username");
    
        if(storedUserData !== null) {
            let storedUser = JSON.parse(storedUserData);
    
            // Check if user exists in localStorage and password matches
            if(storedUser && storedUser.username === username && storedUser.password === password) {
                setUsername("");
                setPassword("");
                alert("Logged In");
                navigate("/home");
            } else {
                // If username and password don't match, show error message
                setCreateNewUsername(true)
            }
        } 
    };

    const sendToSignUpPage = () => {
        navigate("/signUp")
    }

    return (
        <Container>
            <>
                <p>(This is a simulated log in page. Do not use a serious password, or any password that you have used in real websites.)</p>
                <p>Username and Password are case sensitive!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={handleChangeUsername}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                        placeholder="Password"
                    />
                    <button type="submit">Log In</button>
                </form>
                {createNewUsername && (
                    <>
                        <p>No user with this name exists in our database. Click here to sign up, or simply try again!</p>
                        <button onClick={sendToSignUpPage}>Sign Up</button>
                    </>
                )}
            </>
        </Container>
    );
};

export default LogIn;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
