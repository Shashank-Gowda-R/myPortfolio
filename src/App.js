import './App.css';
import Education from './components/Education';
import Hero from './components/HeroSection';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import { darkTheme } from './utils/Themes';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Achivements from './components/Achivements';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import ProjectDetails from "./components/ProjectDetails";
import { useState } from 'react';


const Body = styled.div`background-color:${({ theme }) => theme.bg};
width:100%;
height:100%;
overflow-x:hidden;`;

const Wrapper = styled.div`background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <NavBar />
        <Body>
          <Hero />
          <Wrapper>
            <About />
            <Skills />
            <Achivements />
          </Wrapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Certificate />
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
