import styled from "@emotion/styled";
import React from 'react'
import Tag from './Tag'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagList = () => {
  return (
    <TagContainer>
      <Tag color="#FFF2C2" fontColor="#EBB800">
        Website
      </Tag>
      <Tag color="#D9FAD9" fontColor="#80C480">
        UX
      </Tag>
      <Tag color="#FFEDED" fontColor="#F56C6C">
        UI
      </Tag>
      <Tag color="#EAE5FF" fontColor="#7B61FF">
        Wireframe
      </Tag>
    </TagContainer>
  );
};

export default TagList