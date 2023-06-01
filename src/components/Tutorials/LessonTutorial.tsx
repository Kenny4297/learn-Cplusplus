import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LessonTutorial = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Lesson Tutorial</h1>

            <p> We believe in the power of context when it comes to learning new skills, especially with programming languages. Traditional teaching methods often focus on isolated skills without providing a clear picture of where and why to apply them. This can lead to confusion and dwindling interest. But we've flipped the script here. Instead of leaving you to connect the dots, we work backward from a prospective project, learning the requisite skills and techniques needed to bring it to life.</p>

            <p> Our lessons are carefully structured to ensure an organic learning experience. Each slide discusses a new line of code from an upcoming project. But rather than just giving you the code, we dig deep into the 'why' and 'how.' We elaborate on why it is being used in that specific context and discuss any essential data associated with it. This approach not only helps you understand the functionality of the code but also enables you to make informed decisions when you eventually start coding your own projects.</p>
            
            <p> We recommend taking detailed notes as you progress through the lessons. The act of note-taking can reinforce memory and understanding, creating stronger neural connections in your brain. These notes will serve as invaluable study aids, assisting you with upcoming quizzes and bolstering your comprehension of the material. A sound understanding of the lessons will enable you to breeze through the quizzes and approach the projects with confidence. Remember, your learning process doesn't have to be linear. You are free to revisit any lesson at any time to refresh your understanding or satisfy your curiosity.</p>
            
            <p> Our platform aims to offer an enriching and immersive learning experience. By the end of your journey with us, you'll not only have a solid grasp of C++, but you'll also have practical experience applying these new skills. You'll be a problem-solver, a creator, and most importantly, a proficient C++ programmer.</p>

            <button onClick={() => {navigate(`/quizTutorial`)}}>Quiz Tutorial</button>
        </Container>
    )
}

export default LessonTutorial;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    color: var(--gray);
    height: 110vh;
    background-color: var(--lightBackground);
    p {
        /* color: var(--gray); */
        width: 80%;
        margin: 1rem auto;
        line-height:1.5rem;
    }
    h1 {
        text-align: center;
        font-size: 1.5rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
    }
    button {
        background-color: var(--blue);
        display: block;
        border: none;
        border-radius: 2px;
        margin: 0 auto;
        padding: .3rem;
    }
`;