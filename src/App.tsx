import './styles/main.scss';
import Button from 'components/Button/Button';
import InvoiceCardsList from './components/InvoiceCard/InvoiceCardsList';
import Header from './components/Header';
import FilterBy from './components/FilterBy';
import Wrapper from 'components/Wrapper';
import {filterSVG, downArrowSVG, plusSVG} from "./images/index";
import './styles/trumps/_align.scss';
import './styles/trumps/_flexflow.scss';

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
              <Button variant="link" alignment="center" flexflow='row-reverse' type="button" text={'Filter'} icon={{svg: filterSVG, side:'right'}} onClick={filterResults}/>
              <Button variant="primary" type="button" color="primary" text={'New Invoice'} icon={{svg: plusSVG, side:'left'}} onClick={createNewInvoice}/>
            </div>
          </header>

        </section>
        
        
        <InvoiceCardsList />
        <Button mgAmount='tb-2rem' pdAmount="05rem" variant="link" alignment="center" type="button" color="primary" text={'See more invoices'} icon={{svg: downArrowSVG, side:'left'}} onClick={seeMore} />
        
      </main>

    </>
  );
}

export default App;
