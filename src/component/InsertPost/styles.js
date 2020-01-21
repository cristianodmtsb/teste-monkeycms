import styled from "styled-components";

export const FormInsertPost = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(18, 38, 63, 0.03);
  padding-bottom: 15px;
  margin-bottom: 15px;
  h4 {
    font-size: 18px;
  }
  input,
  select,
  .text-write {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.47rem 0.75rem;
    font-size: 15px;
  }
  select {
    width: 250px;
    margin-right: 15px;
  }
  .btn-check {
    border: 0;
    background-color: #218ded;
    color: #fff;
    padding: 10px 30px;
    border-radius: 4px;
    transition: background 0.5s;
    &:hover {
      background-color: #1587ec;
    }
  }
  .group-one,
  .group-two {
    display: flex;
    margin: 15px 0;
  }
  .group-two {
    justify-content: space-between;
  }
  .flex-1 {
    flex: 1;
  }
`;
