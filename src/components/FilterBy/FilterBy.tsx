import React, { useState } from "react";
import { downArrowSVG } from "../../images/index";
import Button from "components/Button/Button";
import Select from "components/Select/Select";
import "./_filterby.scss";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_align.scss";
import "../../styles/trumps/_margins.scss";
import Input from "components/Input/Input";

const activeState = () => {};
const doSearch = () => {};

const FilterBy = () => {
  let [isFilterShown, setIsFilterShown] = useState(true);

  return (
    <aside
      className={`filter-page mg--lr-26 ${isFilterShown ? "" : "hide--sm"}`}
    >
      {/* <Button
        variant="link"
        type="button"
        text="Filters"
        color="black"
        alignment="center-horizontally"
        icon={downArrowSVG}
        onClick={returnToHomePage}
      /> */}
      <button
        type="button"
        className="align--center-horizontally color--black"
        onClick={() => setIsFilterShown(false)}
      >
        {downArrowSVG}
        Filters
      </button>

      <section className="align--vertically mg--tb-2rem">
        <label htmlFor="invoice" className="mg--b-075rem">
          Order by:
        </label>
        <Select
          name="invoice"
          id="invoice"
          color="primary-light"
          options={[
            { key: "InvoiceID - ASC", value: "invoiceId-ASC" },
            { key: "InvoiceID - DESC", value: "invoiceId-DESC" },
            { key: "Invoice Date - ASC", value: "invoiceDate-ASC" },
            { key: "Invoice Date - DESC", value: "invoiceDate-DESC" },
          ]}
        />
      </section>

      <section>
        <label htmlFor="">Invoice state</label>
        <div className="align--between mg--t-075rem mg--b-15rem">
          <Button
            variant="pill-inactive"
            type="button"
            text="Paid"
            alignment="center-horizontally"
            onClick={activeState}
          />
          <Button
            variant="pill-inactive"
            type="button"
            text="Canceled"
            alignment="center-horizontally"
            onClick={activeState}
          />
          <Button
            variant="pill-inactive"
            type="button"
            text="Pending"
            alignment="center-horizontally"
            onClick={activeState}
          />
        </div>
      </section>

      <label htmlFor="">Invoice date</label>
      {/* Calendar */}

      <section className="align--vertically mg--t-15rem">
        <label htmlFor="" className="mg--b-075rem">
          Client
        </label>
        <Input
          type="text"
          name="name"
          placeholder="Type a client name"
          minLength={4}
          maxLength={20}
          color="primary-light"
        />
      </section>

      <div className="search align--center-horizontally">
        <Button
          variant="primary"
          type="submit"
          mgAmount="tb-15rem"
          pdAmount="lr-6rem"
          onClick={doSearch}
          text={"Search"}
          alignment="center-horizontally"
        />
      </div>
    </aside>
  );
};

export default FilterBy;
