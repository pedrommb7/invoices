import React from "react";
import { SelectProperties } from "./declarations";
import "./_styles.scss";

const Select = (properties: SelectProperties) => {
  const { name, id, options } = properties;

  return (
    <select name={name} id={id}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
