// Import necessary libraries
import React from 'react'; // React library for creating user interfaces
import PropTypes from 'prop-types'; // Library for runtime type checking for React props

// Define a functional React component named 'SkillBar'
// This component accepts two props named 'data' and 'categories'
const SkillBar = ({ data, categories }) => {
  // Destructure the data prop to extract 'category', 'competency', and 'title' values
  const { category, competency, title } = data;

  // Define the style for the title. The background color is determined by the category's color.
  const titleStyle = {
    background: categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color)[0], // Map to get the color of the matched category
  };

  // Define the style for the skill bar. The bar's width is determined by the competency level.
  const barStyle = {
    ...titleStyle, // Spread the titleStyle properties here
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`, // Calculate the width based on the competency
  };

  // Render the skill bar
  return (
    <div className="skillbar clearfix">
      <div className="skillbar-title" style={titleStyle}><span>{title}</span></div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skill-bar-percent">{competency} / 5</div>
    </div>
  );
};

// Define propTypes for the SkillBar component
// This is used for type checking the props of the component
SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired, // competency is required and should be a number
    title: PropTypes.string.isRequired, // title is required and should be a string
  }).isRequired, // data itself is required
  categories: PropTypes.arrayOf(PropTypes.shape({ // categories should be an array of objects
    name: PropTypes.string, // name should be a string
    color: PropTypes.string, // color should be a string
  })),
};

// Define default props for the SkillBar component
SkillBar.defaultProps = {
  categories: [], // categories defaults to an empty array if not provided
};

// Export the SkillBar component as the default export
export default SkillBar;
