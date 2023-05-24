import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const LoginOrSignup = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleSignUp = () => {
        navigate("/signUp");
    }
    return (
        <Container >
            <h1>Welcome to 'Learn React'!</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>Sign Up</button>
        </Container>
    )
}

export default LoginOrSignup;

const Container = styled.div``;