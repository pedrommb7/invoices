import React, { useEffect, useState } from "react";
import InvoiceCard from "./InvoiceCard";
import { InvoiceToShow } from "./declarations";
import { getCardList } from "components/InvoiceCard/actions";
import Button from "components/Button/Button";
import FilterBy from "../FilterBy/FilterBy";
import { downArrowSVG, filterSVG, plusSVG } from "images";
import "../../styles/trumps/_hide.scss";
import "./_invoiceCardList.scss";

const createNewInvoice = () => {};

const InvoiceCardsList = () => {
  let [cardListing, setcardListing] = useState([] as InvoiceToShow[]);
  let [isFilterShown, setIsFilterShown] = useState(false);
  let [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false);

  const FilterResults = () => setIsFilterShown(true);

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

  const SeeMore = () => {
    setIsSeeMoreClicked(true);
  };

  return (
    <section className="align--vertically main-content">
      <header className="filter__header">
        <h1>Invoices - {cardListing.length}</h1>

        <div className="filter__button--wrapper">
          <Button
            variant="link"
            alignment="center-horizontally"
            flexflow="row-reverse"
            type="button"
            text={"Filter"}
            icon={filterSVG}
            onClick={FilterResults}
          />
          <Button
            variant="pill"
            alignment="center-horizontally"
            type="button"
            color="primary"
            text={"New Invoice"}
            icon={plusSVG}
            onClick={createNewInvoice}
          />
        </div>
      </header>

      <ul>
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
        text={"See more invoices"}
        flexflow="row-reverse"
        icon={downArrowSVG}
        onClick={SeeMore}
      />

      {isFilterShown && <FilterBy />}
    </section>
  );
};

export default InvoiceCardsList;
