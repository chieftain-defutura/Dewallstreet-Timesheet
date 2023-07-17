/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import graphchart from "../../../assets/images/graphchart.svg";
// import { Link } from "react-router-dom";
import "./timelinegraph.css";

const Timelinegraph = () => {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");
  // console.log(pathname);
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");
  // const [clickable, setClickable] = useState(true);

  // const clickHandler = (event) => {
  //   event.preventDefault();
  // };
  const [toggle, setToggle] = useState("week");
  // const handleChange = () => setToggle("month");
  return (
    // <Router>
    <div className="timeline_graph_main">
      <div className="timeline_header">
        <form>
          <select>
            <option value="Grace Time">Grace Time</option>
            <option value="Week">Week</option>
            <option value="Months">Months</option>
            <option value="Year">Year</option>
          </select>
        </form>
        <div className="time_period">
          <div className="week">
            {toggle === "week" ? (
              <>
                <div
                  onClick={() => setToggle("week")}
                  style={{ color: "white" }}
                >
                  Week
                </div>
                <div
                  className="horizontal_line"
                  style={{ border: "1px solid white" }}
                ></div>
              </>
            ) : (
              <>
                <div
                  onClick={() => setToggle("week")}
                  style={{ color: "grey" }}
                >
                  Week
                </div>
                <div
                  className="horizontal_line"
                  style={{ border: "1px solid grey" }}
                ></div>
              </>
            )}
          </div>
          <div className="month">
            {toggle === "month" ? (
              <>
                <div
                  onClick={() => setToggle("month")}
                  style={{ color: "white" }}
                >
                  Months
                </div>
                {/* <div
                  className="horizontal_line"
                  style={{ border: "1px solid white" }}
                ></div> */}
              </>
            ) : (
              <>
                <div
                  onClick={() => setToggle("month")}
                  style={{ color: "grey" }}
                >
                  Months
                </div>
                {/* <div
                  className="horizontal_line"
                  style={{ border: "1px solid grey" }}
                ></div> */}
              </>
            )}
          </div>
          <div className="year">
            {toggle === "year" ? (
              <>
                <div
                  className="year"
                  onClick={() => setToggle("year")}
                  style={{ color: "white" }}
                >
                  Year
                </div>
                {/* <div
                  className="horizontal_line"
                  style={{ border: "1px solid white" }}
                ></div> */}
              </>
            ) : (
              <>
                <div
                  className="year"
                  onClick={() => setToggle("year")}
                  style={{ color: "grey" }}
                >
                  Year
                </div>
                {/* <div
                  className="horizontal_line"
                  style={{ border: "1px solid grey" }}
                ></div> */}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="graph">
        <div className="total_weeks">
          <div className="week_days">
            <h4>W4</h4>
            <h4>W3</h4>
            <h4>W2</h4>
            <h4>W1</h4>
          </div>
          <div className="vertical_line_graph"></div>
        </div>
        <div className="days">
          <img src={graphchart} alt="image" />
          <div className="horizontal_line_graph"></div>
          <div className="total_days">
            <h5>1</h5>
            <h5>2</h5>
            <h5>3</h5>
            <h5>4</h5>
            <h5>5</h5>
            <h5>6</h5>
            <h5>7</h5>
            <h5>8</h5>
            <h5>9</h5>
            <h5>10</h5>
            <h5>11</h5>
            <h5>12</h5>
            <h5>13</h5>
            <h5>14</h5>
            <h5>15</h5>
            <h5>16</h5>
          </div>
        </div>
      </div>
    </div>
    // </Router>
  );
};
export default Timelinegraph;
