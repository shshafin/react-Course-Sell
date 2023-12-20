import { useState } from "react";
import "./App.css";
import Courses from "./components/courses/courses";
import Prices from "./components/prices/prices";

function App() {
  // state
  const [courseName, setCourseName] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [credits, setCredits] = useState(0);
  const [prices, setPrices] = useState(0);
  const [hours, setHours] = useState(20);

  // handle course name
  const handleCourseName = (name, credit, price) => {
    const newCourseName = [...courseName, name];

    // price
    const totalPrice = prices + price;

    // course credit hour
    const reduceHours = hours - credit;
    // credit
    const totalCredit = credits + credit;
    if (totalCredit <= 20) {
      // course name
      if (courseName.includes(name)) {
        setErrorMessage(`${name} `);
      } else {
        setCourseName(newCourseName);
        setCredits(totalCredit);
        setPrices(totalPrice);
        setHours(reduceHours);
        setErrorMessage("  ");
      }
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">
        Course Registration
      </h1>
      <div className="md:flex  mx-16">
        <Courses
          handleCourseName={handleCourseName}
          errorMessage={errorMessage}
        ></Courses>
        <Prices
          courseName={courseName}
          credits={credits}
          prices={prices}
          hours={hours}
        ></Prices>
      </div>
    </div>
  );
}

export default App;
