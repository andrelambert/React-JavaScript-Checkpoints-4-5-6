import React from 'react'
import styled from "styled-components";

const FaqPageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const FaqPageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const FaqPageText = styled.p`
  margin-bottom: 1em; 
`;

const FaqPage = () => {
  return (
    <div className="FaqPage">
      <FaqPageContainer>
        <FaqPageTitle>FAQ</FaqPageTitle>
        <FaqPageText>Perguntas e respostas</FaqPageText>
      </FaqPageContainer> 
    </div>
  )
}

export default FaqPage