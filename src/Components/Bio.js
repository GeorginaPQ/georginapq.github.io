import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Darker Grotesque';
    color: #E9ECEF;
`
const SubTitle = styled.p`
    font-family: 'Darker Grotesque';
    color: #E9ECEF;
    font-size: 30px;
`


const Bio = () => {
    
    return (
        <div className="text-center">                                 
                <Title className="display-4" >Hi! My name is Georgina Pérez</Title>
                <div>
                    <SubTitle className="font-weight-normal mb-0">I am Front-End Developer and I am passionate</SubTitle>
                    <SubTitle className="font-weight-normal">about technology and science.</SubTitle>
                </div>
            </div>   
    );
}
export default Bio;