import "./Pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  // Define how many page numbers you want to show at once
  const maxPagesToShow = 7;
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage < nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Calculate the range of page numbers to display
  let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > nPages) {
    endPage = nPages;
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

  return (
    <nav className="paginationSite">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={prevPage} href="#">
            <i style={{color: 'white'}} className="fa fa-angle-left" aria-hidden="true"></i>
          </a>
        </li>
        {pageNumbers.slice(startPage - 1, endPage).map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === nPages ? "disabled" : ""}`}>
          <a className="page-link" onClick={nextPage} href="#">
             <i style={{color: 'white'}} className="fa fa-angle-right" aria-hidden="true"></i> 
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;