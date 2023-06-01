import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Challenge2Component = () => {
    const navigate = useNavigate();

    const customStyle = {
        backgroundColor: 'black',
        borderRadius: '5px',
        border: '5px solid blue',
        width: '21rem',
    };

    return (
        <Container>
            <Title>
                <h1>Next Steps</h1>
            </Title>

            <Description>
                You finally did it! You have a solid understanding of the fundamentals of C++! Your next steps is to find some projects to complete! Here are a few examples:
            </Description>

            <Description2>
                <p> <span>Text-based Adventure Game:</span> A simple text-based game where the user can make choices that influence the outcome. This can help beginners understand control flow, functions, and user input.</p>

                <p> <span>Student Grade Record System:</span> A program that tracks student grades. You can create a structure or class to hold student information, then use an array or vector of that class to hold the data for multiple students. This project will give beginners a good grasp of classes, objects, and data structures.</p>

                <p> <span>Banking System:</span> A banking system where you can create accounts, deposit money, withdraw money, and transfer money between accounts. This project can help beginners understand more complex class structures, data manipulation, and perhaps file handling to persist data.</p>

                <p> <span>Library Management System:</span> A program to manage a catalog of books, track book loans, due dates, late fees, etc. This would give you practice with classes, data structures, file I/O, and possibly dates and times.</p>

                <p> <span>Tic Tac Toe Game:</span> A two-player game with a graphical interface. This can be a great way to learn how to create GUI applications using a library such as SFML or SDL.</p>

                <p> <span>Simple Chatbot:</span> A console-based chatbot that gives predefined responses to certain inputs. This would give you practice with strings, file I/O, and control flow.</p>

                <p> <span>Hangman Game:</span> Implementing the classic Hangman game will help you practice string manipulation, control flow, and user input.</p>

                <p> <span>Unit Converter:</span> A program that can convert between different units (like kilometers to miles, Celsius to Fahrenheit, etc.). This can help you understand functions and user input.</p>

                <p> <span>A Simple File-based 'Database':</span> A program that can create, read, update, and delete records in a file, effectively a simple file-based database. This project will help you get a handle on file I/O operations.</p>
            </Description2>

            <ExtraCredit>
                Remember: The goals isn't to just create these projects, it's to understand everything that you write! Happy coding!
            </ExtraCredit>

            <button onClick={() => navigate(`/lesson/7`)}>Study lesson</button>
            <button onClick={() => navigate('/')}>Go to Home Page</button>
        </Container>
    );
};

export default Challenge2Component;

const Container = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const Description2 = styled.div``;
const ExtraCredit = styled.div``;
