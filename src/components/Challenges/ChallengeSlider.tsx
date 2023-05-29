import { ChallengeSlideInterface } from './ChallengeData/Challenge2Data';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

interface ChallengeSlideProps {
    slide: ChallengeSlideInterface;
}

const ChallengeSlider = ({slide}: ChallengeSlideProps) => {
    const { title, desc1, code, desc2, solution } = slide;
    const customStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: '21rem',
    };

    return (
        <Container>
            <Title>
                <h1>{title}</h1>
            </Title>

            <Description>{desc1}</Description>

            <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {code}
            </SyntaxHighlighter>

            <Description>{desc2}</Description>

            {solution && <Solution>{solution}</Solution>}
        </Container>
    );
};

export default ChallengeSlider;

const Container = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const Solution = styled.div``;
