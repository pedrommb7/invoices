import React from "react";
import { downArrowSVG } from "../../images/index";
import Button from "components/Button/Button";
import Select from "components/Select/Select";
import { FilterByProperties } from "./declarations";
import "./_filterby.scss";
import "../../styles/trumps/_align.scss";
import "../../styles/trumps/_margins.scss";

const returnToHomePage = () => {};
const activeState = () => {};
const doSearch = () => {};

const FilterResults = () => {
  return (
    <aside className="filter-page mg--lr-26">
      <Button
        variant="link"
        type="button"
        text="Filters"
        color="black"
        alignment="center-horizontally"
        icon={downArrowSVG}
        onClick={returnToHomePage}
      />

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
            variant="pill"
            type="button"
            text="Paid"
            alignment="center-horizontally"
            onClick={activeState}
          />
          <Button
            variant="pill"
            type="button"
            text="Canceled"
            alignment="center-horizontally"
            onClick={activeState}
          />
          <Button
            variant="pill"
            type="button"
            text="Pending"
            alignment="center-horizontally"
            onClick={activeState}
          />
        </div>
      </section>

      <label htmlFor="">Invoice date</label>
      {/* Calendar */}

      <section className="align--vertically mg--tb-15rem">
        <label htmlFor="" className="mg--b-075rem">
          Client
        </label>
        <input type="text" placeholder="Type a client name" />
      </section>

      <Button
        variant="primary"
        type="submit"
        mgAmount="tb-2rem"
        pdAmount="05rem"
        onClick={doSearch}
        text={"Search"}
        alignment="center-horizontally"
      />
    </aside>
  );
};

export default FilterResults;
