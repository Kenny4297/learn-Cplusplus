import { useLocation } from 'react-router-dom';

const ScoresTemplate = () => {
    const location = useLocation();
    const totalScore = location.state?.totalScore || 0;

    return (
        <>
            <p>test</p>
            <p>Your score was {totalScore} / 10!</p>
        </>
    )
}

export default ScoresTemplate;
