import PropTypes from "prop-types";
import { MdOutlinePriceCheck } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

const Course = ({ course, handleCourseName, errorMessage, hour }) => {
  const { image, course_name, course_title, price, credit_hour } = course;

  return (
    <div>
      <div className="card card-compact m-2 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>{course_title}</p>

          <p className="flex space-x-4 items-center ">
            <MdOutlinePriceCheck className="mr-2.5"></MdOutlinePriceCheck>{" "}
            Price: {price} <FaBookOpen></FaBookOpen>{" "}
            <span>Credit: {credit_hour}</span>
          </p>
          {errorMessage && (
            <div className="toast">
              <div className="alert alert-info bg-red-600 text-white border-0">
                <span>you already select this course</span>
              </div>
            </div>
          )}
          <div className="card-actions justify-end">
            <button
              onClick={() => handleCourseName(course, credit_hour, price, hour)}
              className="w-full btn bg-blue-600 text-white hover:bg-blue-500"
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourseName: PropTypes.func,
  errorMessage: PropTypes.string,
  hour: PropTypes.string,
};

export default Course;
