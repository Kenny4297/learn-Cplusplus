import Quizzes from './Quizzes'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const QuizTemplate = () => {
    const navigate = useNavigate();
    return (
        <Container>
        <Quizzes />
        <BackButton>
            <button onClick={() => navigate("/")}>Back</button>
        </BackButton>
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

const BackButton = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
    button {
      color: white;
      background-color: var(--purple);
      padding: .2rem;
      border-radius: 2px;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
`;
