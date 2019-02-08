import React from "react";
import PropTypes from "prop-types";

const UserTemplate = props => {
  return <div>Tempalte</div>;
};

UserTemplate.propTypes = {
  name: PropTypes.oneOf(["Francis", "Steve"]),
  lastname: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.oneOf(["burt", "ernie"])
  ]),
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  spanish: PropTypes.bool,
  message: PropTypes.func,
  car: PropTypes.object,
  mother: PropTypes.string.isRequired
};

export default UserTemplate;
