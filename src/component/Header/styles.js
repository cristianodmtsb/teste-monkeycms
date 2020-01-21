import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px;
  z-index: 99;
  position: relative;
  .logo {
    width: 220px;
  }
`;

export const MetaInfos = styled.ul`
  list-style: none;
  display: flex;
  li {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    padding: 2px 10px;
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
    }
    span {
      display: block;
      font-size: 14px;
      font-weight: normal;
    }
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  img {
    border-radius: 50%;
    margin-right: 10px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    margin-left: 15px;
    color: rgba(3, 115, 138, 1);
  }
`;
