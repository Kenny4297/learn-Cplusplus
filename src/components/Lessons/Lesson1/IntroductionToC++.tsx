import Lessons from './Lessons';
import { Lesson1Data } from '../LessonData';
import styled from 'styled-components'

const IntroductionToCPlusPlus = () => {
  return (
    <Container>
      <Lessons lesson={Lesson1Data} />
    </Container>
  );
}

export default IntroductionToCPlusPlus;

const Container = styled.div`
    border: 2px solid purple;
    margin: 0 auto;
    height: 90vh;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-top: 5rem; */
`;


