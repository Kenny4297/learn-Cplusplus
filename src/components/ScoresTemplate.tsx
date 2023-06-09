import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface QuizParams {
    [quizNumber: string]: string;
}

const ScoresTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const totalScore = location.state?.totalScore || 0;

    // Getting the quiz (and lesson) number from params
    let { quizNumber } = useParams<string>();
    let quizIndexString = 'quiz' + quizNumber;
    let quizIndex = quizIndexString as keyof typeof userData.quizScores;

    const { userData, setUserData } = useContext(UserContext);
    
    const quizWithChallenges: string[] = ["2", "4", "5", "6", "7"];

    const quizData: QuizParams = {
        "1": "10",
        "3": "9",
        "4": "8",
        "5": "6",
        "6": "5",
        "7": "6",
    }

    const getQuizScore = (quizNumber: string): string => {
        return quizData[quizNumber];
    }

    useEffect(() => {
        if (totalScore > userData.quizScores[quizIndex]) {
            setUserData(prevUserData => {
                const updatedUserData = {
                    ...prevUserData,
                    quizScores: {
                        ...prevUserData.quizScores,
                        [quizIndex]: totalScore,
                    },
                };
                localStorage.setItem('user', JSON.stringify(updatedUserData));
                return updatedUserData;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalScore, quizIndex]);

    return (
        <Container>
            <h2>Well Done!</h2>
            <p>Your score was {totalScore} / {quizNumber ? getQuizScore(quizNumber) : "N/A"}!</p>
            <ButtonSection>
                <button onClick={() => navigate(`/quiz/${quizNumber}`)}>Retake quiz</button>
                <button onClick={() => navigate(`/lesson/${quizNumber}`)}>Study lesson</button>
                { quizNumber && quizWithChallenges.includes(quizNumber) &&
                <button onClick={() => navigate(`/challenge/${quizNumber}`)}>Lesson Challenge</button>}
                <button onClick={() => navigate('/')}>Home</button>
            </ButtonSection>
        </Container>
    )
}

export default ScoresTemplate;

const Container = styled.div`
    color: var(--gray);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    width: 80%;
    background-color: var(--lightBackground);
    height: 95vh;
    margin: 0 auto;
    h2 {
        font-size: 2rem;
        text-decoration: underline;
        color: var(--purple);
        @media (min-height: 800px) {
            font-size: 3.5rem;
        }
    }
    p {
        margin-top: 2rem;
        margin-bottom: 2rem;
        @media (min-height: 800px) {
            font-size: 2.25rem;
        }
    }
    button {
        color: var(--gray);
        height:2.75rem;
        width:100%;
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
            height: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
`;

const ButtonSection = styled.div`
    display: flex;
    /* border: 4px solid green; */
    width: auto;
`

