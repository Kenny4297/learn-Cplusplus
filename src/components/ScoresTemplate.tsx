import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import { useContext, useEffect } from 'react';

// type QuizParams = {
//     quizNumber: string;
// }

const ScoresTemplate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const totalScore = location.state?.totalScore || 0;

    // Getting the quiz (and lesson) number from params
    let { quizNumber } = useParams();
    let quizIndexString = 'quiz' + quizNumber;
    let quizIndex = quizIndexString as keyof typeof userData.quizScores;

    const { userData, setUserData } = useContext(UserContext);
    
    const quizWithChallenges: string[] = ["2", "4", "5", "6", "7"];

    useEffect(() => {
        console.log("useEffect triggering")
        console.log(quizIndex)
        console.log(totalScore);
        console.log(userData.quizScores[quizIndex])

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
    }, [totalScore, quizIndex]);

    return (
        <>
            <p>test</p>
            <p>Your score was {totalScore} / 10!</p>
            <button onClick={() => navigate(`/quiz/${quizNumber}`)}>Retake quiz</button>
            <button onClick={() => navigate(`/lesson/${quizNumber}`)}>Study lesson</button>
            { quizNumber && quizWithChallenges.includes(quizNumber) &&
            <button onClick={() => navigate(`/challenge/${quizNumber}`)}>Lesson Challenge</button>}
            <button onClick={() => navigate('/')}>Go to Home Page</button>
        </>
    )
}

export default ScoresTemplate;
