import { useNavigate } from 'react-router-dom';

const ChallengeTutorial = () => {
    const navigate = useNavigate();

    return (
        <>
            <p> Now that we've breezed through the lessons and quizzes, it's time for the crux of the journey - the challenges. Here, you get to put everything you've learned into practice. In the realm of programming, without the practical application of the principles learned, the knowledge remains abstract. It's akin to learning the rules of soccer without ever stepping onto the pitch. That's why challenges are the heart of our "Learn C++" platform.</p>

            <p> Not every section will have a challenge, but when they do, they're an opportunity to dive headfirst into project creation, using the lessons you've mastered as your toolkit. You'll notice that the challenges increase in complexity as you advance, mirroring the incremental progression of a real-world programming project.</p>

            <p> To aid you in your quest, starter code is provided for each challenge, although as the difficulty ramps up, you'll find less scaffolding. Feel free to lean on Google or AI to guide you through the challenges – all's fair in coding and war, right? The essential part, however, is that you should understand every step you take, every line of code you write.</p>

            <p> Once a challenge is conquered, you'll find a solution waiting. We urge you to resist the temptation to peek at this until you've given the challenge your best shot or until you've exhausted your resources (like Google or AI) without finding an answer. The solution isn't just an answer; it's your guide to understanding the question better.</p>

            <p> After you've successfully navigated a challenge once, revisit it. Run through it again and again until you're fluent in it, not requiring the starter code anymore. In programming, knowing what to do and why it needs to be done that way is your true weapon.</p>

            <p> So, are you ready to embark on this captivating journey to learn C++, full of lessons, quizzes, and challenges that will sharpen your skills and deepen your understanding? It's time to grab the wheel and navigate through the mesmerizing terrain of programming. Let's dive in, learn, grow, and most importantly, let's have fun while at it! Ready, set, code!</p>

            <button onClick={() => {navigate(`/`)}}>Home</button>


            
        </>
    )
}

export default ChallengeTutorial;