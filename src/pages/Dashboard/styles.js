import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 24px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const NewButton = styled.button`
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

export const MeetupCard = styled.li`
  max-width: 800px;
  padding: 15px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;

    div {
      align-items: center;

      span {
        margin-right: 10px;
        color: #999;
      }
    }
  }

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }
`;
