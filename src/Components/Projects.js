import React from 'react';
import { FaGithub } from "react-icons/fa";
import Cipher from '../Img/cipher1.png';
import Labnotes from '../Img/labnotes.png';
import Movies from '../Img/movies.png'
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
    background: #F6F8FA;
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
    background-color: #7D69E6;
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
    color: #7D69E6;
    background-color: white;
    border-radius: 0.3rem;
    box-shadow: 0 3px 20px -5px rgba(0, 0, 0, 0.3);
    transition: color 0.6s, box-shadow 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 2px 32px 62px -32px rgba(15,20,20,1);
        transform: translateY(-15px);
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const Projects = () => {
    return (
            <>
            <Project className=" p-sm-4 p-lg-5 mb-5 container align-items-center flex-column flex-md-row">
                <div className="col col-sm-6 pl-2">
                    <Img className="w-100" src={Movies}></Img>
                </div>
                <div className="w-100">
                    <div  className="text-right mr-2 font-weight-bold">
                        <span>Mayo 2020</span>
                    </div>
                    <h1 className="display-6">Movie Challenge</h1>
                    <p>A Web site that fetch data from an API (OMDB)
                        and renders, using React.
                    </p>
                    <div>
                        <span className="font-weight-bold">Credits:</span>
                        <span>Developed with Eugenia Najar, Mirey Morales, Karen Ramirez and Teresa Carbajal</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Role:</span>
                        <span>Front-End Developer</span>
                    </div>
                    
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
                        <Tags>React</Tags>
                        <Tags>Bootstrap</Tags>
                    </div>
                    <div className="pt-3 d-flex justify-content-center align-items-center">
                        <Button className="text-decoration-none" 
                            target="_blank" 
                            href="https://github.com/GeorginaPQ/GDL004-movie-challenge"
                            ><FaGithub className="m-1"/>Github</Button>
                        <Button2 className="text-decoration-none" 
                            target="_blank" 
                            href="https://movie-challenge-9f174.web.app/"
                            >Demo</Button2>
                    </div>
                </div>
            </Project>
            <Project className="p-3 p-sm-4 p-lg-5 mb-5 container align-items-center flex-column flex-md-row">
                <div className="col col-sm-6 pl-2">
                    <Img className="w-100" src={Labnotes}></Img>
                </div>
                <div className="w-100">
                    <div  className="text-right mr-2 font-weight-bold">
                        <span>Mayo 2020</span>
                    </div>
                    <h1 className="display-6">Lab Notes</h1>
                    <p>An aplication that create, read, update 
                        and delete notes using React, Firebase and Styled.                        
                    </p>
                    <div>
                        <span className="font-weight-bold">Credits:</span>
                        <span>Georgina Pérez</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Role:</span>
                        <span>Front-End Developer/ UI designer</span>
                    </div>
                    
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
                        <Tags>React</Tags>
                        <Tags>CSS3</Tags>
                        <Tags>Firebase</Tags>
                    </div>
                    <div className="pt-3 d-flex justify-content-center align-items-center">
                        <Button className="text-decoration-none" 
                            target="_blank" 
                            href="https://github.com/GeorginaPQ/GDL004-social-network"
                            ><FaGithub className="m-1"/>Github</Button>
                        <Button2 className="text-decoration-none" 
                            target="_blank" 
                            href="https://github.com/GeorginaPQ/GDL004-social-network"
                            >Demo</Button2>
                    </div>
                </div>
            </Project>
            <Project className="p-3 p-sm-4 p-lg-5 container align-items-center flex-column flex-md-row">
                <div className="col col-sm-6 pl-2">
                    <Img className="w-100" src={SocialNetwork}></Img>
                </div>
                <div className="w-100">
                    <div  className="text-right mr-2 font-weight-bold">
                        <span>Enero 2020</span>
                    </div>
                    <h1 className="display-6">Red Social: Our Pets</h1>
                    <p>Responsive Single-Page Application (SPA) where we can write,
                        read, update and delete data using Vanilla Javascript, 
                        Model View Controler, dynamic HTML and CSS/Grid.
                    Role: Front-End Developer/ UI designer
                    </p>
                    <div>
                        <span className="font-weight-bold">Credits:</span>
                        <span>Developed with Laura Barragán and Mónica Jiménez</span>
                    </div>
                    <div>
                        <span className="font-weight-bold">Role:</span>
                        <span>Front-End Developer/ UI designer</span>
                    </div>
                    
                    <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
                        <Tags>Javascript</Tags>
                        <Tags>MVC</Tags>
                        <Tags>SPA</Tags>
                        <Tags>Html</Tags>
                        <Tags>CSS3</Tags>
                    </div>
                    <div className="pt-3 d-flex justify-content-center align-items-center">
                        <Button className="text-decoration-none" 
                            target="_blank" 
                            href="https://github.com/GeorginaPQ/GDL004-social-network"
                            ><FaGithub className="m-1"/>Github</Button>
                        <Button2 className="text-decoration-none" 
                            target="_blank" 
                            href="https://github.com/GeorginaPQ/GDL004-social-network"
                            >Demo</Button2>
                    </div>
                </div>
            </Project>
            </>
    )
}
export default Projects;