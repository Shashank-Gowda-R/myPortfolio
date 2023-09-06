import React from 'react'
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Documentation = styled.img`
display:none;
height: 70px;
width: fit-content;
background-color: #000;
border-radius: 10px;
&:hover{
    cursor: pointer;
    opacity: 0.8;
}
`;

const Body = styled.div`
width: 100%;
display: flex;
flex-direction: column; 
`;

const Role = styled.div`
font-size: 18px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary + 99};
@media only screen and (max-width: 768px){
    font-size: 14px;
}
`;

const Top = styled.div`
width: 100%;
display: flex;
gap: 12px
`;

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const Card = styled.div`
width: 650px;
border-radius: 10px;   
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
padding: 12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;
border: 0.1px solid #306EE8;
box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
&:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    }
@media only screen and (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
    }
&:hover ${Documentation}{
    display: flex;
}
&:hover ${Span}{
    overflow: visible;
    -webkit-line-clamp: unset;
}
`;

const Logo = styled.img`
height: 50px;
background-color: #000;
border-radius: 10px;
margin-top: 4px;
@media only screen and (max-width: 768px){
    height: 40px;
}
`;

const Company = styled.div`
font-size: 14px;
font-weight: 500;
color: ${({ theme }) => theme.text_secondary + 99};
@media only screen and (max-width: 768px){
    font-size: 12px;
}
`;

const Duration = styled.div`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 80};
@media only screen and (max-width: 768px){
    font-size: 10px;
}
`;

const Description = styled.div`
width: 100%;
font-size: 15px;
font-weight: 400;
text-align:justify;
color: ${({ theme }) => theme.text_primary + 99};
margin-bottom: 10px;
@media only screen and (max-width: 768px){
    font-size: 12px;
}
`;

const Skills = styled.div`
width: 100%;
display: flex;
gap: 12px;
margin-top: 10px;
`;

const ItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`;

const Skill = styled.div`
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
@media only screen and (max-width: 768px){
    font-size: 12px;
}
`;

const InternCard = ({ intern }) => {
    return (
        <Card>
            <Helmet>
                <title>Shashank Gowda R - Portfolio</title>
                <title>Shashank Gowda R - Internships</title>
                <title>{intern.role} - Shashank Gowda R</title>
                <meta name="author" content="Shashank Gowda R" />
                <meta name="description" content={`Intern as ${intern.role} at ${intern.company}. Duration: ${intern.date}.`} />
            </Helmet>
            <Top>
                <Logo src={intern.img} />
                <Body>
                    <Role>{intern.role}</Role>
                    <Company> {intern.company} </Company>
                    <Duration> {intern.date} </Duration>
                </Body>
            </Top>
            <Description>
                {intern?.desc &&
                    <Span>{intern?.desc}</Span>
                }
                {intern?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>{
                                intern.skills.map((skill) => (
                                    <Skill>• {skill}</Skill>
                                ))
                            }</ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {intern.doc &&
                <a href={intern.doc} target='new'><Documentation src={intern.doc} />
                </a>
            }
        </Card>
    )
};


export default InternCard