import React from 'react'
import styled from "styled-components";

const HomePageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const HomePageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const HomePageText = styled.p`
  margin-bottom: 1em; 
`;

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomePageContainer>
        <HomePageTitle>Home</HomePageTitle>
        <HomePageText>Seja bem-vindo!</HomePageText>
      </HomePageContainer> 
    </div>
  )
}

export default HomePage