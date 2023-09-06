import React from 'react'
import styled from 'styled-components';
import CertificateCard from '../Cards/CertificateCard';
import { achievement } from '../../data/constans';
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
margin-bottom: 15px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;
`;


const Certificate = () => {
    return (
        <Container >
            <Helmet>
                <title>Shashank Gowda R - Portfolio</title>
                <title>Shashank Gowda R - Certificates</title>
                <title>Shashank Gowda R - Achivements</title>
                <meta name="author" content="Shashank Gowda R" />
                <meta name="description" content="Achivements" />
                <meta name="description" content="Certificates" />
            </Helmet>
            <Wrapper>
                <Title>Certificates</Title>
                <Description>
                    "My Journey's Notable Achievements and Certifications"
                </Description>
                <CardContainer>
                    {achievement.map((achivement) => (
                        <CertificateCard key={achivement.id} achievement={achivement} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Certificate