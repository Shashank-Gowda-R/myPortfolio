import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from "../../data/constans"
import EducationCard from '../Cards/EducationCard';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
margin-top: 20px;
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

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 30px;
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

const TimeLineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
`;


const Education = () => {
  return (
    <Container>
      <Helmet>
        <title>Shashank Gowda R - Portfolio</title>
        <title>Shashank Gowda R - Education</title>
        <title>Shashank Gowda R - Designation</title>
        <meta name="author" content="Shashank Gowda R" />
        <meta name="description" content="Grade" />
        <meta name="Shashank" content="My Education Journey" />
      </Helmet>
      <Wrapper>
        <Title id='education'>Education</Title>
        <Description>"My Education Journey"</Description>
        <TimeLineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }} >
                  <EducationCard edu={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant='outlined' color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}

export default Education