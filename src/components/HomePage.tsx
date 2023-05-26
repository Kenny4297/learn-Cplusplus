import { useContext, useEffect } from'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const HomePage =() => {
    const { username } = useContext(UserContext);

    const navigate = useNavigate()

    useEffect(() => {
        console.log(`Username is ${username}`)
    }, [username]);

    return (
        <Container>
            <p>This is the home page</p>
            <p>The user logged in is: {username}</p>

            <p>List of the lessons below. We will start working on the first lesson</p>

            <button onClick={() => {console.log(`Navigating to /lesson/1`); navigate(`/lesson/1`);}}>Go to Lesson 1</button>

        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    height: 100vh;
    background-color: orange;
`;