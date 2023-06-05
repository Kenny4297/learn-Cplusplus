import Quizzes from './Quizzes'
import styled from 'styled-components'

const QuizTemplate = () => {
    return (
        <Container>
        <Quizzes />
        </Container>
    );
}

export default QuizTemplate;

const Container = styled.div`
    /* border: 2px solid purple; */
    margin: 0 auto;
    height: 95vh;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--lightBackground);
    /* height: 100%; */

`;
