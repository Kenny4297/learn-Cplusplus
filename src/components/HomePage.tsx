import { useContext, useEffect, useState, FormEvent, ChangeEvent } from "react";
import { UserContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import professor from "../components/Assets/Images/icons8-teacher-100.png";

type IndividualLessonSectionProps = {
    delay: string;
};

const HomePage = () => {
    const { userData, setUserData } = useContext(UserContext);
    const { username } = userData;
    const navigate = useNavigate();
    const [formData, setFormData] = useState<{ username: string }>({
        username: "",
    });

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
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            {!userData.username ? (
                <MessageContainer>
                    <div>
                        <H1>
                            <span>
                                <img
                                    src={professor}
                                    style={{ width: "5rem", position: 'relative', top:'.185rem' }}
                                    alt="professor"
                                />
                            </span>
                            Hi there!
                        </H1>
                        <P1>
                            Welcome to "Learn C++", an interactive learning
                            platform to teach you the basics of C++!
                        </P1>
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
                    </div>

                </MessageContainer>
            ) : (
                <>
                    <Container>
                        <GreetingSection>
                            <p>
                                Hi <span>{username}.</span> What are we going to
                                learn today?
                            </p>
                            <TutorialsButton
                                onClick={() => {
                                    navigate(`/siteTutorial`);
                                }}
                            >
                                Tutorials
                            </TutorialsButton>
                        </GreetingSection>

                        <LessonSection>
                            <IndividualLessonSection  delay="0s">
                                <Span>
                                    <Link data-testid="individual-lesson-section-1" to="/lesson/1">
                                        Lesson 1: Introduction to C++
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/1`);
                                            }}
                                        >
                                            Quiz 1
                                        </button>
                                    </ButtonSection>

                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz1"]}/10
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection  delay="0.25s">
                                <Lesson2Span>
                                    <Link data-testid="individual-lesson-section-2" to="/lesson/2">
                                        Lesson 2: Get started Coding!
                                    </Link>
                                </Lesson2Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <ButtonSpan2
                                            className="orange"
                                            onClick={() => {
                                                navigate(`/challenge/2`);
                                            }}
                                        >
                                            Challenge #1
                                            </ButtonSpan2>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection data-testid="individual-lesson-section-3" delay="0.5s">
                                <Span>
                                    <Link to="/lesson/3">
                                        Lesson 3: Hello, World!
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/3`);
                                            }}
                                        >
                                            Quiz 3
                                        </button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz3"]}/9
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection data-testid="individual-lesson-section-4" delay=".75s">
                                <Span>
                                    <Link to="/lesson/4">
                                        Lesson 4: Mad Libs
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/4`);
                                            }}
                                        >
                                            Quiz 4
                                        </button>

                                        <button
                                            className="orange"
                                            onClick={() => {
                                                navigate(`/challenge/4`);
                                            }}
                                        >
                                            Challenge #2
                                        </button>
                                    </ButtonSection>

                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz4"]}/8
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection data-testid="individual-lesson-section-5" delay="1s">
                                <Span>
                                    <Link to="/lesson/5">
                                        Lesson 5: Build A calculator
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/5`);
                                            }}
                                        >
                                            Quiz 5
                                        </button>

                                        <button
                                            className="orange"
                                            onClick={() => {
                                                navigate(`/challenge/5`);
                                            }}
                                        >
                                            Challenge #3
                                        </button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz5"]}/6
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection data-testid="individual-lesson-section-6" delay="1.25s">
                                <Span>
                                    <Link to="/lesson/6">
                                        Lesson 6: Guessing Game
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/6`);
                                            }}
                                        >
                                            Quiz 6
                                        </button>

                                        <button
                                            className="orange"
                                            onClick={() => {
                                                navigate(`/challenge/6`);
                                            }}
                                        >
                                            Challenge #4
                                        </button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz6"]}/5
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>

                            <IndividualLessonSection data-testid="individual-lesson-section-7" delay="1.5s">
                                <Span>
                                    <Link to="/lesson/7">
                                        Lesson 7: Next Steps
                                    </Link>
                                </Span>
                                <LargeButtonSection>
                                    <ButtonSection>
                                        <button
                                            className="blue"
                                            onClick={() => {
                                                navigate(`/quiz/7`);
                                            }}
                                        >
                                            Quiz 7
                                        </button>

                                        <button className="orange"
                                            onClick={() => {
                                                navigate(`/challenge/7`);
                                            }}
                                        >
                                            Challenge #5
                                        </button>
                                    </ButtonSection>
                                    <ButtonSection>
                                        <p>
                                            Best Quiz score:{" "}
                                            {userData.quizScores["quiz7"]}/6
                                        </p>
                                    </ButtonSection>
                                </LargeButtonSection>
                            </IndividualLessonSection>
                        </LessonSection>
                    </Container>
                </>
            )}
        </>
    );
};

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

const MessageContainer = styled.div`
    background-color: black;
    height: 95vh;
    display: flex;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    @media (max-width: 800px) {
        font-size: 0.5rem;
    }
    @media (max-width: 560px) {
        font-size: 0.4rem;
    }
    @media (min-height: 800px) {
        text-align: center;
        justify-content: center;
        margin: 0 auto;
    }
