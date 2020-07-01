import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import logowhite from '../Img/logowhite.svg';

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width:767px) {
        justify-content:center;
    }
    `
const Links = styled.a`
    font-family: 'Cabin', sans-serif;
    font-size: 1rem;
    `
const Logo = styled.div`
    width: 200px;
    @media (max-width: 767px) {
        margin: 0 auto;
    }
    
`

const Nav = () => {
    
    return (
        <div>
            <Header>
                <Logo>
                    <img src={logowhite}></img>
                </Logo>                
                <ul className="d-flex p-0 m-0 mt-4">
                    <li className="">
                        <Links>
                            <Link 
                                activeClass="active"
                                to="projects" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light" 
                                >Projects
                            </Link>
                        </Links>
                    </li>
                    <li className="nav-item">
                        <Links>
                            <Link 
                                activeClass="active"
                                to="bio" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                            >About                       
                            </Link>
                        </Links>
                    </li>
                    <li className="nav-item">
                        <Links>
                            <Link 
                                activeClass="active"
                                to="social" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                                >Contact
                            </Link>
                        </Links>
                    </li>
                </ul>
            </Header>
        </div>
    )
}
export default Nav;