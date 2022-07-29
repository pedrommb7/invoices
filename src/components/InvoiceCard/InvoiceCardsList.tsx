import React, { useEffect, useState } from "react";
import axios from "axios";
import InvoiceCard from "./InvoiceCard";
import { InvoiceToShow } from "../common";
import { getCardList } from "components/InvoiceCard/actions";
import Button from "components/Button/Button";
import { filterSVG, plusSVG } from "images";
import FilterBy from "components/FilterBy/FilterBy";

const createNewInvoice = () => {};

const InvoiceCardsList = () => {
  let [cardListing, setcardListing] = useState([] as InvoiceToShow[]);
  let [statefilterWindow, setStatefilterWindow] = useState(false);

  const FilterResults = () => {
    setStatefilterWindow((current) => !current);
    if (statefilterWindow === true) {
      <FilterBy />;
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
    <section>
      <header className="filter__header">
        <h1>Invoices - {cardListing.length}</h1>

        <div className="filter__button--wrapper">
          <Button
            variant="link"
            alignment="center"
            flexflow="row-reverse"
            type="button"
            text={"Filter"}
            icon={{ svg: filterSVG }}
            onClick={FilterResults}
          />
          <Button
            variant="primary"
            type="button"
            color="primary"
            text={"New Invoice"}
            icon={{ svg: plusSVG }}
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
    </section>
  );
};

export default InvoiceCardsList;
