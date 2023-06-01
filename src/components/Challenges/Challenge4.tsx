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
                Creating your very own Mad Libs!
            </Title>

            <Description>
                    Let's build our very own mad libs project! Since this is your first complex project, I will be giving you some starter code, and you will add in the missing sections as shown in the code below. Copy and paste this code into VSCode, and fill in the missing lines!
            </Description>

            <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {
`#include <iostream>
// ADD CODE: What do we need to add to allow strings from user input?

int main() {
    std::string noun;
    std::string noun2;
    // ADD CODE: Let's create a verb variable to store the verb from the user.
    std::string adjective;
    std::string preposition;

    std::cout << "Welcome to C++ Mad Libs!\\n\\n";
    
    std::cout << "Enter a noun: ";
    std::getline(std::cin, noun);

    // ADD CODE: Output a message asking the user to enter another noun
    std::getline(std::cin, noun2);

    std::cout << "Enter a verb: ";
    std::getline(std::cin, verb);

    std::cout << "Enter an adjective: ";
    // ADD CODE: Let's finish capturing the users adjective

    // ADD CODE: Display a message to have the user enter a preposition
    // ADD CODE: Finish capturing the users preposition

    std::cout << "\\nHere's your story:\\n\\n";
    std::cout << "The " << adjective << " " << noun << " " << verb << " " 
    << preposition << " the " << noun2 << ".\\n";
    /* ADD CODE: What can we 'return' to make sure the program
    has successfully completed execution without any errors? */
}`}
            </SyntaxHighlighter>

            <Description>
                Try running the program in your terminal! Good luck! Remember to troubleshoot your issues with Google or AI! Only check the solution when you have figured it out, or if AI or Google were not able to help!
            </Description>

            <ExtraCredit>
                Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! 
            </ExtraCredit>

            <button onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && 
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                        
{`#include <iostream>
#include <string>

int main() {
    std::string noun;
    std::string noun2;
    std::string verb;
    std::string adjective;
    std::string preposition;

    std::cout << "Welcome to C++ Mad Libs!\\n\\n";
    
    std::cout << "Enter a noun: ";
    std::getline(std::cin, noun);

    std::cout << "Enter a second noun: ";
    std::getline(std::cin, noun2);

    std::cout << "Enter a verb: ";
    std::getline(std::cin, verb);

    std::cout << "Enter an adjective: ";
    std::getline(std::cin, adjective);

    std::cout << "Enter a preposition: ";
    std::getline(std::cin, preposition);

    std::cout << "\\nHere's your story:\\n\\n";
    std::cout << "The " << adjective << " " << noun << " " << verb << " " 
    << preposition << " the " << noun2 << ".\\n";
    
    return 0;
}`}
                    </SyntaxHighlighter>
            }
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', border: '2px solid green', marginBottom:'4rem'}}>
                <button onClick={() => navigate(`/lesson/4`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Go to Home Page</button>
            </div>
        </Container>
    );
};

export default Challenge4Component;

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
    margin-top: 2rem;
`;

const Description = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const ExtraCredit = styled.div`
    margin-bottom: 2rem;
`;
