import styled from 'styled-components';

export const Container = styled.ul`
  margin: 20px;
  padding: 0;

  .post-list-item {
    border: 1px solid black;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 10px 0;
    padding: 10px;
  }

  .post-list-item .icon-user {
    font-size: 50px;
  }

  .post-description {
    margin-left: 20px;
  }
`;
