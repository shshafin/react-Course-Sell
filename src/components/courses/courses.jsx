import { useState } from "react";
import { useEffect } from "react";
import Course from "../course/course";
import PropTypes from "prop-types";

const Courses = ({ handleCourseName, errorMessage }) => {
  // state
  const [courses, setCourses] = useState([]);

  // data load
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:w-2/3 grid md:grid-cols-3 gap-7">
      {courses.map((course, idx) => (
        <Course
          key={idx}
          handleCourseName={handleCourseName}
          errorMessage={errorMessage}
          course={course}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleCourseName: PropTypes.object,
  errorMessage: PropTypes.string,
};

export default Courses;
