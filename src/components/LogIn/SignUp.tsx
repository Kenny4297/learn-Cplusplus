import { useState, ReactElement, ChangeEvent, FormEvent, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../App";
import { useNavigate } from 'react-router-dom'
const SignUp = (): ReactElement => {
    const {username, setUsername} = useContext(UserContext)
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        setUsername(username); 
        localStorage.setItem("user", JSON.stringify({ username, password }));
        setPassword("");
        setConfirmPassword("");
        navigate("/home");
    };

    return (
        <Container>
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
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                    placeholder="Confirm Password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </Container>
    );
};

export default SignUp;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
