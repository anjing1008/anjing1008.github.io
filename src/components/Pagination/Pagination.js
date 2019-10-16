import React from "react";
import PropTypes from "prop-types";
import PaginationLink from "../PaginationLink";

const Pagination = props => {
  const { page, pages, prev, next } = props;

  return (
    <React.Fragment>
      <nav className="pagination">
        <PaginationLink className="newer-posts" url={prev} text="← Newer Posts" />
        <span className="page-number">{`Page ${page} of ${pages}`}</span>
        <PaginationLink className="older-posts" url={next} text="Older Posts →" />
      </nav>

      {/* --- STYLES --- */}
      <style jsx>{`
        .pagination {
          position: relative;
          width: 80%;
          max-width: 750px;
          margin: 1rem auto;
          color: #9eabb3;
          text-align: center;
        }

        .page-number {
          display: inline-block;
          padding: 2px 0;
          min-width: 100px;
        }

        @below tablet {
          .pagination {
            width: auto;
            margin: 0.5rem auto;
          }

          .page-number {
            display: block;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired
};

export default Pagination;
