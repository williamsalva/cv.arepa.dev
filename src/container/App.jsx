import React from 'react';
import { createGlobalStyle } from "styled-components";
import useGetData from '../hooks/useGetData';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Loader from '../components/Loader';
import data from '../data';


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
  return data.length === 0 ? <><GlobalStyle /><Loader /></> : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
          tel={data.tel}
          email={data.email}
        />
      </Sidebar>
      <Info>
        <Education data={data.education} />
        <Experience data={data.experience} />
        
        <Skills data={data.skills} />
      </Info>
    </Main>
  )
};

export default App;