import React from "react";
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

const ReturnToHomePage = () => {};
const ReloadNewInvoice = () => {};
const ReloadInvoiceDetails = () => {};
const ReloadClientDetails = () => {};
const ReloadInvoiceItems = () => {};
const doContinue = () => {};

const CreateNewInvoice = () => {
  return (
    <aside className="pd--1rem">
      <section className="breadcrumb">
        <Button
          variant="link"
          type="button"
          text="Invoices"
          onClick={ReturnToHomePage}
        />
        {downArrowSVG}
        <Button
          variant="link"
          type="button"
          text="Create invoice"
          onClick={ReloadNewInvoice}
        />
      </section>

      <h2>Create New Invoice</h2>

      <section className="steps align--center-horizontally">
        <Button
          variant="link"
          type="button"
          text="Invoice Details"
          onClick={ReloadInvoiceDetails}
        />
        <Button
          variant="link"
          type="button"
          text="Client Details"
          mgAmount="lr-2rem"
          onClick={ReloadClientDetails}
        />
        <Button
          variant="link"
          type="button"
          text="Invoice items"
          onClick={ReloadInvoiceItems}
        />
      </section>

      <form action="">
        <div className="genericInfo">
          <p>Generic Information</p>
          <hr />

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
              options={[]}
            />
          </div>

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Invoice Date</label>
            <PickerCalendar />
          </div>

          <div className="align--vertically mg--tb-1rem">
            <label htmlFor="">Payment Due Date</label>
            <PickerCalendar />
          </div>
        </div>

        <div className="billAddressInfo">
          <p>Billing Address Information</p>
          <hr />

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

          <div className="align--center-horizontally cityZipCode">
            <label htmlFor="">City</label>
            <Input
              type="text"
              name="city"
              minLength={4}
              maxLength={25}
              color="primary-light"
            />

            <label htmlFor="">Zip Code</label>
            <Input
              type="text"
              name="city"
              minLength={4}
              maxLength={20}
              color="primary-light"
            />
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

        <div className="align--center-horizontally">
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
