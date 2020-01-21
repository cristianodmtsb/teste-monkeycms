import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  img {
    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: 15px;
  h4 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
  }
  input {
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 10px 10px;
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 4px;
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      padding: 10px 25px;
      background: rgba(12, 9, 59, 1);
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      &:hover {
        background-color: rgba(3, 115, 138, 1);
      }
    }
    a {
      text-decoration: none;
      color: rgba(12, 9, 59, 1);
      font-weight: bold;
      &:hover {
        color: rgba(3, 115, 138, 1);
      }
    }
  }
`;
