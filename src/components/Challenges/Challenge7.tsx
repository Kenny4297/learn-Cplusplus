import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Challenge2Component = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                Next Steps
            </Title>

            <Description>
                You finally did it! You have a solid understanding of the fundamentals of C++! Your next steps is to find some projects to complete! Here are a few examples:
            </Description>

            <Description2>
                <p> <Span>Text-based Adventure Game:</Span> A simple text-based game where the user can make choices that influence the outcome. This can help beginners understand control flow, functions, and user input.</p> <br></br>

                <p> <Span>Student Grade Record System:</Span> A program that tracks student grades. You can create a structure or class to hold student information, then use an array or vector of that class to hold the data for multiple students. This project will give beginners a good grasp of classes, objects, and data structures.</p> <br></br>

                <p> <Span>Banking System:</Span> A banking system where you can create accounts, deposit money, withdraw money, and transfer money between accounts. This project can help beginners understand more complex class structures, data manipulation, and perhaps file handling to persist data.</p> <br></br>

                <p> <Span>Library Management System:</Span> A program to manage a catalog of books, track book loans, due dates, late fees, etc. This would give you practice with classes, data structures, file I/O, and possibly dates and times.</p> <br></br>

                <p> <Span>Tic Tac Toe Game:</Span> A two-player game with a graphical interface. This can be a great way to learn how to create GUI applications using a library such as SFML or SDL.</p> <br></br>

                <p> <Span>Simple Chatbot:</Span> A console-based chatbot that gives predefined responses to certain inputs. This would give you practice with strings, file I/O, and control flow.</p> <br></br>

                <p> <Span>Hangman Game:</Span> Implementing the classic Hangman game will help you practice string manipulation, control flow, and user input.</p> <br></br>

                <p> <Span>Unit Converter:</Span> A program that can convert between different units (like kilometers to miles, Celsius to Fahrenheit, etc.). This can help you understand functions and user input.</p> <br></br>

                <p> <Span>A Simple File-based 'Database':</Span> A program that can create, read, update, and delete records in a file, effectively a simple file-based database. This project will help you get a handle on file I/O operations.</p> <br></br>
            </Description2>

            <ExtraCredit>
                Remember: The goals isn't to just create these projects, it's to understand everything that you write! Happy coding!
            </ExtraCredit>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', border: '2px solid green', marginBottom:'4rem'}}>
                <button onClick={() => navigate(`/lesson/7`)}>Review lesson</button>
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
    width: 80%;
    padding-bottom: 5rem;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

const Span = styled.span`
    font-weight: bold;
`;

const Description = styled.div`
    margin-bottom: 2rem;
    text-align: center;
`;

const Description2 = styled.div`
`

const ExtraCredit = styled.div`
    margin-bottom: 2rem;
`;
