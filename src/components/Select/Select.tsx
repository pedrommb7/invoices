import React from "react";
import { SelectProperties } from "./declarations";
import "./_styles.scss";

const Select = (properties: SelectProperties) => {
  const { name, id, color, options } = properties;

  return (
    <select name={name} id={id} className={`borderColor--${color}`}>
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
