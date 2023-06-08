import { useContext, useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { UserContext } from '../App';
import { useNavigate, Link } from 'react-router-dom';
import styled, {keyframes} from 'styled-components'
import professor from '../components/Assets/Images/icons8-teacher-100.png'

type IndividualLessonSectionProps  = {
    delay: string; 
}

const HomePage = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { username } = userData;
    const navigate = useNavigate();
    const [formData, setFormData] = useState<{username: string}>({
        username: ''
    })

    useEffect(() => {
        const storedUser = localStorage.getItem("user"); 
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser); 
            setUserData(parsedUser); 
        } 
    }, [setUserData]);

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        const updatedUserData = { ...userData, username: formData.username }; 
        setUserData(updatedUserData);
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
                <MessageContainer>
                    <TextSection>
                        <H1><span><img src={professor} style={{width: '5rem'}} alt="professor" /></span>Hi there!</H1>
                        <P1>Welcome to "Learn C++", an interactive learning platform to teach you the basics of C++!</P1>
                        <P2>Before we get started, what's your name?</P2>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Learn!</button>
                        </Form>
                    </TextSection>

                    <ImageSection>
                        
                    </ImageSection>
                </MessageContainer>

            ) : (
                <>
                    <Container>
                        <GreetingSection>
                            <p>Hi <span>{username}.</span> What are we going to learn today?</p>
                            <TutorialsButton onClick={() => {navigate(`/siteTutorial`)}}>Tutorials</TutorialsButton>
                        </GreetingSection>

                        <LessonSection>
                            <IndividualLessonSection delay="0s">
                                <Span><Link to="/lesson/1">Lesson 1: Introduction to C++</Link></Span>
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
                                <Lesson2Span><Link to="/lesson/2">Lesson 2: Get started Coding!</Link></Lesson2Span>
                                <Test>
                                    <ButtonSection>
                                        <button style={{backgroundColor: 'var(--orange)', position: 'relative', bottom:'.4rem', marginTop:'.5rem'}} onClick={() => {navigate(`/challenge/2`)}}>Challenge #1</button>
                                    </ButtonSection>
                                </Test>
                            </IndividualLessonSection>

                            <IndividualLessonSection delay="0.5s">
                                <Span><Link to="/lesson/3">Lesson 3: Hello, World!</Link></Span>
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
                                <Span><Link to="/lesson/4">Lesson 4: Mad Libs</Link></Span>
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
                                <Span><Link to="/lesson/5">Lesson 5: Build A calculator</Link></Span>
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
                                <Span><Link to="/lesson/6">Lesson 6: Guessing Game</Link></Span>
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
                                <Span><Link to="/lesson/7">Lesson 7: Next Steps</Link></Span>
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

const TextSection = styled.div`

`;

const ImageSection = styled.div`
    margin: 0 auto;
    /* border: 2px solid red; */
    img {
        position: relative;
        top: 5rem;
    }
`;

const Test = styled.div`
    @media (max-width: 665px) {
        /* border: 2px solid green; */
         margin: 0 auto;
    }
`;

const TutorialsButton = styled.button`
    animation: ${fadeIn} 3s ease-in-out forwards;
    border: 2px solid green;
    background-color: var(--blue);
    border: none;
    border-radius: 2px;
    padding: .2rem;
    margin-right: 4rem;
    @media (max-width: 640px) {
        margin: 0 auto;
        margin-top: 1rem;
    }
    @media (min-height: 800px) {
        font-size: 1.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const Lesson2Span = styled.div`
    a {
        position: relative;
        top: -.5rem;
        color: var(--purple);
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        @media (max-width: 840px) {
            font-size: 1rem;
            top: -.4rem;
            padding-top:1rem;
        }
        @media (min-height: 800px) {
            font-size: 2.25rem;
        }
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
    @media (min-height: 800px) {
        width: 100%;
        padding-bottom: 3rem;
    }
    p {
        color: var(--blue);
        font-weight: bold;
        font-size: 1.5rem;
        animation: 2s ${fadeInFromLeft} ease-out forwards;
        span {
            color: var(--orange);
            font-size: 1.5rem;
            @media (min-height: 800px) {
                font-size: 2.5rem;
            }
        }
        @media (min-height: 800px) {
            font-size: 2.5rem;
            width: 100%;
        }
    }
    @media (max-width: 665px) {
        flex-direction: column;
    }
    @media (min-height: 800px) {
            font-size: 2.25rem;
        }
`;

const LessonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
`;

const IndividualLessonSection = styled.div<IndividualLessonSectionProps>`
    border-bottom: 1px solid var(--blue);
    width: 80%;
    display: flex;
    justify-content: space-between;
    animation: ${fadeInFromLeft} 1s ease-out both;
    animation-delay: ${props => props.delay || '0s'};
    @media (max-width: 840px) {
            font-size: 1rem;
            height: auto;
        }
    @media (max-width: 665px) {
        flex-direction: column;
    }
    @media (min-height: 800px) {
            font-size: 2.25rem;
        }
`

const Span = styled.span`
    a {
        color: var(--purple);
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        line-height: 3rem;
        /* border: 2px solid green; */
        @media (max-width: 840px) {
            font-size: 1rem;
        }
        @media (max-width: 640px) {
            line-height: 2rem;
        } 
        @media (min-height: 800px) {
            font-size: 2.25rem;
        }
    }
    
`;

const ButtonSection = styled.div`
    width: 12.5rem;
    display: flex;
    justify-content: space-evenly;
    p {
        color: var(--gray);
        @media (min-height: 800px) {
            font-size: 1.5rem;
        }
    }
    @media (min-height: 800px) {
        border: 2px solid blue;
        width: 20rem;
    }
    button {
        border: none;
        border-radius: 2px;
        padding: .2rem;
        &:hover {
            background-color: white;
            cursor: pointer;
        }
        @media (max-width: 840px) {
            font-size: .75rem;
        }
        @media (max-width: 640px) {
            font-size: .75rem;
        }
        @media (min-height: 800px) {
            font-size: 1.25rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`;

const MessageContainer = styled.div`
    background-color: black;
    height: 95vh;
    display: flex;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    /* width: 90%; */
    @media (max-width: 800px) {
        font-size: .5rem;
    }
    @media (max-width: 560px) {
        font-size: .4rem;
    }
    @media (min-height: 800px) {
        text-align: center;
    }
`;

const Container = styled.div`
    background-color: var(--lightBackground);
    display: flex;
    flex-direction: column;
    width: 80%;
    /* height: 100%; */
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
    @media (min-height: 800px) {
        font-size: 1.5rem;
    }
`;


const H1 = styled.h1`
  font-size: 3em;
  font-weight: bold;
  /* padding-left: 10rem; */
  padding-top: 2rem;
  padding-bottom: 2rem;
  opacity: 0;
  color: var(--purple);
  animation: 1s ${fadeInFromLeft} ease-out forwards;
  @media (min-height: 800px) {
        font-size: 4.25rem;
    }

`;

const P1 = styled.p`
  font-size: 2em;
  /* padding-left: 10rem; */
  padding-bottom: 2rem;
  opacity: 0;
  color: var(--blue);
  animation: 1s ${fadeInFromLeft} ease-out forwards;
  animation-delay: .25s;
    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
    @media (max-width: 560px) {
        font-size: 1rem;
    }
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    
`;

const P2 = styled.p`
  font-size: 2em;
  /* padding-left: 10rem; */
  opacity: 0;
  color: var(--purple);
  animation: 1s ${fadeInFromLeft} ease-out forwards;
  animation-delay: .5s; 
  @media (max-width: 800px) {
        font-size: 1.5rem;
    }
    @media (max-width: 560px) {
        font-size: 1rem;
    }
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
`;

const Form = styled.form`
    font-size: 3em;
    /* padding-left: 10rem; */
    padding-bottom: 2rem;
    opacity: 0;
    animation: 1s ${fadeInFromLeft} ease-out forwards;
    animation-delay: .75s; 
    /* border: 2px solid red; */
    @media (max-width: 800px) {
        width: 2rem;
    }
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }

    button {
        /* height: 3rem; */
        background-color: var(--blue);
        border-radius: 4px;
        color: var(--teal);
        font-size: 2rem;
        /* height: 3rem; */
        /* padding: .5rem; */
        padding: 0rem 1rem;
        margin-left:1rem;
        border: none;
        &:hover {
            cursor: pointer;
            background-color: var(--teal);
            color: var(--blue);
            border: 1px solid white;
        }
        @media (max-width: 800px) {
            font-size: 1.5rem;
        }
        @media (max-width: 560px) {
            font-size: 1rem;
        }
    }
`;

const Input = styled.input`
    font-size: 2rem;
    padding-left: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    color: white;
    border: 2px solid blue;
    @media (max-width: 800px) {
        width: 30rem;
    }
    @media (max-width: 700px) {
        width: 25rem;
    }
    @media (max-width: 600px) {
        width: 20rem;
    }
    @media (max-width: 500px) {
        width: 15rem;
    }
    @media (max-width: 400px) {
        width: 10rem;
    }
`;