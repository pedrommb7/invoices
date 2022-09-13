import React, { useState } from "react";
import { ChevronSVG, CloseSVG } from "../../images/index";
import Button from "components/Button/Button";
import Select from "components/Select/Select";
import "./_filterby.scss";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_flexflow.scss";
import Input from "components/Input/Input";
import RangeCalendar from "components/Calendar/RangeCalendar";
import { FilterByProperties } from "./declarations";

const activeState = () => {};
const doSearch = () => {};

const FilterBy = (properties: FilterByProperties) => {
  const { handleSubmit, isFilterShow, isFilterShownHandler } = properties;
  return (
    <aside
      className={`pd--26 filter-page ${
        isFilterShow ? "transitionMoveInLeft" : "transition__with-move-in"
      }`}
    >
      <header className="flex filter-page__button-close">
        <button
          type="button"
          className="button--link color--black"
          onClick={() => isFilterShownHandler(false)}
        >
          {<CloseSVG className="closeSVG hide--sm" />}
          {<ChevronSVG className="fill--black hide--md hide--lg" />}
        </button>
        <span className="mg--l-1rem">Filters</span>
      </header>

      <section className="flex--column mg--tb-2rem">
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

      <section className="invoice-state">
        <label htmlFor="">Invoice state</label>
        <div className="flex--between mg--t-075rem mg--b-15rem">
          <Button
            variant="pill-inactive"
            type="button"
            text="Paid"
            onClick={activeState}
          />
          <Button
            variant="pill-inactive"
            type="button"
            text="Canceled"
            onClick={activeState}
          />
          <Button
            variant="pill-inactive"
            type="button"
            text="Pending"
            onClick={activeState}
          />
        </div>
      </section>

      <section className="invoice-date">
        <label htmlFor="">Invoice date</label>
        <RangeCalendar />
      </section>

      <section className="flex--column mg--t-15rem">
        <label htmlFor="" className="mg--b-075rem">
          Client
        </label>
        <Input
          type="text"
          name="name"
          placeholder="Type a client name"
          minLength={4}
          maxLength={20}
        />
      </section>

      <div className="filter-page__button-search flex--center">
        <Button
          variant="primary"
          type="submit"
          onClick={doSearch}
          text="Search"
        />
      </div>
    </aside>
  );
};

export default FilterBy;
