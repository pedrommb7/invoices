import "./styles/main.scss";
import Button from "components/Button/Button";
import InvoiceCardsList from "./components/InvoiceCard/InvoiceCardsList";
import Header from "./components/Header";
import FilterBy from "./components/FilterBy/FilterBy";
import { filterSVG, downArrowSVG, plusSVG } from "./images/index";
import "./styles/trumps/_align.scss";
import "./styles/trumps/_flexflow.scss";

const filterResults = () => {
  <FilterBy />;
};
const createNewInvoice = () => {};
const seeMore = () => {};

function App() {
  return (
    <>
      <Header />

      <main>
        <InvoiceCardsList />
        <Button
          mgAmount="tb-2rem"
          pdAmount="05rem"
          variant="link"
          alignment="center"
          type="button"
          color="primary"
          text={"See more invoices"}
          icon={{ svg: downArrowSVG }}
          onClick={seeMore}
        />
      </main>
    </>
  );
}

export default App;
