import { ReactElement, useState, FormEvent, ChangeEvent, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from "../App";
import { useNavigate } from 'react-router-dom';

const IntroPage = ():ReactElement => {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserContext);
    const { username } = userData;

    const [formData, setFormData] = useState<{username: string}>({
        username: ''
    })

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();

        setUserData(prevState => ({ ...prevState, username: formData.username }));
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        setFormData((prevState) => ({...prevState, [name]: value}))
    }

    return (
        <>
            {!username ? (
                <NoUsername>
                    <p>Hi</p>
                    <p>Welcome to "Learn C++"!</p>
                    <p>What's your name?</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Username"
                        />
                        <button type="submit">Ok</button>
                    </form>
                </NoUsername>
            ) : (
                <Username>
                    <p>Hi {username}</p>

                    <p>---Explain what this site is</p>

                    <p>---Send to tutorial slides</p>

                    <button onClick={() => navigate('/Home')}>Go to Home Page</button>

                    
                </Username>
            )}
        </>
    )
}

export default IntroPage;

const NoUsername = styled.div``;

const Username = styled.div``;