import PropTypes from "prop-types";
import Price from "../price/price";

const Prices = ({ courseName, credits, prices, hours }) => {
  return (
    <div className="w-1/3 ">
      <div className="bg-slate-50 mx-24 my-3 p-4 rounded-lg">
        <h1 className="font-bold text-lg text-blue-600">
          Credit Hour Remaining {hours} hr
        </h1>
        <div className="my-3">
          <hr />
        </div>
        <h1 className="text-xl font-bold mb-5">Course name</h1>
        {courseName.map((price, idx) => (
          <Price key={idx} price={price}></Price>
        ))}
        <div className="my-3">
          <hr />
        </div>
        <h1 className="font-semibold">Total Credit Hour : {credits}</h1>
        <div className="my-3">
          <hr />
        </div>
        <h1 className="font-semibold">Total Price : {prices}</h1>
      </div>
    </div>
  );
};

Prices.propTypes = {
  price: PropTypes.object,
  courseName: PropTypes.object,
  credits: PropTypes.object,
  prices: PropTypes.object,
  hours: PropTypes.object,
};

export default Prices;
