import Lessons from "./Lessons";
import styled from "styled-components";
import "../../index.css";

const LessonTemplate = () => {
    return (
        <Container>
            <Lessons />
        </Container>
    );
};

export default LessonTemplate;

const Container = styled.div`
    /* border: 2px solid purple; */
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;
