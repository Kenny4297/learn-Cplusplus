import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import professor from '../../components/Assets/Images/icons8-teacher-100.png'
import challenge from '../../components/Assets/Images/icons8-challenge-100.png'
import code from '../../components/Assets/Images/icons8-code-100.png'


const SiteTutorial = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Overview of the site</h1>
            <P>
                <p>Welcome to "Learn C++," your friendly and engaging destination for grasping the essentials of the widely-used programming language, C++. This interactive platform is specially designed to take you on a fascinating journey into the world of coding, empowering you with fundamental C++ skills and setting you up for success in your programming pursuits. We firmly believe that learning is fun, and we've crafted each module on our platform to reflect this belief. Get ready to experience a blend of theory and hands-on practice that is sure to stimulate your intellect and kindle your passion for programming.</p>
                <ImageContainer >
                    <img src={professor} alt="professor" />
                </ImageContainer>
            </P>

            <P> 
                <ImageContainer >
                    <img src={challenge} alt="professor" />
                </ImageContainer>
                <p>The course is thoughtfully divided into lessons, quizzes, and challenges - each component playing a crucial role in your learning journey. The lessons are designed to give you a robust theoretical foundation. They'll guide you through the basics, acquaint you with key C++ concepts, and provide you with ample examples. We recommend starting with these lessons to familiarize yourself with new concepts before diving into practical implementation. Each lesson is followed by a quiz, designed to reinforce and test your understanding. The quizzes help solidify your learning by challenging your recall and application of the lessons. Don't worry if you don't score perfectly on your first try, learning is a process and every attempt brings you closer to mastery.</p>

            </P>

            <P>
                <p>Now, for those who crave an extra level of engagement and want to test their newly acquired skills, we have challenges that are sure to pique your interest! These challenges offer hands-on experience in problem-solving and bring you face-to-face with real-life scenarios where you can apply your learning. While you're free to explore the platform in any order, we recommend completing the lessons, acing the quizzes with flying colors (aim for close to 100%!), and then taking on the challenges. This learning pathway will ensure a comprehensive grasp of the basics of C++.</p>
                <ImageContainer >
                    <img src={code} alt="professor" />
                </ImageContainer>

            </P>

            <button onClick={() => {navigate(`/lessonTutorial`)}}>Lesson Tutorial</button>
        </Container>
    )
}

export default SiteTutorial;

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
