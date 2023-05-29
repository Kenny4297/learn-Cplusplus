import { useContext, useEffect } from'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const HomePage =() => {
    const { userData } = useContext(UserContext);
    const { username } = userData;

    const navigate = useNavigate()

    useEffect(() => {
        console.log(`Username is ${username}`)
    }, [username]);

    return (
        <Container>
            <p>This is the home page</p>
            <p>The user logged in is: {username}</p>

            <p>List of the lessons below. We will start working on the first lesson</p>

            <button onClick={() => {navigate(`/lesson/1`)}}>Go to Lesson 1</button>
            <button onClick={() => {navigate(`/quiz/1`)}}>Go to Quiz 1</button>

            <button onClick={() => {navigate(`/lesson/2`)}}>Go to Lesson 2</button>

            <button onClick={() => {navigate(`/challenge/2`)}}>Go to Challenge 2</button>

        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    height: 100vh;
    background-color: orange;
`;