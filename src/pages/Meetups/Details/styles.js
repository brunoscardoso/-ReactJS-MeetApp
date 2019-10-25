import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.article`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    strong {
      font-size: 2.28em;
      font-weight: bold;
      color: #fff;
    }

    div {
      display: flex;
      align-items: center;
    }
  }

  img {
    width: 100%;
    max-width: 800px;
    height: 300px;
    border-radius: 4px;
  }

  p {
    font-size: 1.28em;
    line-height: 2.28em;
    margin-top: 15px;
    color: #fff;
  }

  aside {
    display: flex;
    justify-items: center;
    margin-top: 10px;
    font-size: 1.12em;
    opacity: 0.6;
    time,
    svg {
      margin-right: 3px;
    }
    span {
      color: #d8d8d8;
      padding: 10px;
    }
  }
`;

export const EditButton = styled.button`
  display: flex;
  padding-left: 10px;
  padding-right: 15px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 120px;
  background: #4dbaf9;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#4dbaf9')};
  }

  svg {
    margin-right: 7px;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  height: 40px;
  width: 120px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f94d6a')};
  }

  svg {
    margin-right: 7px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  height: 40px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#f94d6a')};
  }

  svg {
    margin-right: 7px;
  }
`;
