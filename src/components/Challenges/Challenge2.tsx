import { useNavigate } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Challenge2Component = () => {
    const navigate = useNavigate();

    const customStyle: CSSProperties = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: 'auto',
        marginBottom: '2rem'
    };

    return (
        <Container>
            <Title>
                Testing our Set Up
            </Title>

            <Description>
                Now that we have everything set up, let's make sure we can run our programs! Copy and paste the code below into VSCode:
            </Description>

            <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {
`#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`}
            </SyntaxHighlighter>

            <Description>
                    Then in your terminal, run the code. You should see 'Hello, World!' outputted to the terminal! (if you did not you may need to become a developer for a moment and troubleshoot!). Don't worry about what all of this means, we will go through this in the next lesson. 
            </Description>

            <ExtraCredit>
                Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! 
            </ExtraCredit>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', border: '2px solid green', marginBottom:'4rem'}}>
                <button onClick={() => navigate(`/lesson/2`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Go to Home Page</button>
            </div>
        </Container>
    );
};

export default Challenge2Component;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 80%

`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const Description = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const ExtraCredit = styled.div`
    margin-bottom: 2rem;
`;