`;

const H1 = styled.h1`
    font-size: 3em;
    font-weight: bold;
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
    padding-bottom: 2rem;
    opacity: 0;
    color: var(--blue);
    animation: 1s ${fadeInFromLeft} ease-out forwards;
    animation-delay: 0.25s;
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
    opacity: 0;
    color: var(--purple);
    animation: 1s ${fadeInFromLeft} ease-out forwards;
    animation-delay: 0.5s;
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
    padding-bottom: 2rem;
    opacity: 0;
    animation: 1s ${fadeInFromLeft} ease-out forwards;
    animation-delay: 0.75s;
    /* border: 2px solid red; */
    @media (max-width: 800px) {
        width: 2rem;
    }
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
    button {
        background-color: var(--blue);
        border-radius: 4px;
        color: var(--teal);
        font-size: 2rem;
        padding: 0rem 1rem;
        margin-left: 1rem;
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
    border: 2px solid var(--blue);
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

// ============= Home Page With User Data Section

const Container = styled.div`
    background-color: var(--lightBackground);
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 2rem;
    text-align: center;
    animation: ${fadeIn} 1.5s ease-in-out forwards;
    @media (min-height: 800px) {
        font-size: 1.5rem;
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
    /* border: 2px solid green; */
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

const TutorialsButton = styled.button`
    animation: ${fadeIn} 3s ease-in-out forwards;
    /* border: 2px solid green; */
    background-color: var(--blue);
    box-shadow: 1px 2px 5px 1px var(--purple);
    border: none;
    border-radius: 2px;
    padding: 0.2rem;
    margin-right: 4rem;
    &:hover {
        background-color: var(--teal);
        color: var(--gray);
        cursor: pointer;
    }
    @media (max-width: 640px) {
        margin: 0 auto;
        margin-top: 1rem;
    }
    @media (min-height: 800px) {
        font-size: 1.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const LessonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    /* border: 2px solid red; */
    @media (min-height: 800px) {
        font-size: 2.25rem;
    }
`;

const IndividualLessonSection = styled.div<IndividualLessonSectionProps>`
    border-bottom: 1px solid var(--blue);
    /* border: 2px solid red; */
    width: 80%;
    display: flex;
    justify-content: space-between;
    animation: ${fadeInFromLeft} 1s ease-out both;
    animation-delay: ${(props) => props.delay || "0s"};
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

`;

const Lesson2Span = styled.div`
    a {
        position: relative;
        top: -0.48rem;
        color: var(--purple);
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        @media (max-width: 840px) {
            font-size: 1rem;
            top: -0.4rem;
            padding-top: 1rem;
        }
        @media (min-height: 800px) {
            font-size: 2.25rem;
        }
    }
`;

const ButtonSpan2 = styled.button`
    background-color: var(--orange);
    position: relative;
    bottom: .4rem;
    margin-top: .5rem;
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

const LargeButtonSection = styled.div`
    @media (max-width: 665px) {
        /* border: 2px solid green; */
        margin: 0 auto;
    }
`;

const ButtonSection = styled.div`
    width: 12.5rem;
    display: flex;
    justify-content: space-evenly;
    /* border: 2px solid green; */
    p {
        color: var(--gray);
        padding-top: .5rem;
        @media (min-height: 800px) {
            font-size: 1.5rem;
        }
    }
    @media (min-height: 800px) {
        /* border: 2px solid blue; */
        width: 20rem;
    }
    button {
        border: none;
        border-radius: 2px;
        padding: 0.2rem;
        @media (max-width: 840px) {
            font-size: 0.75rem;
        }
        @media (max-width: 640px) {
            font-size: 0.75rem;
        }
        @media (min-height: 800px) {
            font-size: 1.25rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`;