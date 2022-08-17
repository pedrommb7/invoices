import React, { useEffect, useState } from "react";
import InvoiceCard from "./InvoiceCard";
import { InvoiceToShow } from "./declarations";
import { getCardList } from "components/InvoiceCard/actions";
import Button from "components/Button/Button";
import FilterBy from "../FilterBy/FilterBy";
import { DownArrowSVG, filterSVG } from "images";
import { PlusSVG } from "../../images/index";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_colors.scss";
import "../../styles/trumps/_align.scss";
import "../../styles/trumps/_margins.scss";
import "../../styles/trumps/_fill.scss";
import "./_invoiceCardList.scss";
import "../../images/_styling.scss";
import CreateNewInvoice from "components/CreateNewInvoice/CreateNewInvoice";

const InvoiceCardsList = () => {
  let [cardListing, setcardListing] = useState([] as InvoiceToShow[]);
  let [isFilterShown, setIsFilterShown] = useState(false);
  let [isNewInvoice, setIsNewInvoice] = useState(false);

  useEffect(() => {
    getCardList().then(
      (resolve) => {
        setcardListing(resolve);
      },
      (reject) => {
        console.error(reject);
      }
    );
  }, []);

  const GoToFiltersPage = () => {
    setIsFilterShown(true);
  };

  const GoToCreateNewInvoice = () => {
    setIsNewInvoice(true);
    document.getElementById("createInvoice")?.classList.add("color--secondary");
    document
      .getElementById("invoiceDetails")
      ?.classList.add("color--secondary");
  };

  return (
    <section className="align--vertically" id="main-content">
      <header className="filter__header">
        <h1 id="InvoicesNR">Invoices - {cardListing.length}</h1>

        <div className="filter__button--wrapper">
          <Button
            variant="link"
            alignment="center-horizontally"
            flexflow="row-reverse"
            type="button"
            text="Filter"
            icon={filterSVG}
            id="FilterButton"
            onClick={GoToFiltersPage}
          />
          <Button
            variant="pill"
            alignment="center-horizontally"
            type="button"
            text="New Invoice"
            icon={<PlusSVG className="plusSVG align--center mg--r-05rem" />}
            id="NewInvoiceButton"
            onClick={GoToCreateNewInvoice}
          />
        </div>
      </header>

      <ul id="cards">
        {cardListing.map((element, index) => {
          return (
            <li key={index}>
              <InvoiceCard data={element} />
            </li>
          );
        })}
      </ul>

      <Button
        mgAmount="tb-2rem"
        pdAmount="05rem"
        variant="link"
        alignment="center-horizontally"
        type="button"
        color="primary"
        text="See more invoices"
        flexflow="row-reverse"
        icon={<DownArrowSVG className="fill--primary mg--l-1rem" />}
        id="SeeMoreInvoices"
        onClick={() => console.log(getCardList())}
      />

      {
        <FilterBy
          handleSubmit={() => console.log("Test click")}
          isFilterShow={isFilterShown}
          isFilterShownHandler={setIsFilterShown}
        />
      }
      {isNewInvoice && <CreateNewInvoice />}
    </section>
  );
};

export default InvoiceCardsList;
