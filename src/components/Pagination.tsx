import type { PaginationProps } from "../types/types";
import arrowLeft from "/assets/icons/arrow-left.svg";
import arrowLeftGrey from "/assets/icons/arrow-left-grey.svg";
import arrowRight from "/assets/icons/arrow-right.svg";
import arrowRightGrey from "/assets/icons/arrow-right-grey.svg";

const Pagination = (pages: PaginationProps) => {
  return (
    <section className="pagination">
      <div className="pagination_info">
        <span>Showing</span>
        <span className="data_count">
          {pages?.startIndex} - {pages.endIndex}
        </span>
        <span> out of {pages.totalItems}</span>
      </div>

      <div className="pagination_controls">
        <button onClick={pages.prevPage} disabled={pages.currentPage === 1} className="btn">
          {pages.currentPage === 1 ? <img src={arrowLeftGrey} alt="icon" /> : <img src={arrowLeft} alt="icon" />}
        </button>
        {pages.range.map((page, index) =>
          page === "dots" ? (
            <button key={index}>...</button>
          ) : (
            <button key={index} onClick={() => pages.goToPage(Number(page))} className={page === pages.currentPage ? "active" : "btn_num"}>
              {page}
            </button>
          )
        )}
        <button onClick={pages.nextPage} disabled={pages.currentPage === pages.totalPages} className="btn">
          {pages.currentPage === pages.totalPages ? <img src={arrowRightGrey} alt="icon" /> : <img src={arrowRight} alt="icon" />}
        </button>
      </div>
    </section>
  );
};

export default Pagination;
