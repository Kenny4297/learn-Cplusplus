import { useContext } from'react';
import { UserContext } from '../App';

const HomePage =() => {
    const { username } = useContext(UserContext);
    return (
        <>
            <p>This is the home page</p>
            <p>{username}</p>
        </>
    )
}

export default HomePage;