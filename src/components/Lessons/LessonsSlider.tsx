import styled from 'styled-components';
import { LessonSlideInterface } from './LessonData/Lesson1Data';
import { useEffect } from 'react'

//This is the lessonsSlider itself that will be passed into IntroToCPlusPlus

interface LessonSlideProps {
    slide: LessonSlideInterface;
}

const LessonsSlider = ({slide}: LessonSlideProps) => {
    useEffect(() => {
        console.log("Testing Lesson Slider?")
    }, [])
    const { SlideNumber, SlideTitle, disc, img } = slide;

    return (
        <Container>
            <p>testing lessonsSlider</p>
            <Title>
                <h1>{SlideTitle}</h1>
            </Title>

            <Text>
                {disc}
            </Text>
            {img && <img src={img} alt={SlideTitle} />}
            <p>{SlideNumber}</p>
        </Container>
    );
};

export default LessonsSlider;

const Container = styled.div`
    border: 2px solid blue;
    width:80%;
    height: 100%;
    font-size: .5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    border: 2px solid green;
    margin-top: 5rem;
    margin-bottom: 5rem;
`;

const Text = styled.div`
    text-align: center;
`;

