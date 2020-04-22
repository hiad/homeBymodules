import React from 'react'
import styled from 'styled-components';
import logo from './Logo.png';
import logo1 from './Path_1.png';
import logo2 from './Path_2.png';
import logo3 from './Path_1319.png';




const Container = styled.nav`
      max-width: 100%;
      margin: 0 auto;
`;



const Nav = styled.nav`
      display: flex;
      flex-direction: row;
      align-items: center;
      max-width: 1440px;
      margin: 0 auto;
`;

const Ul = styled.ul`
      flex: 1;
      display: flex;
      flex-direction: row;
      list-style-type:none;
      padding:0px;
      margin:0px;
`;

const IconsWrapper = styled.div`
      margin-left: 1rem;
`;

const Icon = styled.img`
      margin-left: 20px;
`;

const Li = styled.li`
      display: flex;
      flex-direction: row;
      list-style-type:none;
      padding: 40px 15px;
`;

const Image = styled.img`
      margin-right: 50px;
`;

const A = styled.a`
      color: #000000;
      font-family: "Open Sans";
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
`;

const Menu = ({ className }) => {
      return (
            <Container>
                  <Nav className={className}>
                        <Image src={logo}></Image>
                        <Ul>
                              <Li>
                                    <A href="#">WINE</A>
                              </Li>
                              <Li>
                                    <A href="#">BEER</A>
                              </Li>
                              <Li>
                                    <A href="#">SPIRITS</A>
                              </Li>
                              <Li>
                                    <A href="#">ACCESORIES</A>
                              </Li>
                              <Li>
                                    <A href="#">CREATE A GIFT SET</A>
                              </Li>
                              <Li>
                                    <A href="#">SHOP BY COLOR</A>
                              </Li>
                        </Ul>
                        <IconsWrapper>
                              <Icon src={logo1} />
                              <Icon src={logo2} />
                              <Icon src={logo3} />
                        </IconsWrapper>
                  </Nav>
            </Container>
      )
};

export default Menu;