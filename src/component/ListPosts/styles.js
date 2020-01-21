import styled from "styled-components";

export const TablePosts = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(18, 38, 63, 0.03);
  padding-bottom: 15px;
  margin-bottom: 15px;
  h4 {
    font-size: 18px;
  }
  .table-responsive {
    display: flex;
    table {
      flex: 1;
      margin: 15px 0;
      th,
      td {
        vertical-align: bottom;
        border-bottom: 2px solid #eff2f7;
        padding: 0.75rem;
        text-align: left;
        &.title-table {
          font-weight: bold;
        }
        &:last-child {
          text-align: right;
          button {
            padding: 4px 6px;
            border: 0;
            margin: 0 5px;
            border-radius: 4px;
            &.btn-see {
              background-color: #34c38f;
            }
            &.btn-edit {
              background-color: #eea529;
            }
            &.btn-delete {
              background-color: #f14646;
            }
          }
        }
      }
    }
  }
`;

export const ModalPost = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3em 0;
  display: none;
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
