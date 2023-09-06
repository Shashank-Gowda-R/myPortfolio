import React from 'react'
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const Button = styled.button`
display: none;
width: 100%;
padding: 10px;
background-color: ${({ theme }) => theme.white};
color: ${({ theme }) => theme.text_black};
font-size: 14px;
font-weight: 700;
border: none;
border-radius: 10px;
cursor: pointer;
transition: all 0.8s ease-in-out;
`;

const Card = styled.div`
width: 330px;
height: auto;
background-color: ${({ theme }) => theme.card};
cursor: pointer;
border-radius: 10px;
box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
overflow: hidden;
padding: 26px 20px;
display: flex;
flex-direction: column;
gap: 14px;
transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.1);
}
&:hover ${Button} {
    display: block;
}
`;

const Img = styled.img`
width: 100%;
height: 180px;
background-color: ${({ theme }) => theme.white};
border-radius: 10px;
box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0px;
padding: 0px 2px;
`;

const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${({ theme }) => theme.text_secondary};
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;

`;

const Date = styled.div`
font-size: 12px;
margin-left: 2px;
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 80};
@media only screen and (max-width: 768px){
    font-size: 10px;
}
`;

const Description = styled.div`
font-weight: 400;
color: ${({ theme }) => theme.text_secondary + 99};
overflow: hidden;
margin-top: 8px;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`;

const CertificateCard = ({ achievement }) => {
  // console.log(achievement);
  return (
    <Card>
      <Helmet>
        <title>Shashank Gowda R - Portfolio</title>
        <title>Shashank Gowda R - Certificates</title>
        <title>Shashank Gowda R - Achivements</title>
        <meta name="author" content="Shashank Gowda R" />
        <meta name="description" content="Achivements" />
        <meta name="description" content="Certificates" />
      </Helmet>
      <Img src={achievement.image} />
      <Details>
        <Title>{achievement.title}</Title>
        <Date>{achievement.date}</Date>
        <Description>{achievement.description}</Description>
      </Details>
    </Card>
  )
}

export default CertificateCard