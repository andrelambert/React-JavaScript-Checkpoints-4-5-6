import React from 'react'
import styled from 'styled-components'

const BlogPageContainer = styled.div`
  text-align: center;
  max-width: 80%;
`;

const BlogPageTitle = styled.h2`
  color: #452c15;
  margin-bottom: 0.5em;
`;

const BlogPageText = styled.p`
  margin-bottom: 1em; 
`;

const BlogPage = () => {
  return (
    <div className="BlogPage">
      <BlogPageContainer>
        <BlogPageTitle>Blog</BlogPageTitle>
        <BlogPageText>Veja aqui nossos conteúdos sobre café</BlogPageText>
      </BlogPageContainer> 
    </div>
  )
}

export default BlogPage