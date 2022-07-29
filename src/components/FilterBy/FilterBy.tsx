import React from "react";
import { downArrowSVG } from "../../images/index";
import Button from "components/Button/Button";

const returnToHomePage = () => {};

const FilterResults = () => {
  return (
    <>
      <Button
        variant="link"
        type="button"
        text="Filters"
        icon={{ svg: downArrowSVG }}
        onClick={returnToHomePage}
      />
    </>
  );
};

export default FilterResults;
