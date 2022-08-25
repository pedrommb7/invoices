import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { DownArrowSVG } from "images";
import Select from "components/Select/Select";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import "../../styles/trumps/_colors.scss";
import "./_styles.scss";

const ReloadNewInvoice = () => {};
const ReloadInvoiceDetails = () => {};
const ReloadClientDetails = () => {};
const ReloadInvoiceItems = () => {};

const CreateNewInvoice = () => {
  let [isNewInvoiceShown, setIsNewInvoiceShown] = useState(true);
  let [currentState, setCurrentState] = useState(true);
  let [finishedState, setFinishedState] = useState(true);
  let [defaultState, setDefaultState] = useState(true);

  const doContinue = () => {
    setFinishedState(true);
  };

  return (
    <aside
      className={`pd--1rem new-invoice ${
        isNewInvoiceShown ? "" : "transition__withFadeOut"
      } `}
    >
      <Breadcrumb />

      <header>
        <h2>Create New Invoice</h2>

        <section className="steps flex--between">
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

      <form action="">
        <div className="genericInfo">
          <p>Generic Information</p>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice Description</label>
            <Input
              type="text"
              name="invoiceDescription"
              minLength={4}
              maxLength={30}
              color="primary-light"
            />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice State</label>
            <Select
              name="invoiceState"
              id="invoiceState"
              color="primary-light"
              options={[
                { key: "Paid", value: "paid" },
                { key: "Pending", value: "pending" },
                { key: "Canceled", value: "canceled" },
              ]}
            />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Payment Due Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>
        </div>

        <div className="billAddressInfo">
          <p>Billing Address Information</p>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Street</label>
            <Input
              type="text"
              name="street"
              minLength={4}
              maxLength={40}
              color="primary-light"
            />
          </div>

          <div className="flex--between cityZipCode">
            <div className="flex--column mg--tb-1rem">
              <label htmlFor="">City</label>
              <Input
                type="text"
                name="city"
                minLength={4}
                maxLength={25}
                color="primary-light"
              />
            </div>

            <div className="flex--column mg--tb-1rem">
              <label htmlFor="">Zip Code</label>
              <Input
                type="text"
                name="city"
                minLength={4}
                maxLength={20}
                color="primary-light"
              />
            </div>
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Country</label>
            <Input
              type="text"
              name="city"
              minLength={4}
              maxLength={20}
              color="primary-light"
            />
          </div>
        </div>

        <div className="continue flex--center">
          <Button
            variant="primary"
            type="submit"
            onClick={doContinue}
            text="Continue"
          />
        </div>
      </form>
    </aside>
  );
};

export default CreateNewInvoice;
