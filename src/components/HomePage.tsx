import { useContext, useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'

type IndividualLessonSectionProps  = {
    delay: string; // this is optional
}

const HomePage = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { username } = userData;
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState<{username: string}>({
        username: ''
    })

    useEffect(() => {
        const storedUser = localStorage.getItem("user"); // Change "username" to "user"
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser); // Parse the storedUser string into an object
            setUserData(parsedUser); // Set the entire userData state with the parsedUser object
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
                <>
                    <Container>
                        <GreetingSection>
                            <p>Hi <span style={{color: 'var(--orange)', fontSize:'1.5rem'}}>{username}.</span> What are we going to learn today?</p>
                            <TutorialsButton onClick={() => {navigate(`/siteTutorial`)}}>Tutorials</TutorialsButton>
                        </GreetingSection>

                        <LessonSection>
                            <IndividualLessonSection delay="0s">
                                <Span><a href="/lesson/1">Lesson 1: Introduction to C++</a></Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/1`)}}>Quiz 1</button>
                                    </ButtonSection>

                                    <ButtonSection>
                                        <p>Best Quiz score: {userData.quizScores['quiz1']}/10</p>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="0.25s">
                                <Lesson2Span><a href="/lesson/2">Lesson 2: Get started Coding!</a></Lesson2Span>
                                <ButtonSection>
                                    {/* <button style={{backgroundColor: 'green'}} onClick={() => {navigate(`/lesson/2`)}}>Lesson 2</button> */}

                                    <button style={{backgroundColor: 'var(--orange)'}} onClick={() => {navigate(`/challenge/2`)}}>Challenge #1</button>
                                </ButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="0.5s">
                                <Span><a href="/lesson/3">Lesson 3: Hello, World!</a></Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/3`)}}>Quiz 3</button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>Best Quiz score: {userData.quizScores['quiz3']}/8</p>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay=".75s">
                                <Span><a href="/lesson/4">Lesson 4: Mad Libs</a></Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/4`)}}>Quiz 4</button>

                                        <button style={{backgroundColor: 'var(--orange)'}} onClick={() => {navigate(`/challenge/4`)}}>Challenge #2</button>
                                    </ButtonSection>

                                    <ButtonSection>
                                        <p>Best Quiz score: {userData.quizScores['quiz4']}/8</p>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="1s">
                                <Span><a href="/lesson/5">Lesson 5: Build A calculator</a></Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/5`)}}>Quiz 5</button>

                                        <button style={{backgroundColor: 'var(--orange)'}} onClick={() => {navigate(`/challenge/5`)}}>Challenge #3</button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>Best Quiz score: {userData.quizScores['quiz5']}/7</p>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="1.25s">
                                <Span><a href="/lesson/6">Lesson 6: Guessing Game</a></Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/6`)}}>Quiz 6</button>

                                        <button style={{backgroundColor: 'var(--orange)'}} onClick={() => {navigate(`/challenge/6`)}}>Challenge #4</button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>Best Quiz score: {userData.quizScores['quiz6']}/5</p>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="1.5s">
                                <Span><a href="/lesson/7">Lesson 7: Next Steps</a></Span>
                                <Test>
                                <ButtonSection>
                                    <button style={{backgroundColor: 'var(--blue)'}} onClick={() => {navigate(`/quiz/7`)}}>Quiz 7</button>

                                    <button style={{backgroundColor: 'var(--orange)'}} onClick={() => {navigate(`/challenge/7`)}}>Challenge #5</button>
                                </ButtonSection>
                                <ButtonSection>
                                    <p>Best Quiz score: {userData.quizScores['quiz7']}/6</p>
                                </ButtonSection>
                                </Test>
                            </IndividualLessonSection>
                        </LessonSection>
                    </Container>
            </>
            )}
        </>
    )
}

export default HomePage;

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

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Test = styled.div``;

const TutorialsButton = styled.button`
    animation: ${fadeIn} 3s ease-in-out forwards;
    background-color: var(--blue);
    border: none;
    border-radius: 2px;
    padding: .2rem;
    margin-right: 4rem;
`

const Lesson2Span = styled.div`
    a {
        position: relative;
    top: .25rem;
    color: var(--purple);
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: underline;
    }
`;

const GreetingSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 2rem auto 2rem auto;
    margin-bottom: 2rem;
    margin-top: 2rem;
    p {
        color: var(--blue);
        font-weight: bold;
        font-size: 1.5rem;
        animation: 2s ${fadeInFromLeft} ease-out forwards;
    }
`;

const LessonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
`;

const IndividualLessonSection = styled.div<IndividualLessonSectionProps>`
    border-bottom: 1px solid blue;
    width: 80%;
    display: flex;
    justify-content: space-between;
    animation: ${fadeInFromLeft} 1s ease-out both;
    animation-delay: ${props => props.delay || '0s'};
`

const Span = styled.span`
    a {
        color: var(--purple);
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        line-height: 3rem;
    }
`;

const ButtonSection = styled.div`
    width: 12.5rem;
    display: flex;
    justify-content: space-evenly;
    /* border: 3px solid green; */
    p {
        color: var(--gray)
    }
    button {
        border: none;
        border-radius: 2px;
        padding: .2rem;
        &:hover {
            background-color: white;
            cursor: pointer;
        }
    }
`;

const Message = styled.div`
    background-color: black;
    height: 100vh;
    color: var(--blue);
`;

const Container = styled.div`
    background-color: var(--lightBackground);
    display: flex;
    flex-direction: column;
    /* border: 2px solid green; */
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
`;



// Use the animation for your paragraphs
const P1 = styled.p`
  font-size: 3em;
  font-weight: bold;
  padding-left: 10rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  color: var(--purple);
  animation: 2s ${fadeInFromLeft} ease-out forwards;
`;

const P2 = styled.p`
  font-size: 3em;
  padding-left: 10rem;
  padding-bottom: 2rem;
  opacity: 0;
  color: var(--blue);
  animation: 2s ${fadeInFromLeft} ease-out forwards;
  animation-delay: 1s;  // Delay the animation
`;

const P3 = styled.p`
  font-size: 3em;
  padding-left: 10rem;
  opacity: 0;
  color: var(--purple);
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
    margin-top: 2rem;
    border-radius: 10px;
    color: white;
`;