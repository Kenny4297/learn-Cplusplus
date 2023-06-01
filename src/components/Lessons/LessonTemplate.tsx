import Lessons from './Lessons';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const LessonTemplate = () => {

    const navigate = useNavigate();
      return (
        <Container>
          <Lessons />
          <BackButton>
            <button onClick={() => navigate("/")}>Back</button>
          </BackButton>
        </Container>
      );
}

export default LessonTemplate;

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

