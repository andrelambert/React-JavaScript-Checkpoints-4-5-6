import React from 'react'
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const ErrorPageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const ErrorPageText = styled.p`
  margin-bottom: 1em; 
`;

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <ErrorPageContainer>
        <ErrorPageTitle>Oh não!</ErrorPageTitle>
        <ErrorPageText>Não achamos o que você estava procurando </ErrorPageText>
      </ErrorPageContainer> 
    </div>
  )
}

export default ErrorPage