import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { DownArrowSVG } from "images";
import Select from "components/Select/Select";
import "../../styles/trumps/_fill.scss";
import "../../styles/trumps/_margins.scss";
import "../../styles/base/_reset.scss";

import "./_styles.scss";

const ReloadNewInvoice = () => {};
const ReloadInvoiceDetails = () => {};
const ReloadClientDetails = () => {};
const ReloadInvoiceItems = () => {};
const doContinue = () => {};

const CreateNewInvoice = () => {
  let [isNewInvoiceShown, setIsNewInvoiceShown] = useState(true);

  return (
    <aside
      className={`pd--1rem new-invoice ${
        isNewInvoiceShown ? "" : "hide--withFadeOut"
      } `}
    >
      <nav className="breadcrumb">
        <a href="/">
          <Button
            variant="link"
            type="button"
            text="Invoices"
            onClick={() => setIsNewInvoiceShown(false)}
          />
        </a>

        {<DownArrowSVG className="fill--black mg--b-2px" />}

        <a href="#">
          <Button
            variant="link"
            type="button"
            text="Create invoice"
            id="createInvoice"
            onClick={ReloadNewInvoice}
          />
        </a>
      </nav>

      <header>
        <h2>Create New Invoice</h2>

        <section className="steps flex--between">
          <div className="flex--vertically">
            <Button
              variant="link"
              type="button"
              text="Invoice Details"
              id="invoiceDetails"
              onClick={ReloadInvoiceDetails}
            />
            <div className="underline"></div>
          </div>

          <div className="flex--vertically">
            <Button
              variant="link"
              type="button"
              text="Client Details"
              id="clientDetails"
              onClick={ReloadClientDetails}
            />
            <div className="underline"></div>
          </div>

          <div className="flex--vertically">
            <Button
              variant="link"
              type="button"
              text="Invoice items"
              id="invoiceItems"
              onClick={ReloadInvoiceItems}
            />
            <div className="underline"></div>
          </div>
        </section>
      </header>

      <form action="">
        <div className="genericInfo">
          <p>Generic Information</p>
          <div className="horizontal-line"></div>

          <div className="flex--vertically mg--tb-1rem">
            <label htmlFor="">Invoice Description</label>
            <Input
              type="text"
              name="invoiceDescription"
              minLength={4}
              maxLength={30}
              color="primary-light"
            />
          </div>

          <div className="flex--vertically mg--tb-1rem">
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

          <div className="flex--vertically mg--tb-1rem">
            <label htmlFor="">Invoice Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>

          <div className="flex--vertically mg--tb-1rem">
            <label htmlFor="">Payment Due Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>
        </div>

        <div className="billAddressInfo">
          <p>Billing Address Information</p>
          <div className="horizontal-line"></div>

          <div className="flex--vertically mg--tb-1rem">
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
            <div className="flex--vertically mg--tb-1rem">
              <label htmlFor="">City</label>
              <Input
                type="text"
                name="city"
                minLength={4}
                maxLength={25}
                color="primary-light"
              />
            </div>

            <div className="flex--vertically mg--tb-1rem">
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

          <div className="flex--vertically mg--tb-1rem">
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

        <div className="continue flex--center-horizontally">
          <Button
            variant="primary"
            type="submit"
            mgAmount="tb-15rem"
            pdAmount="lr-6rem"
            onClick={doContinue}
            text="Continue"
            alignment="center-horizontally"
          />
        </div>
      </form>
    </aside>
  );
};

export default CreateNewInvoice;