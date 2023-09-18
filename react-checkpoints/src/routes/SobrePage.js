import React from 'react'
import styled from "styled-components";

const SobrePageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const SobrePageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const SobrePageText = styled.p`
  margin-bottom: 1em; 
`;

const SobrePage = () => {
  return (
    <div className="SobrePage">
      <SobrePageContainer>
        <SobrePageTitle>Sobre</SobrePageTitle>
        <SobrePageText>Conheça mais sobre nosso projeto</SobrePageText>
      </SobrePageContainer> 
    </div>
  )
}

export default SobrePage