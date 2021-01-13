import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import "../styles/roomsFilter.scss";

// Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //   Get Unique Types
  let types = getUnique(rooms, "type");
  //   Add All
  types = ["all", ...types];
  //   Map to JSX
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End Select Type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
