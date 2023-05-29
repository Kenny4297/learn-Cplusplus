import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ChallengeTemplate = () => {
    const navigate = useNavigate();
    let { quizNumber } = useParams();

    const customStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: '21rem',
    };

    const codeString = `
    #include <iostream>
    
    int main() {
        std::cout << "Hello, World!";
        return 0;
    }`;
        
    return (
        <Container>
            <p>Now that we have everything set up, let's make sure we can run our programs! Copy and past the code below into VSCode:</p>

            <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {codeString}
            </SyntaxHighlighter>

            <p>Then in your terminal, </p>
            
            <button onClick={() => navigate(`/lesson/${quizNumber}`)}>Study lesson</button>
            <button onClick={() => navigate('/Home')}>Go to Home Page</button>
        </Container>
    )
}

export default ChallengeTemplate;

const Container = styled.div``;
