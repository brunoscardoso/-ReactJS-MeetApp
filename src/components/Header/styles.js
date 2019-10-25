import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #181620;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 25px;
      width: 25px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    margin-left: 10px;
    width: 60px;
    height: 32px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
`;
