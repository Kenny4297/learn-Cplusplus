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
                Challenge 1: Testing our Set Up
            </Title>

            <Description>
                <p>Now that we have everything set up, let's make sure we can run our programs! Copy and paste the code below into VSCode:</p>
            </Description>
            <SyntaxHighlighterContainer>
                <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
            
                {
`#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}`}
            </SyntaxHighlighter>
            </SyntaxHighlighterContainer>

            <Description>
                    <p>Then in your terminal, run the code. You should see 'Hello, World!' outputted to the terminal! (if you did not you may need to become a developer for a moment and troubleshoot!). Don't worry about what all of this means, we will go through this in the next lesson. </p>
            </Description>

            <ButtonContainer>
                <button onClick={() => navigate(`/lesson/2`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Home</button>
            </ButtonContainer>
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
    width: 80%;
    color: var(--gray);
    background-color: var(--lightBackground);
    p {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        @media (min-height: 800px) {
            font-size: 2.25rem;
        }
    }
    button {
        color: var(--gray);
        height:2.75rem;
        width: auto;
        background-color: var(--blue);
        padding:.2rem .5rem;
        margin:1rem 1rem;
        border-radius: 2px;
        border: none;
        &:hover {
            color: var(--purple);
            background-color: var(--teal);
            outline: 2px solid var(--purple);
            cursor: pointer;
        }
        @media (min-height: 800px) {
            font-size: 2.25rem;
            height: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: var(--blue);
    text-align: center;
    @media (min-height: 800px) {
        font-size: 3.25rem;
    }
`;

const Description = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const SyntaxHighlighterContainer = styled.div`
    font-size: 1rem;
    width: 18rem;
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    span { 
        font-size: inherit; 
    }
`;

const ButtonContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
`