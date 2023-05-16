// Import necessary libraries
import React from 'react'; // React library for creating user interfaces
import PropTypes from 'prop-types'; // Library for runtime type checking for React props
import dayjs from 'dayjs'; // Library for parsing, validating, manipulating, and formatting dates

// Define a functional React component named 'Cell'
// This component accepts a single prop named 'data'
const Cell = ({ data }) => (
  // Container for each cell
  <div className="cell-container">
    // Mini post/article within each cell
    <article className="mini-post">
      // Header section of each mini post
      <header>
        // Post title as a hyperlink
        <h3><a href={data.link}>{data.title}</a></h3>
        // Formatted date of the post
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
      </header>
      // Image related to the post with alt text as post title
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      // Description of the post
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
