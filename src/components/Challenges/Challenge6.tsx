import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";
import styled, { CSSProperties } from 'styled-components'

const Challenge6 = () => {
    const [showSolution, setShowSolution] = useState(false);

    const navigate = useNavigate();

    const customStyle1: CSSProperties = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: 'auto',
        margin: '0 auto',
        marginTop:'1rem',
        marginBottom:'2rem'
    };

    const customStyle2: CSSProperties = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        margin: '0 auto',
        marginBottom:'2rem'
    };

    return (
        <Container>
            <Title>
                Challenge 4: Guessing Game
            </Title>

            <Description>
                <p>This will be the most difficult project you have ever completed, since you will need to do something you never had to do before: Think like a programmer! I will be giving you some starter code and some hints, but it will be up to do you put this all together. You may want to go back through the lessons and review some of the syntax and ideas. Here is some code that you may want to use in the project:</p>
                <SyntaxHighlighterContainer1>
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle1}>
                    {
`<ctime>
<cstdlib>
srand(static_cast<unsigned int>(time(0)));
int target = rand() % 10 + 1;
`}
                    </SyntaxHighlighter>
                </SyntaxHighlighterContainer1>

                <p style={{textAlign: 'center', color: 'var(--blue', fontSize:'2rem', fontWeight:'bold'}}>Hints:</p> <br></br>
                <div style={{width:'75%', display: 'flex', justifyContent:'center', alignItems: 'center', margin: '0 auto'}}>
                    <p>1) You WILL find yourself struggling using conditionals inside the while loop. Keep in mind that you CAN have a conditional inside of another conditional... <br></br> <br></br>
                    2) First check to see if you have won, THEN execute the correct code if you haven't won the game yet.
                    Don't forget to close your "{}"! <br></br> <br></br>

                    3) Remember: struggling is completely normal in the life of a programmer. Learn to love the struggle! <br></br> <br></br>

                    4) Knowing what to do and when is the absolute key to programming. You have so many tools at your disposal, but knowing when to use them is what programming is all about. <br></br> <br></br></p>
                </div>
            </Description>

            <button style={{}} onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && 
            <SyntaxHighlighterContainer2>
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle2}>
                        {
`#include <iostream>
#include <ctime>
#include <cstdlib>
using namespace std;

int main() {
    srand(static_cast<unsigned int>(time(0)));  
        // Seed random number generator.

    int target = rand() % 10 + 1;  
        // Generate target number: a random integer between 1 and 10.
    int guess;  // Variable to hold user's guess.
    int lives = 4;  // User starts with 4 lives.

    cout << "Welcome to the Guess the Number game!\\n";
    cout << "Guess a number between 1 and 10.\\n";
    cout << "You have " << lives << " lives.\\n";

    while (lives > 0) {
        cout << "Enter your guess: ";
        cin >> guess;

        if (guess == target) {
            cout << "Correct, you win!\\n";
            return 0;  // End the game if the user guessed correctly.
        } else {
            --lives;  // Decrement the user's lives.
            if (lives > 0) {
                cout << "Sorry, " << guess << " 
                    was not the right number! Guess again!\\n";
                cout << "You have " << lives << " lives left.\\n";
            } else {
                cout << "Sorry, " << guess << " was not the right number 
                and you have run out of lives! Game Over!\\n";
                return 0;  // End the game if the user has run out of lives.
            }
        }
    }

    return 0;
}`}
                        </SyntaxHighlighter>
                    </SyntaxHighlighterContainer2>
            }

            
            <ExtraCredit>
                <ExtraCreditTitle>Extra Credit</ExtraCreditTitle>
                <p> Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! </p>
            </ExtraCredit>

           <ButtonContainer>
                <button onClick={() => navigate(`/lesson/6`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Home</button>
            </ButtonContainer>
        </Container>
    );
}

export default Challenge6;

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
        color: var(--teal);
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

const SyntaxHighlighterContainer1 = styled.div`
    font-size: 1rem;
    width: 27.5rem;
    margin: 0 auto;
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    @media (max-width: 570px ) {
        font-size: 3vw;
        width: 80vw;
    }
    span { 
        font-size: inherit; 
    }
`;

const SyntaxHighlighterContainer2 = styled.div`
    font-size: 1rem;
    width: 100%;
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    @media (max-width: 930px ) {
        font-size: 1.6vw;
    }
    span { 
        font-size: inherit; 
    }
`;

const ExtraCreditTitle = styled.h2`
    text-align: center;
    color: var(--blue);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    @media (min-height: 800px) {
        font-size: 4rem;
    }
`;

const ExtraCredit = styled.div`
    margin: 2rem 0;
`;

const ButtonContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
`;








