import './styles/main.scss';
import Button from 'components/Button/Button';
import InvoiceCardsList from './components/InvoiceCard/InvoiceCardsList';
import Header from './components/Header';
import FilterBy from './components/FilterBy';
import {filterSVG, downArrowSVG, plusSVG} from "./images/index";

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
              <Button class={'filter-button'} type="button" text={'Filter'} svg={filterSVG} onClick={filterResults}/>
              <Button class={'button--rounded'} type="button" text={'New Invoice'} svg={plusSVG} onClick={createNewInvoice}/>
            </div>
          </header>

        </section>
        
        
        <InvoiceCardsList />
        <Button class={'link arrow-button align--center'} type="button" text={'See more invoices'} svg={downArrowSVG} onClick={seeMore} />
        
      </main>

    </>
  );
}

export default App;
