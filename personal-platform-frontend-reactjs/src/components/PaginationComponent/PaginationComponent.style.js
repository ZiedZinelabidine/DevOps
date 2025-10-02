import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  .pagination {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  .page-item {
    display: inline;
    margin: 0 5px;
    align-self: center;
  }

  .page-link {
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    color: #000;
    background-color: #f0f2f5;
    cursor: pointer;
    text-align: center;
    font-weight: 500;

    &:hover {
      background-color: #e4e6eb;
    }
  }

  .page-item.active .page-link {
    background-color: #000;
    color: #fff;
    cursor: default;
  }

  .page-item.disabled .page-link {
    color: #ccc;
    cursor: not-allowed;
  }

  /* Specific styles for "Previous" and "Next" buttons */
  .previous-next {
    color: #ccc;
    cursor: not-allowed;
    background-color: transparent;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 12px;

    &.enabled {
      color: #000;
      cursor: pointer;
    }
  }
`;
