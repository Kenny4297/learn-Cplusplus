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
                <h1>Testing our Set Up</h1>
            </Title>

            <Description>
                Now that we have everything set up, let's make sure we can run our programs! Copy and paste the code below into VSCode:
            </Description>

            <SyntaxHighlighter language="cpp" style={tomorrow} customStyle={customStyle}>
                {`
                #include <iostream>
                
                int main() {
                    std::cout << "Hello, World!";
                    return 0;
                }`}
            </SyntaxHighlighter>

            <Description>
                    Then in your terminal, run the code. You should see 'Hello World' outputted to the terminal! (if you did not you may need to become a developer for a moment and troubleshoot!). Don't worry about what all of this means, we will go through this in the next lesson. 
            </Description>

            <ExtraCredit>
                Extra Credit: Once you have the app running successfully, deleted it and try it from scratch! Try to recreate it with as little assistance as possible! 
            </ExtraCredit>

            <button onClick={() => navigate(`/lesson/2`)}>Study lesson</button>
            <button onClick={() => navigate('/')}>Go to Home Page</button>
        </Container>
    );
};

export default Challenge2Component;

const Container = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const ExtraCredit = styled.div``;
