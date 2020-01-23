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
