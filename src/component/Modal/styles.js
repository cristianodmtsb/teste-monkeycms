import styled from "styled-components";

export const ModalPost = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3em 0;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .content-modal {
    background-color: #fff;
    width: 90%;
    max-width: 550px;
    padding: 20px;
    border-radius: 4px;
    border-bottom: 1px solid rgba(18, 38, 63, 0.8);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    h3 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    > span {
      font-size: 13px;
      margin-bottom: 20px;
    }
    .text {
      font-size: 15px;
      line-height: 1.5em;
      max-height: 300px;
      overflow-y: auto;
      p {
        margin: 15px 0;
      }
      blockquote {
        width: 90%;
        margin: 15px auto;
        font-size: 15px;
        line-height: 1.4em;
      }
    }
    .footer-modal {
      display: flex;
      justify-content: flex-end;
      margin: 15px 0;
      button {
      }
    }
  }
`;
