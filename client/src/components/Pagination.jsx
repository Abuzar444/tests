import React from "react";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Pagination = ({ data }) => {
  const { currentPage, numOfPages } = data;
  const navigate = useNavigate();

  const { search, pathname } = useLocation();

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageBtn = ({ page, active }) => {
    return (
      <button
        className={`btn page-btn ${active && "active"}`}
        key={page}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    );
  };

  const renderPageBtns = () => {
    const pageBtns = [];

    pageBtns.push(addPageBtn({ page: 1, active: currentPage === 1 }));

    if (currentPage > 3) {
      pageBtns.push(
        <span className="dots page-btn" key="dots-1">
          ...
        </span>
      );
    }

    if (currentPage !== 1 && currentPage !== 2) {
      pageBtns.push(addPageBtn({ page: currentPage - 1, active: false }));
    }

    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageBtns.push(addPageBtn({ page: currentPage, active: true }));
    }

    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageBtns.push(addPageBtn({ page: currentPage + 1, active: false }));
    }

    if (currentPage < numOfPages - 2) {
      pageBtns.push(
        <span className="dots page-btn" key="dots-2">
          ...
        </span>
      );
    }

    pageBtns.push(
      addPageBtn({ page: numOfPages, active: currentPage === numOfPages })
    );

    return pageBtns;
  };

  return (
    <Wrapper>
      <button
        className="prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) {
            prevPage = 1;
          }
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft /> prev
      </button>
      <div className="btn-container">{renderPageBtns()}</div>
      <button
        className="next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) {
            nextPage = numOfPages;
          }
          handlePageChange(nextPage);
        }}
      >
        next <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default Pagination;
