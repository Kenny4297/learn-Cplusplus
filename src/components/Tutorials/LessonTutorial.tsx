import { useNavigate } from 'react-router-dom'

const LessonTutorial = () => {
    const navigate = useNavigate();
    return (
        <>
            <p> We believe in the power of context when it comes to learning new skills, especially with programming languages. Traditional teaching methods often focus on isolated skills without providing a clear picture of where and why to apply them. This can lead to confusion and dwindling interest. But we've flipped the script here. Instead of leaving you to connect the dots, we work backward from a prospective project, learning the requisite skills and techniques needed to bring it to life.</p>

            <p> Our lessons are carefully structured to ensure an organic learning experience. Each slide discusses a new line of code from an upcoming project. But rather than just giving you the code, we dig deep into the 'why' and 'how.' We elaborate on why it is being used in that specific context and discuss any essential data associated with it. This approach not only helps you understand the functionality of the code but also enables you to make informed decisions when you eventually start coding your own projects.</p>
            
            <p> We recommend taking detailed notes as you progress through the lessons. The act of note-taking can reinforce memory and understanding, creating stronger neural connections in your brain. These notes will serve as invaluable study aids, assisting you with upcoming quizzes and bolstering your comprehension of the material. A sound understanding of the lessons will enable you to breeze through the quizzes and approach the projects with confidence. Remember, your learning process doesn't have to be linear. You are free to revisit any lesson at any time to refresh your understanding or satisfy your curiosity.</p>
            
            <p> Our platform aims to offer an enriching and immersive learning experience. By the end of your journey with us, you'll not only have a solid grasp of C++, but you'll also have practical experience applying these new skills. You'll be a problem-solver, a creator, and most importantly, a proficient C++ programmer.</p>

            <button onClick={() => {navigate(`/quizTutorial`)}}>Quiz Tutorial</button>
        </>
    )
}

export default LessonTutorial;