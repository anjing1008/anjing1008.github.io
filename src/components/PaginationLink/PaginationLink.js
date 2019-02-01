import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from 'styled-jsx/css'

const getLinkStyles = (left) => {
  return css.resolve`
    a {
      color: #9eabb3;
      transition: all 0.2s ease;
    }

    position: absolute;
    display: inline-block;
    padding: 2px 15px;
    border: #bfc8cd 1px solid;
    text-decoration: none;
    border-radius: 4px;
    transition: border 0.3s ease;

    :hover {
      color: #889093;
      border-color: #98a0a4;
    }

    @below tablet {
      position: static;
      margin: 10px 0;
    }

    ${left ? "left: 0" : "right: 0"};
  `;
};

const PaginationLink = props => {
  const { url, text, className: name} = props;

  if (url) {
    const {className, styles} = getLinkStyles(name === "newer-posts");

    return (
      <React.Fragment>
        <Link to={url} className={classNames(className)}>
          {text}
          {styles}
        </Link>
      </React.Fragment>
    );
  }

  return null;
};

PaginationLink.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PaginationLink;
