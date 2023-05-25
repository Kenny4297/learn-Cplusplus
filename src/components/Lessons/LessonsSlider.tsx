import styled from 'styled-components';
import {IoIosQuote} from "react-icons/io";

//This is the lessonsSlider itself that will be passed into IntroToCPlusPlus

const LessonsSlider = (props) => {
    const {name, position, img, disc} = props.item;

    return (
        <Container>
            <Header>
                <span className="quote" aria-hidden="true"><IoIosQuote /></span>
            </Header>
            <Body>
                {disc}
            </Body>
            <Footer>
                <img src={img} alt={name} />
                <div className="details">
                    <h1>{name}</h1>
                    <p>{position}</p>
                </div>
            </Footer>
        </Container>
    );
};

export default LessonsSlider;

const Container = styled.div`
    /* background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%); */
    background: #191923;
    padding: 0.5rem 1rem 1rem 1rem;
    width: 90%;
    margin: 0 1rem;
`;
const Header = styled.div`
    .quote {
        font-size: 3rem;
        color: #0077b3;
        opacity: 0.7;
    }
    .stars {
        display: flex;
        justify-content: flex-end;
    }
    .star {
        color: #ffcd3c;
        font-size:1.3rem;
        display: flex;
        justify-content: flex-end;
    }
`;

const Body = styled.p`
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        width: 4rem;
        border-radius: 50px;
    }
    h1 {
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px) {
            font-size: 1rem;
        }
        @media(max-width: 538px) {
            font-size: 0.9rem;
        }
    }
    p {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px) {
            font-size: 0.6rem;
        }
    }
`
