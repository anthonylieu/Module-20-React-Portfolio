// Import necessary libraries
import React from 'react'; // React library for creating user interfaces
import PropTypes from 'prop-types'; // Library for runtime type checking for React props
import dayjs from 'dayjs'; // Library for parsing, validating, manipulating, and formatting dates

// Define a functional React component named 'Cell'
// This component accepts a single prop named 'data'
const Cell = ({ data }) => (
  // Container for each cell
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

// Define propTypes for the Cell component
// This is used for type checking the props of the component
Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired, // title is required and should be a string
    link: PropTypes.string, // link should be a string
    image: PropTypes.string.isRequired, // image is required and should be a string
    date: PropTypes.string.isRequired, // date is required and should be a string
    desc: PropTypes.string.isRequired, // desc is required and should be a string
  }).isRequired, // data itself is required
};

// Export the Cell component as the default export
export default Cell;
