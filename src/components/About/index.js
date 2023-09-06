import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { Bio } from "../../data/constans";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

export const Title = styled.div`
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

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const AboutsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const AboutMe = styled.div`
  width: 90%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  text-align: justify;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 768px) {
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    padding: 10px 36px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const About = () => {
  return (
    <Container >
      <Wrapper>
        <Helmet>
          <title>Shashank Gowda R - Portfolio</title>
          <title>{Bio.name} - About Me</title>
          <meta name="author" content="Shashank Gowda R" />
          <meta name="description" content={Bio.aboutMe} />
        </Helmet>
        <Title>About Me</Title>
        <Desc>
          "Passionate frontend developer with a creative flair for crafting engaging web experiences."
        </Desc>
        <AboutsContainer>
          <AboutMe id="about" >
            {Bio.aboutMe}
          </AboutMe>
        </AboutsContainer>
      </Wrapper>
    </Container>
  )
}

export default About;