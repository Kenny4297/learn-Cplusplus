import { useContext, useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'

const HomePage = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { username } = userData;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<{username: string}>({
        username: ''
    })

    useEffect(() => {
        const storedUser = localStorage.getItem("user"); // Change "username" to "user"
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser); // Parse the storedUser string into an object
            setUserData(parsedUser); // Set the entire userData state with the parsedUser object
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [setUserData]);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        const updatedUserData = { ...userData, username: formData.username }; // Create a new object with the updated username
        setUserData(updatedUserData); // Update userData state
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    useEffect(() => {
        console.log(`Username is ${username}`)
    }, [username]);

    return (
        <>
            { !userData.username ? (
                <Message>
                    <P1>Hi there!</P1>
                    <P2>Welcome to "Learn C++", an interactive learning platform to teach you the basics of C++!</P2>
                    <P3>Before we get started, what's your name?</P3>
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </Form>
                </Message>

            ) : (
            <Container>
                <GreetingSection>
                    <p>Hi {username}. What are we going to learn today?</p>
                    <button onClick={() => {navigate(`/siteTutorial`)}}>Tutorials</button>
                </GreetingSection>

                <LessonSection>
                    <IndividualLessonSection>
                        <Span>Lesson 1: Introduction to C++</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/1`)}}>Lesson 1</button>

                            <button onClick={() => {navigate(`/quiz/1`)}}>Quiz 1</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 2: Get Started Coding!</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/2`)}}>Lesson 2</button>

                            <button onClick={() => {navigate(`/challenge/2`)}}>Challenge #1</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 3: "Hello, World!"</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/3`)}}>Lesson 3</button>

                            <button onClick={() => {navigate(`/quiz/3`)}}>Quiz 3</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 4: Mad Libs</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/4`)}}>Lesson 4</button>

                            <button onClick={() => {navigate(`/quiz/4`)}}>Quiz 4</button>

                            <button onClick={() => {navigate(`/challenge/4`)}}>Challenge #2</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 5: Build a Calculator</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/5`)}}>Lesson 5</button>

                            <button onClick={() => {navigate(`/quiz/5`)}}>Quiz 5</button>

                            <button onClick={() => {navigate(`/challenge/5`)}}>Challenge #3</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 6: Guessing Game</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/6`)}}>Lesson 6</button>

                            <button onClick={() => {navigate(`/quiz/6`)}}>Quiz 6</button>

                            <button onClick={() => {navigate(`/challenge/6`)}}>Challenge #4</button>
                        </ButtonSection>
                    </IndividualLessonSection>

                    <IndividualLessonSection>
                        <Span>Lesson 7: Next Steps</Span>
                        <ButtonSection>
                            <button onClick={() => {navigate(`/lesson/7`)}}>Lesson 7</button>

                            <button onClick={() => {navigate(`/quiz/7`)}}>Quiz 7</button>

                            <button onClick={() => {navigate(`/challenge/7`)}}>Challenge #5</button>
                        </ButtonSection>
                    </IndividualLessonSection>
                </LessonSection>

            </Container>)}
        </>
    )
}

export default HomePage;

const GreetingSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid red;
    width: 80%;
    margin: 2rem auto 2rem auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

const LessonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

const IndividualLessonSection = styled.div`
    border: 2px solid blue;
    width: 80%;
    display: flex;
    justify-content: space-between;

    /* width: 100%; */
`

const Span = styled.span``;

const ButtonSection = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    border: 3px solid green;
`;

const Message = styled.div``;

const Container = styled.div`
    /* height: 80vh; */
    display: flex;
    flex-direction: column;
    border: 2px solid green;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
`;

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Use the animation for your paragraphs
const P1 = styled.p`
  font-size: 3em;
  font-weight: bold;
  padding-left: 10rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  opacity: 0;
  animation: 2s ${fadeInFromLeft} ease-out forwards;
`;

const P2 = styled.p`
  font-size: 3em;
  padding-left: 10rem;
  padding-bottom: 2rem;
  opacity: 0;
  animation: 2s ${fadeInFromLeft} ease-out forwards;
  animation-delay: 1s;  // Delay the animation
`;

const P3 = styled.p`
  font-size: 3em;
  padding-left: 10rem;
  opacity: 0;
  animation: 2s ${fadeInFromLeft} ease-out forwards;
  animation-delay: 2s;  // Delay the animation
`;

const Form = styled.form`
    font-size: 3em;
    padding-left: 10rem;
    padding-bottom: 2rem;
    opacity: 0;
    animation: 2s ${fadeInFromLeft} ease-out forwards;
    animation-delay: 3s;  // Delay the animation
`;

const Input = styled.input`
    font-size: 1em;
    padding-left: 1rem;
    height: 4rem;
    border-radius: 10px;
`;