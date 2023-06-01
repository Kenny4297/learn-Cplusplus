import styled from 'styled-components';

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
    border: 1px solid green;
`;

const H1 = styled.h1`
    text-align: center;
    color: var(--blue);
    padding-top: .225rem;
`;

const StyledLink = styled.a`
    text-decoration: none;
`;
