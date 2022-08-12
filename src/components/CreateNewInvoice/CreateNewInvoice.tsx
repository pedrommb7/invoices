import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import PickerCalendar from "components/Calendar/PickerCalendar";
import { downArrowSVG } from "images";
import Select from "components/Select/Select";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_align.scss";
import "../../styles/trumps/_margins.scss";
import "../../styles/trumps/_padding.scss";
import "../../styles/trumps/_animation.scss";
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
        <Button
          variant="link"
          type="button"
          text="Invoices"
          onClick={() => setIsNewInvoiceShown(false)}
        />
        {downArrowSVG}
        <Button
          variant="link"
          type="button"
          text="Create invoice"
          id="createInvoice"
          onClick={ReloadNewInvoice}
        />
      </nav>

      <header>
        <h2>Create New Invoice</h2>

        <section className="steps align--between">
          <div className="align--vertically">
            <Button
              variant="link"
              type="button"
              text="Invoice Details"
              id="invoiceDetails"
              onClick={ReloadInvoiceDetails}
            />
            <div className="underline"></div>
          </div>

          <div className="align--vertically">
            <Button
              variant="link"
              type="button"
              text="Client Details"
              id="clientDetails"
              onClick={ReloadClientDetails}
            />
            <div className="underline"></div>
          </div>

          <div className="align--vertically">
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

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Invoice Description</label>
            <Input
              type="text"
              name="invoiceDescription"
              minLength={4}
              maxLength={30}
              color="primary-light"
            />
          </div>

          <div className="align--vertically mg--tb-1rem">
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

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Invoice Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Payment Due Date</label>
            <Input type="date" name="invoiceDate" color="primary-light" />
          </div>
        </div>

        <div className="billAddressInfo">
          <p>Billing Address Information</p>
          <div className="horizontal-line"></div>

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Street</label>
            <Input
              type="text"
              name="street"
              minLength={4}
              maxLength={40}
              color="primary-light"
            />
          </div>

          <div className="align--between cityZipCode">
            <div className="align--vertically mg--tb-1rem">
              <label htmlFor="">City</label>
              <Input
                type="text"
                name="city"
                minLength={4}
                maxLength={25}
                color="primary-light"
              />
            </div>

            <div className="align--vertically mg--tb-1rem">
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

          <div className="align--vertically mg--tb-1rem">
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

        <div className="continue align--center-horizontally">
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
