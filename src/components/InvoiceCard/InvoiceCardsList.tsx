import React, { useEffect, useState } from 'react'
import axios from "axios";
import InvoiceCard from './InvoiceCard';
import { InvoiceToShow } from '../common';

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
          date: formatDate(invoiceData.invoiceDate),
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

  const formatDate = (date: string) => {
    const today = new Date(date);
    const month =  today.getMonth();
    const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    return "Due " + today.getDate() + " " + m[month] + " " + today.getFullYear();
  }
  
    return (
      <ul>
        {cardListing.map((element, index) => {
            return (
              <li key={index}>
                <InvoiceCard data={element}/>
              </li> 
            )        
          
        })}
      </ul>
    )
  }

export default InvoiceCardsList