import styled from 'styled-components';
import { LessonSlideInterface } from './LessonData/Lesson1Data';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
interface LessonSlideProps {
    slide: LessonSlideInterface;
}

// In your LessonsSlider component...
const LessonsSlider = ({slide}: LessonSlideProps) => {
    useEffect(() => {
        console.log("Testing Lesson Slider?")
    }, [])
    const { SlideNumber, SlideTitle, disc, img } = slide;

    const renderContent = () => {
        const isURL = (string: string) => {
            try {
                new URL(string);
                return true;
            } catch (_) {
                return false;
            }
        };

        if (isURL(disc)) {
            return <ReactPlayer url={disc} playing controls width="100%" height="auto" />;
        } else {
            return <p>{disc}</p>;
        }
    };

    return (
        <Container>
            <p>testing lessonsSlider</p>
            <Title>
                <h1>{SlideTitle}</h1>
            </Title>

            {renderContent()}
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