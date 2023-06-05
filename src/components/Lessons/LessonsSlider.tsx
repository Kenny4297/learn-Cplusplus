import styled from 'styled-components';
import { LessonSlideInterface } from './LessonData/Lesson1Data';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../index.css'

interface LessonSlideProps {
    slide: LessonSlideInterface;
}

const LessonsSlider = ({slide}: LessonSlideProps) => {
    const customStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '2px solid var(--purple)',
        width: 'auto',
        height: 'auto',
        maxHeight:'19rem',
        margin: 'auto'
    };

    useEffect(() => {
        console.log("Testing Lesson Slider?")
    }, [])
    const { SlideTitle, disc, img, code } = slide;

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
            return <ReactPlayer url={disc} playing controls width="100%" height="100%" />;
        } else {
            // I understand the issue with the following code, but since the user isn't able to alter the HTML, This shouldn't be an issue
            return <div dangerouslySetInnerHTML={{ __html: disc }} />;
        }
    };

    return (
        <Container>
            <Title>
                {SlideTitle}
            </Title>
            
            {img && <img src={img} alt={SlideTitle} />}
            { code ? (
                <div style={{display: 'flex', backgroundColor: 'var(--lightBackground)', height:'auto'}}>
                    <DescCode >
                        {renderContent()}
                    </DescCode>
                    <Code>
                        <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                            {code}
                        </SyntaxHighlighter>
                    </Code>
                </div>) : (
                    <DescNoCode>
                        {renderContent()}
                    </DescNoCode>
                )}
        </Container>
    );
};

export default LessonsSlider;

const Container = styled.div`
    /* border: 2px solid blue; */
    font-size: .5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: white;
    /* height: 200vh; */
`;

const Title = styled.h1`
    border: 2px solid green;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size:2rem;
    color: var(--blue);
`;

const DescCode = styled.div`
    width: 50%;
    padding: 2rem;
    text-align: center;
    line-height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items:center;

`

const DescNoCode = styled.div`
    /* border: 2px solid var(--purple); */
    text-align: center;
    width: 80%;
    height: 75%;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.6rem;
    margin-bottom:1rem;
    background-color: var(--lightBackground);

    /* padding-bottom: 4rem; */
    
`;

const Code = styled.div`
    /* border: 2px solid green; */
    margin: 0 auto;
    display: flex;
`;