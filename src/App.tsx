import './styles/main.scss';
import Button from 'components/Button/Button';
import InvoiceCardsList from './components/InvoiceCard/InvoiceCardsList';
import Header from './components/Header';
import FilterBy from './components/FilterBy';
import Wrapper from 'components/Wrapper';
import {filterSVG, downArrowSVG, plusSVG} from "./images/index";
import './styles/trumps/_align.scss';
import axios from 'axios';

const filterBy = () => {
  <FilterBy />
}
const createNewInvoice = () => {};
const filterResults = () => {};
const seeMore = () => {};



function App() {


  return (
    <>
      <Header />

      <main>
        <section>
          <header className='filter__header'>
            <h1>Invoices - X</h1>
            <div className='filter__button--wrapper'>
              <Button variant="link" type="button" text={'Filter'} icon={{svg: filterSVG, side:'right'}} onClick={filterResults}/>
              <Button variant="rounded" type="button" color="primary" text={'New Invoice'} icon={{svg: plusSVG, side:'left'}} onClick={createNewInvoice}/>
            </div>
          </header>

        </section>
        
        
        <InvoiceCardsList />
        <Button pdAmount="05rem" variant="link" alignment="center" type="button" color="primary" text={'See more invoices'} icon={{svg: downArrowSVG, side:'left'}} onClick={seeMore} />
        
      </main>

    </>
  );
}

export default App;
