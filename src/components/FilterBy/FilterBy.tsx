import React from "react";
import { downArrowSVG } from "../../images/index";
import Button from "components/Button/Button";
import { FilterByProperties } from "./declarations";
import "../../styles/trumps/_align.scss";
import "../../styles/trumps/_margins.scss";

const returnToHomePage = () => {};
const activeState = () => {};

const FilterResults = () => {
  return (
    <aside className="mg--lr-26">
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
        <label htmlFor="invoice">Order by: </label>
        <select name="invoice" id="invoice" className="mg--t-075rem">
          <option value="invoiceidasc">InvoiceID - ASC</option>
          <option value="invoiceiddesc">InvoiceID - DESC</option>
          <option value="invoicedateasc">Invoice Date - ASC</option>
          <option value="invoicedatedesc">Invoice Date - DESC</option>
        </select>
      </section>

      <section>
        <label htmlFor="">Invoice state</label>
        <div className="align--between mg--t-075rem mg--b-15rem">
          <Button
            variant="pill"
            type="button"
            text="Paid"
            onClick={activeState}
          />
          <Button
            variant="pill"
            type="button"
            text="Canceled"
            onClick={activeState}
          />
          <Button
            variant="pill"
            type="button"
            text="Pending"
            onClick={activeState}
          />
        </div>
      </section>

      <label htmlFor="">Invoice date</label>

      <section className="align--vertically mg--tb-15rem">
        <label htmlFor="" className="mg--b-075rem">
          Client
        </label>
        <input type="text" placeholder="Type a client name" />
      </section>
    </aside>
  );
};

export default FilterResults;
