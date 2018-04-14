import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 1rem;
`;

const Header = styled.header`
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fafafa;
`;

const Logo = styled.h1`
    margin: 0;
`;

const Nav = styled.nav`
    display: flex;
`;

const NavLink = styled.a`
    & + & {
        margin-left: 1.5rem;
    }
`;

const Footer = styled.footer`
    background: #fafafa;
`;

const NavItem = ({ to, children }) =>
    <NavLink>
        <Link to={to}>
            {children}
        </Link>
    </NavLink>

export default ({ children }) => (
    <div>
        <Header>
            <Link to="/">
                <Logo>MySweetSite</Logo>
            </Link>
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/counter/">Counter</NavItem>
                <NavItem to="/page-2/">Page 2</NavItem>
            </Nav>
        </Header>
        <Container>
            {children()}
        </Container>
        <Footer>
            Hey
        </Footer>
    </div>
);