import React from 'react'
import styled from 'styled-components'

const ContatoPageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const ContatoPageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const ContatoPageText = styled.p`
  margin-bottom: 1em; 
`;

const ContatoPage = () => {
  return (
    <div className="ContatoPage">
      <ContatoPageContainer>
        <ContatoPageTitle>Contato</ContatoPageTitle>
        <ContatoPageText>Dúvidas, críticas ou sugestões? Fale conosco!</ContatoPageText>
      </ContatoPageContainer> 
    </div>
  )
}

export default ContatoPage