import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizSlider from './QuizSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import { QuizSlide } from './QuizData/Quiz1Data';

interface QuizProps {
    quiz: QuizSlide[];
}

type Params = {
    quizNumber: string;
}

const getQuizData = async (quizNumber: string): Promise<QuizSlide[]> => {
  const module = await import(`./QuizData/Quiz${quizNumber}Data`);
  return module.QuizData;
}

const Quizzes = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [quizData, setQuizData] = useState<QuizSlide[]>([]);
    const { quizNumber } = useParams<Params>();
    
    useEffect(() => {
      const fetchQuizData = async () => {
          if (!quizNumber) {
              console.error("No quiz number provided");
              return;
          }
  
          const data = await getQuizData(quizNumber);
          setQuizData(data);
      }
  
      fetchQuizData();
  }, [quizNumber]);

    const nextSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide((oldSlide) => oldSlide - 1);
    };

    return (
      <Container id="quizzes">
        <Title>
          {/* assuming quizData has a title property */}
          <h1 className="blue" aria-label="Quizzes">{quizData?.[0]?.QuizTitle}</h1>
        </Title>
        <QuizSlider slide={quizData[currentSlide]} />
        <Buttons>
          <ButtonWrapper>
            {currentSlide !== 0 && (
              <button onClick={prevSlide} aria-label="Previous slide">
                <IoIosArrowBack />
              </button>
            )}
          </ButtonWrapper>
          <ButtonWrapper>
            {currentSlide !== quizData.length - 1 && (
              <button onClick={nextSlide} aria-label="Next slide">
                <IoIosArrowForward />
              </button>
            )}
          </ButtonWrapper>
        </Buttons>
      </Container>
  );
}

export default Quizzes;

const Container = styled.div`
    border: 2px solid green;
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Title = styled.div`
    text-align: center;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    margin: 0 auto;
`

const ButtonWrapper = styled.div`
    display: inline-block;
    border: 2px solid green;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 1.25rem;
`;