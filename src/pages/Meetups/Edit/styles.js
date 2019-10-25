import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 1px auto;

  form {
    display: flex;
    flex-direction: column;
    margin: 1px auto;
    margin-top: 5px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const SaveButton = styled.button`
  display: flex;
  float: right;
  height: 40px;
  width: 170px;
  margin-top: 10px;
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
