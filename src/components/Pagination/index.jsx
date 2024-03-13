import React, { useEffect } from "react";
import clsx from "clsx";
import { usePagination, DOTS } from "./usePagination";
import classes from "./Pagination.module.scss";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={clsx(classes.paginationContainer, { [className]: className })}
    >
      <li
        className={clsx(classes.paginationItem, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={clsx(classes.arrow, classes.left)} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={clsx(classes.paginationItem, classes.dots)}
              key={index}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={clsx(classes.paginationItem, {
              [classes.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={clsx(classes.paginationItem, {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={clsx(classes.arrow, classes.right)} />
      </li>
    </ul>
  );
};

export default Pagination;
