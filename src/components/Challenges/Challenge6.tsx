import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const Challenge6 = () => {
    const [showSolution, setShowSolution] = useState(false);

    const navigate = useNavigate();

    const customStyle = {
        margin: '20px 0',
        borderRadius: '10px',
    };

    return (
        <Container>
            <Title>
                <h1>Guessing Game</h1>
            </Title>

            <Description>
                This will be the most difficult project you have ever completed, since you will need to do something you never had to do before: Think like a programmer! I will be giving you some starter code and some hints, but it will be up to do you put this all together. You may want to go back through the lessons and review some of the syntax and ideas. Here is some code that you may want to use in the project:

                <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                    {`
                    <ctime>
                    <cstdlib>
                    srand(static_cast<unsigned int>(time(0)));
                    int target = rand() % 10 + 1;
                    `}
                </SyntaxHighlighter>

                Hints:
                You WILL find yourself struggling using conditionals inside the while loop. Keep in mind that you CAN have a conditional inside of another conditional...
                First check to see if you have won, THEN execute the correct code if you haven't won the game yet.
                Don't forget to close your "{}"!
                Remember: struggling is completely normal in the life of a programmer. Learn to love the struggle!

                I leave you with nothing else. Try your best, and remember to use Google and AI for assistance!
            </Description>

            <Description>
                Knowing what to do and when is the absolute key to programming. You have so many tools at your disposal, but knowing when to use them is what programming is all about.
            </Description>

            <ExtraCredit>
                Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible!
            </ExtraCredit>

            

            <button onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>

            {showSolution && 
                <Solution>
                    <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                        {`
                        #include <iostream>
                        #include <ctime>
                        #include <cstdlib>
                        
                        int main() {
                            srand(static_cast<unsigned int>(time(0)));  // Seed random number generator.
                        
                            int target = rand() % 10 + 1;  // Generate target number: a random integer between 1 and 10.
                            int guess;  // Variable to hold user's guess.
                            int lives = 4;  // User starts with 4 lives.
                        
                            std::cout << "Welcome to the Guess the Number game!\\n";
                            std::cout << "Guess a number between 1 and 10.\\n";
                            std::cout << "You have " << lives << " lives.\\n";
                        
                            while (lives > 0) {
                                std::cout << "Enter your guess: ";
                                std::cin >> guess;
                        
                                if (guess == target) {
                                    std::cout << "Correct, you win!\\n";
                                    return 0;  // End the game if the user guessed correctly.
                                } else {
                                    --lives;  // Decrement the user's lives.
                                    if (lives > 0) {
                                        std::cout << "Sorry, " << guess << " was not the right number! Guess again!\\n";
                                        std::cout << "You have " << lives << " lives left.\\n";
                                    } else {
                                        std::cout << "Sorry, " << guess << " was not the right number and you have run out of lives! Game Over!\\n";
                                        return 0;  // End the game if the user has run out of lives.
                                    }
                                }
                            }
                        
                            return 0;
                        }
                        `}
                    </SyntaxHighlighter>
                </Solution>
            }

            <button onClick={() => navigate(`/lesson/6`)}>Study lesson</button>
            <button onClick={() => navigate('/')}>Go to Home Page</button>
        </Container>
    );
}

export default Challenge6;

const Container = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const ExtraCredit = styled.div``;
const Solution = styled.div``;


