import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import professor from '../../components/Assets/Images/icons8-teacher-100.png'
import quiz1 from '../../components/Assets/Images/icons8-quiz1-100.png'
import quiz2 from '../../components/Assets/Images/icons8-quiz2-100.png'
import gradeA from '../../components/Assets/Images/icons8-gradeA-100.png'
import learning from '../../components/Assets/Images/icons8-learning-100.png'

const QuizTutorial = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <h1>Quizzes</h1>
            <P>
                <p> At "Learn C++," we don't just stop at lessons. To make sure you've fully grasped the concepts, each lesson is followed by a quiz. These aren't your ordinary quizzes, though. They're designed to be straightforward, acting as a touchstone to verify your understanding. Each question in the quiz is drawn directly from the lesson slides, ensuring a direct correlation between the materials you've studied and the questions you're asked.</p>
                <ImageContainer >
                    <img src={quiz1} style={{height:'60%', width:'110%'}} alt="professor" />
                </ImageContainer>
            </P>

            <P>
                <ImageContainer >
                    <img src={quiz2} alt="professor" />
                </ImageContainer>
                <p> The quiz questions come in two formats - multiple choice and true/false. This variety keeps the quiz engaging while testing your comprehension from different angles. If you've been diligent with your notes during the lessons, you'll find the quiz answers come naturally. However, don't worry if you stumble on some questions. The objective here isn't perfection, but learning and growth.</p>
            </P>

            <P>
                <p> While it's not mandatory to ace the quiz before proceeding, we highly recommend that you aim for a near-perfect score. This not only confirms your mastery of the material but also sets you up for success in the subsequent challenges. Your best score for each quiz is displayed on your homepage, providing a quick overview of your progress.</p>
                <ImageContainer >
                    <img src={gradeA} alt="professor" />
                </ImageContainer>
            </P>

            <P>
                <ImageContainer >
                    <img src={learning} alt="professor" />
                </ImageContainer>
                <p> One unique feature of our quizzes is that we don't disclose the correct answers for the questions you missed. This might sound tough, but it's a conscious choice designed to encourage independent learning. If you miss a question, make a note of the relevant lesson slide to review. This way, you are not just handed the answer, but you revisit the lesson, fortifying your understanding. So get ready to put on your thinking caps and show us what you've got! We're excited to join you on this path to mastering C++.</p>
            </P>

            <button onClick={() => {navigate(`/challengeTutorial`)}}>Challenge Tutorial</button>
        </Container>
        )
}

export default QuizTutorial;

const Container = styled.div`
    padding-bottom: 1px;
    /* height: 110vh; */
    margin-bottom: 10rem;
    h1 {
        text-align: center;
        font-size: 1.5rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        color: var(--gray)
    }
    button {
        background-color: var(--purple);
        display: block;
        border: none;
        border-radius: 2px;
        margin: 0 auto;
        padding: .3rem;
        margin-bottom: 5rem;
    }
`;

const P = styled.div`
    background-color: var(--lightBackground);
    width: 80%;
    /* border: 2px solid red; */
    display: flex;
    margin: auto;
    margin-bottom: 3rem;
    p {
        color: white;
        padding: 2rem 2rem;
        width: 80%;
        /* border: 2px solid green; */
    }
    img {
        /* border: 2px solid blue; */
        width: 7.5rem;
        height: 7.5rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`