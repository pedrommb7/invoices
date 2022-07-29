import axios from "axios";
import { InvoiceToShow } from "../common";
import { formatDate } from "../utils";

export const getCardList = async () => {
      return await axios.get(
        "https://invoice-api-exercise.herokuapp.com/invoices"
      ).then((result) => {
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
        return invoiceList;
      });

      
  };