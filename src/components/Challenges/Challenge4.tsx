import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Challenge4Component = () => {
    const navigate = useNavigate();
    const [showSolution, setShowSolution] = useState(false);

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
                Challenge 2: Creating your very own Mad Libs!
            </Title>

            <Description>
                    <p>Let's build our very own mad libs project! Since this is your first complex project, I will be giving you some starter code, and you will add in the missing sections as shown in the code below. Copy and paste this code into VSCode, and fill in the missing lines!</p>
            </Description>
            <SyntaxHighlighterContainer>
                <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {
`#include <iostream>
// ADD CODE: What do we need to add to allow strings for user input?
using namespace std;

int main() {
    string noun;
    string noun2;
    // ADD CODE: Let's create a verb variable to store the verb from the user.
    string adjective;
    string preposition;

    cout << "Welcome to C++ Mad Libs!\\n\\n";
    
    cout << "Enter a noun: ";
    getline(cin, noun);

    // ADD CODE: Output a message asking the user to enter another noun
    getline(cin, noun2);

    cout << "Enter a verb in the past tense: ";
    getline(cin, verb);

    cout << "Enter an adjective: ";
    // ADD CODE: Let's finish capturing the users adjective

    // ADD CODE: Display a message to have the user enter a preposition
    // ADD CODE: Finish capturing the users preposition

    cout << "\\nHere's your story:\\n\\n";
    cout << "The " << adjective << " " << noun << " " << verb << " " 
    << preposition << " the " << noun2 << ".\\n";
    /* ADD CODE: What can we 'return' to make sure the program
    has successfully completed execution without any errors? */
}`}
                </SyntaxHighlighter>
            </SyntaxHighlighterContainer>

            <Description>
                <p>Try running the program in your terminal! Good luck! Remember to troubleshoot your issues with Google or AI! Only check the solution when you have figured it out, or if AI or Google were not able to help!</p>
            </Description>

            <button onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && 
                <SyntaxHighlighterContainer>
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                        
{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string noun;
    string noun2;
    string verb;
    string adjective;
    string preposition;

    cout << "Welcome to C++ Mad Libs!\\n\\n";
    
    cout << "Enter a noun: ";
    getline(cin, noun);

    cout << "Enter a second noun: ";
    getline(cin, noun2);

    cout << "Enter a verb in the past tense: ";
    getline(cin, verb);

    cout << "Enter an adjective: ";
    getline(cin, adjective);

    cout << "Enter a preposition: ";
    getline(cin, preposition);

    cout << "\\nHere's your story:\\n\\n";
    cout << "The " << adjective << " " << noun << " " << verb << " " 
    << preposition << " the " << noun2 << ".\\n";
    
    return 0;
}`}
                    </SyntaxHighlighter>
                    </SyntaxHighlighterContainer>
            }
             <ExtraCredit>
                <ExtraCreditTitle>Extra Credit</ExtraCreditTitle>
                <p> Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! </p>
            </ExtraCredit>

            <ButtonContainer>
                <button onClick={() => navigate(`/lesson/4`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Home</button>
            </ButtonContainer>
        </Container>
    );
};

export default Challenge4Component;

const ExtraCreditTitle = styled.h2`
    text-align: center;
    color: var(--blue);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    @media (min-height: 800px) {
        font-size: 4rem;
    }
`
const SyntaxHighlighterContainer = styled.div`
    font-size: 1rem;
    @media (min-height: 800px) {
        font-size: 2.25rem;
        width: 100%;
    }
    span { 
        font-size: inherit;
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    /* height: 95vh; */
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

const ButtonContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
`

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: var(--blue);
    @media (min-height: 800px) {
        font-size: 3.25rem;
    }
`;

const Description = styled.div`
    margin-bottom: 2rem;
    text-align: center;

`;

const ExtraCredit = styled.div`
    margin: 2rem 0;
`;