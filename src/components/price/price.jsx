import PropTypes from "prop-types";

const Price = ({ price }) => {
  const { course_name } = price;
  return (
    <div>
      <div className="text-gray-500  ">
        <li>{course_name}</li>
      </div>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.object,
  credit_hour: PropTypes.string,
};

export default Price;
