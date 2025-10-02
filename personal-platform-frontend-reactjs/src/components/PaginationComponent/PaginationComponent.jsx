import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { StyledPagination } from "./PaginationComponent.style";

const PaginatedComponent = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <StyledPagination>
      <Pagination>
        <Pagination.Prev
          as="span"
          className={`previous-next ${activePage === 1 ? "" : "enabled"}`}
          onClick={() => activePage > 1 && handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        >
          Previous
        </Pagination.Prev>
        {paginationItems}
        <Pagination.Next
          as="span"
          className={`previous-next ${
            activePage === totalPages ? "" : "enabled"
          }`}
          onClick={() =>
            activePage < totalPages && handlePageChange(activePage + 1)
          }
          disabled={activePage === totalPages}
        >
          Next
        </Pagination.Next>
      </Pagination>
    </StyledPagination>
  );
};

export default PaginatedComponent;
