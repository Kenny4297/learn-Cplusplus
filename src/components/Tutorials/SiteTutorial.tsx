import { useNavigate } from 'react-router-dom';

const SiteTutorial = () => {
    const navigate = useNavigate();
    return (
        <>
            <p> Welcome to "Learn C++," your friendly and engaging destination for grasping the essentials of the widely-used programming language, C++. This interactive platform is specially designed to take you on a fascinating journey into the world of coding, empowering you with fundamental C++ skills and setting you up for success in your programming pursuits. We firmly believe that learning is fun, and we've crafted each module on our platform to reflect this belief. Get ready to experience a blend of theory and hands-on practice that is sure to stimulate your intellect and kindle your passion for programming.</p>

            <p> The course is thoughtfully divided into lessons, quizzes, and challenges - each component playing a crucial role in your learning journey. The lessons are designed to give you a robust theoretical foundation. They'll guide you through the basics, acquaint you with key C++ concepts, and provide you with ample examples. We recommend starting with these lessons to familiarize yourself with new concepts before diving into practical implementation. Each lesson is followed by a quiz, designed to reinforce and test your understanding. The quizzes help solidify your learning by challenging your recall and application of the lessons. Don't worry if you don't score perfectly on your first try, learning is a process and every attempt brings you closer to mastery.</p>

            <p >Now, for those who crave an extra level of engagement and want to test their newly acquired skills, we have challenges that are sure to pique your interest! These challenges offer hands-on experience in problem-solving and bring you face-to-face with real-life scenarios where you can apply your learning. While you're free to explore the platform in any order, we recommend completing the lessons, acing the quizzes with flying colors (aim for close to 100%!), and then taking on the challenges. This learning pathway will ensure a comprehensive grasp of the basics of C++.</p>

            <p>Remember, the key to learning is persistence and curiosity. Happy coding, and enjoy your learning journey with us at "Learn C++"!</p>

            <button onClick={() => {navigate(`/lessonTutorial`)}}>Lesson Tutorial</button>
        </>
    )
}

export default SiteTutorial;