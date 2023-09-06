import React, { useState } from 'react';
import styled from 'styled-components';
import Projectscard from '../Cards/Projectscard';
import { projects } from '../../data/constans';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top:10px;
clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding:10px 0px 100px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};
@media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled.div`
font-size: 18px;
text-align: center;
max-width: 600px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
display: flex;
border: 1.5px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
font-size: 16px;
border-radius: 12px;
font-weight: 500;
margin: 22px 0px;
@media (max-width: 768px) {
    font-size: 12px;
}
`;

const ToggleButtons = styled.div`
padding: 8px 18px;
border-radius: 6px;
cursor: pointer;
${({ active, theme }) => active && `
    background-color: ${theme.primary + 20}; `
  }
&:hover {
  background: ${({ theme }) => theme.primary + 8};
}
@media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
}
`;

const Divider = styled.div`
width: 1.5px;
background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;
`;



const Project = ({ openModal, setOpenModal }) => {

  const [toggle, setToggle] = useState('all');

  return (
    <Container >
      <Helmet>
        <title>Shashank Gowda R - Portfolio</title>
        <title>Shashank Gowda R - Project</title>
        <meta name="author" content="Shashank Gowda R" />
        <meta name="description" content="project" />
      </Helmet>
      <Wrapper>
        <Title id="projects">Projects</Title>
        <Description>
          "Explore a collection of my diverse projects showcasing my passion for innovation,
          creativity, and problem-solving in the world of software development."
        </Description>
        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButtons active value="all" onClick={() => setToggle('all')} >ALL</ToggleButtons>
          ) : (
            <ToggleButtons value="all" onClick={() => setToggle('all')} >ALL</ToggleButtons>
          )}
          <Divider />
          {toggle === 'webapp' ? (
            <ToggleButtons active onClick={() => setToggle('webapp')} >WEB APP</ToggleButtons>
          ) : (
            <ToggleButtons onClick={() => setToggle('webapp')} >WEB APP</ToggleButtons>
          )}
          <Divider />
          {toggle === 'androidapp' ? (
            <ToggleButtons active onClick={() => setToggle('androidapp')} >ANDROID APP</ToggleButtons>
          ) : (
            <ToggleButtons onClick={() => setToggle('androidapp')} >ANDROID APP</ToggleButtons>
          )}
        </ToggleGroup>
        <CardContainer>
          {toggle === "all" && projects.map((project) => (
            <Projectscard project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
          {projects.filter((item) => item.category === toggle).map((project) => (
            <Projectscard project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Project;