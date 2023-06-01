import { useNavigate } from "react-router-dom"

const QuizTutorial = () => {
    const navigate = useNavigate();

    return (
        <>
            <p> At "Learn C++," we don't just stop at lessons. To make sure you've fully grasped the concepts, each lesson is followed by a quiz. These aren't your ordinary quizzes, though. They're designed to be straightforward, acting as a touchstone to verify your understanding. Each question in the quiz is drawn directly from the lesson slides, ensuring a direct correlation between the materials you've studied and the questions you're asked.</p>

            <p> The quiz questions come in two formats - multiple choice and true/false. This variety keeps the quiz engaging while testing your comprehension from different angles. If you've been diligent with your notes during the lessons, you'll find the quiz answers come naturally. However, don't worry if you stumble on some questions. The objective here isn't perfection, but learning and growth.</p>

            <p> While it's not mandatory to ace the quiz before proceeding, we highly recommend that you aim for a near-perfect score. This not only confirms your mastery of the material but also sets you up for success in the subsequent challenges. Your best score for each quiz is displayed on your homepage, providing a quick overview of your progress.</p>

            <p> One unique feature of our quizzes is that we don't disclose the correct answers for the questions you missed. This might sound tough, but it's a conscious choice designed to encourage independent learning. If you miss a question, make a note of the relevant lesson slide to review. This way, you are not just handed the answer, but you revisit the lesson, fortifying your understanding. So get ready to put on your thinking caps and show us what you've got! We're excited to join you on this path to mastering C++.</p>

            <button onClick={() => {navigate(`/challengeTutorial`)}}>Challenge Tutorial</button>
        </>
        )
}

export default QuizTutorial;