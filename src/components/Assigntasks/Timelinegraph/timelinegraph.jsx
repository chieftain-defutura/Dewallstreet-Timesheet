import React from "react";
import graphchart from "../../../assets/images/graphchart.svg";
import "./timelinegraph.css";
const Timelinegraph = () => {
  return (
    <div className="timeline_graph_main">
      <div></div>
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
            <a href="#">Week</a>
            <div className="horizontal_line_week"></div>
          </div>
          <div className="month">
            <a href="#">Months</a>
            <div className="horizontal_line"></div>
          </div>
          <div className="year">
            <a href="#">Year</a>
            <div className="horizontal_line"></div>
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
  );
};
export default Timelinegraph;
