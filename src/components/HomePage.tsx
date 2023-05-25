import { useContext, useEffect } from'react';
import { UserContext } from '../App';

const HomePage =() => {
    const { username } = useContext(UserContext);

    useEffect(() => {
        console.log(`Username is ${username}`)
    }, [username]);

    return (
        <>
            <p>This is the home page</p>
            {console.log(username)}
            <p>The user logged in is: {username}</p>

            <p>List of the lessons below. We will start working on the first lesson</p>
        </>
    )
}

export default HomePage;