import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const BlogTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
  color: #2c4724;
`;

const BlogCard = styled.div`
  background-color: #4a4a4a;
  padding: 20px;
  margin-bottom: 20px;
`;

const BlogDate = styled.p`
  color: #8c8c94;
  font-size: 0.8em;
  margin-bottom: 10px;
`;

const BlogContent = styled.div`
  line-height: 1.5;
  color: #fff;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Blog = ({ blogs }) => {
  const location = useLocation();

  return (
    <BlogContainer>
      <BlogTitle>Mi Blog</BlogTitle>
      {blogs.map((blog, index) => {
        const queryParams = new URLSearchParams();
        queryParams.set('title', blog.title);
        queryParams.set('date', blog.date);
        queryParams.set('content', blog.content);
        const queryString = queryParams.toString();

        return (
          <StyledLink key={index} to={{ pathname: `/blog/${index}`, search: `?${queryString}` }}>
            <BlogCard>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDate>{blog.date}</BlogDate>
              <BlogContent>{blog.content}</BlogContent>
            </BlogCard>
          </StyledLink>
        );
      })}
    </BlogContainer>
  );
};

export default Blog;
