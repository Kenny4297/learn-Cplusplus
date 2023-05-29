import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChallengeSlider from './ChallengeSlider';
import { ChallengeSlideInterface } from './ChallengeData/Challenge2Data';

type ChallengeParams = {
    challengeNumber: string;
};

const getChallengeData = async (lessonNumber: number) => {
    const module = await import(`./ChallengeData/Challenge${lessonNumber}Data`);
    return module[`Challenge${lessonNumber}Data`];
};

const ChallengeTemplate = () => {
    const { challengeNumber } = useParams<ChallengeParams>();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [challengeData, setChallengeData] = useState<ChallengeSlideInterface[] | null>(null);

    const nextSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide - 1);
    };

    useEffect(() => {
        const fetchChallengeData = async () => {
            const data = await getChallengeData(Number(challengeNumber));
            setChallengeData(data);
        };
    
        fetchChallengeData();
    }, [challengeNumber]);

    if (!challengeData) {
        return <p>Loading...</p>;
    }

    return (
        <Container>
            <ChallengeSlider slide={challengeData[currentSlide]} />
            {currentSlide !== 0 && (
                <button onClick={prevSlide}>Previous Slide</button>
            )}
            {currentSlide !== challengeData.length - 1 ? (
                <button onClick={nextSlide}>Next Slide</button>
            ) : (
                <>
                    <button onClick={() => navigate(`/lesson/${challengeNumber}`)}>Study lesson</button>
                    <button onClick={() => navigate('/Home')}>Go to Home Page</button>
                </>
            )}
        </Container>
    );
};

export default ChallengeTemplate;

const Container = styled.div``;
