import styled from 'styled-components';
import { LessonSlideInterface } from './LessonData/Lesson1Data';
import ReactPlayer from 'react-player';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../index.css';

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
        // maxHeight:'19rem',
        margin: 'auto'
    };

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
            return <CodeText dangerouslySetInnerHTML={{ __html: disc }} />;
        }
    };

    return (
        <Container>
            <Title>
                {SlideTitle}
            </Title>
            
            {img && <img src={img} alt={SlideTitle} />}
            { code ? (
                <CodeAndDescription>
                    <DescCode >
                        {renderContent()}
                    </DescCode>
                    <Code>
                    <StyledSyntaxHighlighter>
                        <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                            {code}
                        </SyntaxHighlighter>
                    </StyledSyntaxHighlighter>
                    </Code>
                </CodeAndDescription>) : (
                    <DescNoCode>
                        {renderContent()}
                    </DescNoCode>
                )}
        </Container>
    );
};

export default LessonsSlider;

const StyledSyntaxHighlighter = styled.div`
    font-size: 1rem;
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    span { // Targets all <span> elements within SyntaxHighlighter
        font-size: inherit; // Inherits the font size from the parent
    }
`;

const CodeText = styled.div`
    @media (min-height: 800px) {
        font-size: 2.25rem;
        height: auto;
        line-height: 2.75rem;
    }
`

const CodeAndDescription = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--lightBackground);
    @media (max-width: 1000px) {
        flex-direction: column;
        background-color: var(--teal);
    }    
`

const Container = styled.div`
    border: 2px solid blue;
    font-size: .5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: white;    
    height: auto;
`;

const Title = styled.h1`
    border: 2px solid green;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size:2rem;
    color: var(--blue);
    @media (min-height: 800px) {
        font-size: 3.5rem;
    }
`;

const DescCode = styled.div`
    width: 100%;
    height: auto;
    border: 2px solid purple;
    padding: 2rem;
    text-align: center;
    line-height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: var(--lightBackground);
    @media (max-width: 1000px) {
        text-align: center;
        /* border: 2px solid green; */
        width: 100%;
        margin-bottom: 1rem;
    }

`

const DescNoCode = styled.div`
    border: 2px solid var(--purple);
    text-align: center;
    /* width: 80%; */
    height: auto;
    padding: 2rem;
    box-sizing: border-box;
    line-height: 1.6rem;
    margin-bottom:1rem;
    background-color: var(--lightBackground);
`;

const Code = styled.div`
    border: 2px solid green;
    margin: 0 auto;
    display: flex;
`;