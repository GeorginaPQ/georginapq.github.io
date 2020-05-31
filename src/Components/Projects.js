import React from 'react';
import { FaGithub } from "react-icons/fa";
import Cipher from '../Img/cipher1.png';
import Labnotes from '../Img/labnotes.png';
import SocialNetwork from '../Img/SocialNetwork.png';
import styled from 'styled-components';

const Project = styled.div`
    width:100%;
    font-family: 'Darker Grotesque'; 
    background-color: #E9ECEF;
    display: flex;
    justify-content: center;
    aling-items: center;
    flex-wrap:nowrap;
    box-shadow: -2px 29px 78px -32px rgba(244,247,247,0.71);
`
const Img = styled.img`
    box-shadow: 2px 32px 62px -32px rgba(15,20,20,1);
    transition: color 0.6s, box-shadow 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 0 3px 20px -5px rgba(0, 0, 0, 0.3);
        transform: translateY(-15px);
        color: #6f6f6f;
    }
`
const Tags = styled.div`
    width: 30%;
    display: flex;
    justify-content:center;
    padding: 7px;
    margin: 8px;
    border: 1px solid #08BFA9;
    border-radius: 0.3rem;
    &:hover {
        background-color: #08BFA9;
        color: white;
        transition: 0.5s;
    }
`
const  Button = styled.a`
    width: 30%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 7px;
    margin: 13px;
    color: white;
    background-color: #08BFA9;
    border-radius: 0.3rem;
    box-shadow: 0 3px 20px -5px rgba(0, 0, 0, 0.3);
    transition: color 0.6s, box-shadow 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 2px 32px 62px -32px rgba(15,20,20,1);
        transform: translateY(-15px);
        color: white;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`
const  Button2 = styled.a`
    width: 30%;
    display: flex;
    justify-content:center;
    padding: 7px;
    margin: 13px;
    color: black;
    background-color: white;
    border-radius: 0.3rem;
    box-shadow: 0 3px 20px -5px rgba(0, 0, 0, 0.3);
    transition: color 0.6s, box-shadow 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 2px 32px 62px -32px rgba(15,20,20,1);
        transform: translateY(-15px);
        color: #6f6f6f;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const Projects = () => {
    return (
            <Project className="p-3 p-sm-4 p-lg-5 container align-items-center flex-column flex-md-row">
                <div className="col col-sm-6 pl-2">
                    <Img className="w-100" src={SocialNetwork}></Img>
                </div>
                <div className="w-100">
                    <div  className="text-right mr-2">
                        <span><b>Enero 2020</b></span>
                    </div>
                    <h1 className="display-6">Red Social: Our Pets</h1>
                    <p>Hoy en día nuestras mascotas suelen ser de
                    diferentes especies y con cuidados muy complejos, por ello esta WebApp 
                    que es una red social permite conectar personas para compartir 
                    sus experiencias de cuidado e inquietudes.
                    </p>
                    {/* <div>Javascript | Html5 | CSS3 | MVC | SPA</div> */}
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
                        <Tags>Javascript</Tags>
                        <Tags>MVC</Tags>
                        <Tags>SPA</Tags>
                        <Tags>Html</Tags>
                        <Tags>CSS3</Tags>
                    </div>
                    <div className="pt-3 d-flex justify-content-center align-items-center">
                        <Button className="text-decoration-none" target="_blank" href="https://github.com/GeorginaPQ/GDL004-social-network"><FaGithub className="m-1"/>Github</Button>
                        <Button2 className="text-decoration-none" target="_blank" href="https://github.com/GeorginaPQ/GDL004-social-network">Demo</Button2>
                    </div>
                    {/* <a variant="outline-info">Javascript</a>
                    <a href="#">Red more</a>
                    <a href="#">Red more</a> */}
                </div>
            </Project>
    )
}
export default Projects;