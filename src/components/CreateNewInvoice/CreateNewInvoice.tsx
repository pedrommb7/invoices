import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { ChevronSVG } from "images";
import Select from "components/Select/Select";
import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import "./_styles.scss";
import HeaderSteps from "components/HeaderSteps/HeaderSteps";

const ReloadNewInvoice = () => {};

const CreateNewInvoice = () => {
  let [isNewInvoiceShown, setIsNewInvoiceShown] = useState(true);
  let [finishedState, setFinishedState] = useState(true);
  let [defaultState, setDefaultState] = useState(true);

  const doContinue = () => {
    setFinishedState(true);
  };

  return (
    <aside
      className={`pd--1rem ${
        isNewInvoiceShown ? "new-invoice" : "transition__with-fade-out"
      } `}
    >
      <Breadcrumb />

      <HeaderSteps />

      <form action="">
        <div className="generic-info">
          <p className="form-title">Generic Information</p>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice Description</label>
            <Input
              type="text"
              name="invoiceDescription"
              minLength={4}
              maxLength={30}
            />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice State</label>
            <Select
              name="invoiceState"
              id="invoiceState"
              options={[
                { key: "Paid", value: "paid" },
                { key: "Pending", value: "pending" },
                { key: "Canceled", value: "canceled" },
              ]}
            />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Invoice Date</label>
            <Input type="date" name="invoiceDate" />
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Payment Due Date</label>
            <Input type="date" name="invoiceDate" />
          </div>
        </div>

        <div className="billAddressInfo">
          <p className="form-title" style={{ marginTop: "2.5rem" }}>
            Billing Address Information
          </p>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Street</label>
            <Input type="text" name="street" minLength={4} maxLength={40} />
          </div>

          <div className="flex--between city-ZipCode">
            <div className="flex--column mg--tb-1rem">
              <label htmlFor="">City</label>
              <Input type="text" name="city" minLength={4} maxLength={25} />
            </div>

            <div className="flex--column mg--tb-1rem">
              <label htmlFor="">Zip Code</label>
              <Input type="text" name="city" minLength={4} maxLength={20} />
            </div>
          </div>

          <div className="flex--column mg--tb-1rem">
            <label htmlFor="">Country</label>
            <Input type="text" name="city" minLength={4} maxLength={20} />
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
