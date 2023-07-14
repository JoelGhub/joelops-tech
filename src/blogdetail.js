import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const BlogTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c4724;
`;

const BlogDate = styled.p`
  color: #8c8c94;
  font-size: 0.8em;
  margin-bottom: 10px;
`;

const BlogContent = styled.div`
  line-height: 1.5;
  color: #4a4a4a;
`;

const BlogDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get('title');
  const date = searchParams.get('date');
  const content = searchParams.get('content');

  return (
    <BlogDetailContainer>
      <BlogTitle>{title}</BlogTitle>
      <BlogDate>{date}</BlogDate>
      <BlogContent>{content}</BlogContent>
    </BlogDetailContainer>
  );
};

export default BlogDetail;
