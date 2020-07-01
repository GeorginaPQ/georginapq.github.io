import React from 'react';
import Nav from './Components/Nav';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import Social from './Components/Social';
import styled from 'styled-components';
import bgImage from './Img/celebration.png';

const Bg = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${bgImage});
  `
const Bg2 = styled.div`
  background-color: #1e1e1e;
  width: 93%;
  margin: 3rem auto;
  border-radius: 0.5rem;
  box-shadow: 10px 15px 32px -1px rgba(4,6,8,1);
  `

function App() {
  return (
    <div className="App"> 
        <Bg>
          <Bg2>
            <Nav />            
            <Bio />
            <Projects />
            <Social />           
          </Bg2>
        </Bg> 
    </div>
  );
}

export default App;
