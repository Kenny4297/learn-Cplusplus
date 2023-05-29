import Quizzes from './Quizzes'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const QuizTemplate = () => {
    const navigate = useNavigate();
    return (
        <Container>
        <Quizzes />
        <BackButton>
            <button onClick={() => navigate("/home")}>Back</button>
        </BackButton>
        </Container>
    );
}

export default QuizTemplate;

const Container = styled.div`
    border: 2px solid purple;
    margin: 0 auto;
    height: 90vh;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BackButton = styled.div`
    margin-top: 2rem;
`;
