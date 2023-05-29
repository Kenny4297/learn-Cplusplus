import styled from 'styled-components';
import { LessonSlideInterface } from './LessonData/Lesson1Data';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
interface LessonSlideProps {
    slide: LessonSlideInterface;
}

// In your LessonsSlider component...
const LessonsSlider = ({slide}: LessonSlideProps) => {
    const customStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: '21rem',
    };

    useEffect(() => {
        console.log("Testing Lesson Slider?")
    }, [])
    const { SlideNumber, SlideTitle, disc, img, code } = slide;

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
            return (<>
                <ReactMarkdown linkTarget="_blank">{disc}</ReactMarkdown>
            </>);
        }
    };

    return (
        <Container>
            <p>testing lessonsSlider</p>
            <Title>
                <h1>{SlideTitle}</h1>
            </Title>

            <Desc >
                {renderContent()}
            </Desc>
            {img && <img src={img} alt={SlideTitle} />}
            <p>{SlideNumber}</p>
            { code && 
            <Code>
                <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                    {code}
                </SyntaxHighlighter>
            </Code>}
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

const Desc = styled.div``;

const Code = styled.div``;