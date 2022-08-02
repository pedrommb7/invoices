import React, { useEffect, useState } from "react";
import InvoiceCard from "./InvoiceCard";
import { InvoiceToShow } from "./declarations";
import { getCardList } from "components/InvoiceCard/actions";
import Button from "components/Button/Button";
import FilterBy from "../FilterBy/FilterBy";
import { downArrowSVG, filterSVG, plusSVG } from "images";
import "../../styles/trumps/_hide.scss";

const createNewInvoice = () => {};
const seeMore = () => {};

const InvoiceCardsList = () => {
  let [cardListing, setcardListing] = useState([] as InvoiceToShow[]);
  let [isFilterShown, setIsFilterShown] = useState(false);

  const FilterResults = () => {
    setIsFilterShown((current) => !current);
    if (isFilterShown === true) {
      {
      }
    }
  };

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

  return (
    <section className="align--vertically" id="main-content">
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
            variant="primary"
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
        icon={downArrowSVG}
        onClick={seeMore}
      />

      <FilterBy />
      {/* <FilterResults isShown={isFilterShown} /> */}
    </section>
  );
};

export default InvoiceCardsList;
