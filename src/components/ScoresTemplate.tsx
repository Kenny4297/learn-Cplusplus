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
        "3": "8",
        "4": "8",
        "5": "7",
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
                console.log(updatedUserData)
                return updatedUserData;
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalScore, quizIndex]);

    return (
        <Container>
            <p>Good work!</p>
            <p>Your score was {totalScore} / {quizNumber ? getQuizScore(quizNumber) : "N/A"}!</p>
            <button onClick={() => navigate(`/quiz/${quizNumber}`)}>Retake quiz</button>
            <button onClick={() => navigate(`/lesson/${quizNumber}`)}>Study lesson</button>
            { quizNumber && quizWithChallenges.includes(quizNumber) &&
            <button onClick={() => navigate(`/challenge/${quizNumber}`)}>Lesson Challenge</button>}
            <button onClick={() => navigate('/')}>Go to Home Page</button>
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
    p {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    button {
        color: var(--gray);
    }
`;
