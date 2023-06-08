import styled, { keyframes} from 'styled-components';

const Header = () => {
    return (
        <Title>
            <StyledLink href="/">
                <H1>Learn C++</H1>
            </StyledLink>
        </Title>
    )
}

export default Header;

const Title = styled.div`
    width: 100%;
    height: 2rem;
    background-color: var(--teal);
    border-bottom: 2px solid var(--purple);
    @media (min-height: 800px) {
          /* font-size: 2rem; */
          /* padding: 1rem; */
          /* margin-bottom: 10rem; */
          height:3.5rem;
        }
`;



const StyledLink = styled.a`
    text-decoration: none;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
`;


const H1 = styled.h1`
    text-align: center;
    color: var(--blue);
    padding-top: .225rem;
    opacity: 0;
    position: relative;
    animation: ${fadeIn} 3s ease-in-out forwards, ${slideDown} 2s ease-in-out forwards;
    background-color: var(--teal);
    @media (min-height: 800px) {
          font-size: 2rem;
          /* padding: 1rem; */
          /* margin-bottom: 10rem; */
          /* height:4rem; */
        }
`;
