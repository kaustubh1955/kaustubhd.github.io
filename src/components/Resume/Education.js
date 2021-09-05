import PropTypes from "prop-types";
import React from "react";
import Degree from "./Education/Degree";

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <div>
        <Degree data={degree} key={degree.school} />
      </div>
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      percent: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    })
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
