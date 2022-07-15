import React, { useEffect, useState } from 'react'
import axios from "axios";
import InvoiceCard from './InvoiceCard';
import { InvoiceToShow } from './common';

const InvoiceCardsList = () => {

  const [cardListing, setcardListing] = useState([] as InvoiceToShow[]);

  useEffect(() => {
    getCardList();
  }, []);

  const getCardList = async () => {
    try {
      const result = await axios.get(
        "https://invoice-api-exercise.herokuapp.com/invoices"
      );
      
      const invoiceList = [] as InvoiceToShow[];
      result.data.forEach((invoiceData: any) => {
        invoiceList.push({
          ID: invoiceData.invoiceId,
          price: invoiceData.items[0].price,
          date: invoiceData.invoiceDate,
          state: invoiceData.invoiceState,
          name: invoiceData.client.name,
          description: invoiceData.invoiceDescription,
        });
      });

      setcardListing(invoiceList);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
      <ul>
        {cardListing.map((element) => {
            return (
              <li>
                <InvoiceCard data={element}/>
              </li> 
            )        
          
        })}
      </ul>
    )
  }

export default InvoiceCardsList