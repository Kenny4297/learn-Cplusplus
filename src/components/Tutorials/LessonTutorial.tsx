import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import onlineLearning from '../../components/Assets/Images/icons8-online-learning-100.png'
import chalkboard from '../../components/Assets/Images/icons8-classroom-100.png'
import notes from '../../components/Assets/Images/icons8-notes-100.png'
import programmer from '../../components/Assets/Images/icons8-programmer-64.png'

const LessonTutorial = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h1 data-testid="lesson-title">Lesson Tutorial</h1>
            <P>
                <p data-testid="p1"> We believe in the power of context when it comes to learning new skills, especially with programming languages. Traditional teaching methods often focus on isolated skills without providing a clear picture of where and why to apply them. This can lead to confusion and dwindling interest. But we've flipped the script here. Instead of leaving you to connect the dots, we work backward from a prospective project, learning the requisite skills and techniques needed to bring it to life.</p>

                <ImageContainer >
                    <img src={onlineLearning} alt="PC learning" />
                </ImageContainer>
            </P>


            <P>
                <ImageContainer >
                    <img src={chalkboard} alt="chalkboard" />
                </ImageContainer>
                <p data-testid="p2"> Our lessons are carefully structured to ensure an organic learning experience. Each slide discusses a new line of code from an upcoming project. But rather than just giving you the code, we dig deep into the 'why' and 'how.' We elaborate on why it is being used in that specific context and discuss any essential data associated with it. This approach not only helps you understand the functionality of the code but also enables you to make informed decisions when you eventually start coding your own projects.</p>
            </P>
            
            <P>
                <p data-testid="p3"> We recommend taking detailed notes as you progress through the lessons. The act of note-taking can reinforce memory and understanding, creating stronger neural connections in your brain. These notes will serve as invaluable study aids, assisting you with upcoming quizzes and bolstering your comprehension of the material. A sound understanding of the lessons will enable you to breeze through the quizzes and approach the projects with confidence. Remember, your learning process doesn't have to be linear. You are free to revisit any lesson at any time to refresh your understanding or satisfy your curiosity.</p>
                <ImageContainer >
                    <img src={notes} alt="professor" />
                </ImageContainer>
            </P>
            
            <P>
                <ImageContainer >
                    <img src={programmer} style={{height:'80%'}} alt="programmer" />
                </ImageContainer>
            <p data-testid="p4"> Our platform aims to offer an enriching and immersive learning experience. By the end of your journey with us, you'll not only have a solid grasp of C++, but you'll also have practical experience applying these new skills. You'll be a problem-solver, a creator, and most importantly, a proficient C++ programmer.</p>
            </P>

            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <button onClick={() => {navigate(`/quizTutorial`)}}>Quiz Tutorial</button>
            </div>

        </Container>
    )
}

export default LessonTutorial;

const Container = styled.div`
    padding-bottom: 1px;
    margin-bottom: 15rem;
    h1 {
        text-align: center;
        font-size: 1.5rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        color: var(--gray);
        @media (min-height: 800px) {
            font-size: 3rem;
        }
    }
    button {
        color: var(--gray);
        height:2.75rem;
        width: auto;
        background-color: var(--blue);
        padding:.2rem .5rem;
        margin:1rem 1rem 3rem 1rem;
        border-radius: 2px;
        border: none;
        &:hover {
            color: var(--purple);
            background-color: var(--teal);
            outline: 2px solid var(--purple);
            cursor: pointer;
        }
        @media (min-height: 800px) {
            font-size: 2rem;
            padding: 1rem;
            margin-bottom: 10rem;
            height:4rem;
        }
    }
`;

const P = styled.div`
    background-color: var(--lightBackground);
    width: 80%;
    display: flex;
    margin: auto;
    margin-bottom: 3rem;
    p {
        color: white;
        padding: 2rem 2rem;
        width: 100%;
        line-height: 1.5rem;
        @media (max-width: 650px) {
            width: 100%
        }
        @media (min-height: 800px) {
            font-size: 2rem;
            width: 80%;
            margin: 0 auto;
        }
    }
    img {
        width: 7.5rem;
        height: 7.5rem;
        @media (max-width: 650px) {
            display: none;
            /* border: 2px solid green; */
        }
        @media (min-height: 800px) {
            display: none;
        }
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem;
    @media (max-width: 650px) {
        display: none;
    }
    @media (min-height: 800px) {
        display: none;
    }
`