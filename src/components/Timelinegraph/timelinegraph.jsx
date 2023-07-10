import React from "react";
import "./timelinegraph.css";
const Timelinegraph = () => {
  return (
    <div>
      <select>
        <option value="Grace Time">Grace Time</option>
        <option value="Week">Week</option>
        <option value="Months">Months</option>
        <option value="Year">Year</option>
      </select>
      {/* <select id="cars" name="carlist" form="carform">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select> */}
      <div className="timeline_header">
        <form>
          {/* <input type="text" placeholder=""/> */}
          {/* <select>
            <option value="Grace Time">Grace Time</option>
            <option value="Week">Week</option>
            <option value="Months">Months</option>
            <option value="Year">Year</option>
          </select> */}

          <label for="cars">Choose a car:</label>
        </form>
      </div>
    </div>
  );
};
export default Timelinegraph;
