import React, { useState } from "react";
import "./_styles.scss";

const ReloadInvoiceDetails = () => {};
const ReloadClientDetails = () => {};
const ReloadInvoiceItems = () => {};

const HeaderSteps = () => {
  let [currentState, setCurrentState] = useState(true);

  return (
    <header className="step">
      <h2>Create New Invoice</h2>

      <section className="step__container flex--between">
        <div className="flex--column">
          <button
            type="button"
            className={`button--link step--${
              currentState ? "current" : "default"
            }`}
            id="invoiceDetails"
            onClick={ReloadInvoiceDetails}
          >
            Invoice Details
          </button>
        </div>

        <div className="flex--column">
          <button
            type="button"
            className={`button--link step--${
              currentState ? "default" : "current"
            }`}
            id="clientDetails"
            onClick={ReloadClientDetails}
          >
            Client Details
          </button>
        </div>

        <div className="flex--column">
          <button
            type="button"
            className={`button--link step--${
              currentState ? "default" : "current"
            }`}
            id="invoiceItems"
            onClick={ReloadInvoiceItems}
          >
            Invoice items
          </button>
        </div>
      </section>
    </header>
  );
};

export default HeaderSteps;
