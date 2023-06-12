import { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Challenge5Component = () => {
    const navigate = useNavigate();
    const [showSolution, setShowSolution] = useState(false);

    const customStyle: CSSProperties = {
        backgroundColor: 'black',
        borderRadius: '5px',
        // margin: '2rem 2rem',
        width: '100%',
        border: '5px solid blue',
    };

    return (
        <Container>
            <Title>
                Challenge 3: Build a Calculator
            </Title>

            <Description>
                    <p>Alright, now let's take it up a notch! Your task is to create a calculator that takes two numbers and an operator (+, -, *, /) and prints out the solution to the screen. Like before I will give you a bit of starter code, but your will have to fill in more than last time! Good luck!</p>
            </Description>
            <SyntaxHighlighterContainer data-testid="syntax-highlighter-1">
                <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {
`/* ADD CODE: We are not working with strings,
 but we still need to 'include' something here! */
using namespace std;

// ADD CODE: Initiate the function that contains the application
    int num1, num2;
    char operation;

    cout << "Enter first number: ";
    // ADD CODE: Finish capturing the first number

    cout << "Enter an operator (+, -, *, /): ";
    // ADD CODE: save the operation to the variable 'operation

    /* ADD CODE: Get a second number from the user and capture it as well. 
    HINT: This will be two lines of code! */

    if (operation == '+') {
        cout << "The result is: " << num1 + num2 << endl;
    } else if (operation == '-') {
        // ADD CODE: If the operation is '-', but tract the two numbers
    // ADD CODE: Add an 'else if' condition that checks if the operation is a '*'
        cout << "The result is: " << num1 * num2 << endl;
    } else if (operation == '/') {
        // ADD CODE: add a conditional check to see if num1 != 0
            cout << "The result is: " << num1 / num2 << endl;
        } else {
            /* ADD CODE: Print a message to the user stating
             that division by 0 is not allowed */
        }
    } else {
        cout << "Error! Invalid operator." << endl;
    }

    // ADD CODE: Can you remember what we need to add at the end of a function?
}
                `}
                </SyntaxHighlighter>
            </SyntaxHighlighterContainer>
            <Description>
                <p>I hope this project was challenging, but not impossible! Syntax is huge in C++, and that will come with time!</p>
            </Description>



            <button onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && 
            <SyntaxHighlighterContainer data-testid="syntax-highlighter-2">
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                        {
`#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    char operation;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter an operator (+, -, *, /): ";
    cin >> operation;

    cout << "Enter second number: ";
    cin >> num2;

    if (operation == '+') {
        cout << "The result is: " << num1 + num2 << endl;
    } else if (operation == '-') {
        cout << "The result is: " << num1 - num2 << endl;
    } else if (operation == '*') {
        cout << "The result is: " << num1 * num2 << endl;
    } else if (operation == '/') {
        if(num2 != 0){
            cout << "The result is: " << num1 / num2 << endl;
        } else {
            cout << "Error! Division by zero is not allowed." << endl;
        }
    } else {
        cout << "Error! Invalid operator." << endl;
    }

    return 0;
}
`}
                    </SyntaxHighlighter>
                    </SyntaxHighlighterContainer>
            }

            <ExtraCredit>
                <ExtraCreditTitle>Extra Credit</ExtraCreditTitle>
                <p> Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! </p>
            </ExtraCredit>

            <ButtonContainer>
                <button onClick={() => navigate(`/lesson/5`)}>Review lesson</button>
                <button onClick={() => navigate('/')}>Home</button>
            </ButtonContainer>
        </Container>
    );
};

export default Challenge5Component;

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

const SyntaxHighlighterContainer = styled.div`
    font-size: 1rem;
    width: auto;
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
`






