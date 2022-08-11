import React, { useEffect, useState } from "react";
import InvoiceCard from "./InvoiceCard";
import { InvoiceToShow } from "./declarations";
import { getCardList } from "components/InvoiceCard/actions";
import Button from "components/Button/Button";
import FilterBy from "../FilterBy/FilterBy";
import { downArrowSVG, filterSVG, plusSVG } from "images";
import "../../styles/trumps/_hide.scss";
import "../../styles/trumps/_colors.scss";
import "./_invoiceCardList.scss";
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
    document.getElementById("header")?.classList.add("hide--sm");
    document.getElementById("cards")?.classList.add("hide--sm");
    document.getElementById("SeeMoreInvoices")?.classList.add("hide--sm");
    document.getElementById("FilterButton")?.classList.add("hide--sm");
    document.getElementById("NewInvoiceButton")?.classList.add("hide--sm");
    document.getElementById("InvoicesNR")?.classList.add("hide--sm");
  };

  const GoToCreateNewInvoice = () => {
    setIsNewInvoice(true);
    document.getElementById("createInvoice")?.classList.add("color--secondary");
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
            color="primary"
            text="New Invoice"
            icon={plusSVG}
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
        icon={downArrowSVG}
        id="SeeMoreInvoices"
        onClick={() => console.log(getCardList())}
      />

      {isFilterShown && <FilterBy />}
      {isNewInvoice && <CreateNewInvoice />}
    </section>
  );
};

export default InvoiceCardsList;
