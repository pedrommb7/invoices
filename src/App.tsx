import './App.scss';
import './styles/main.scss';
import Button from './components/Button';
import InvoiceCardsList from './components/invoices/InvoiceCardsList';
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
        <section className='title-buttons'> {/* filter__header */}
          <h1>Invoices - X</h1>
          <div className='title-buttons__buttons'> {/* filter__button--wrapper */}
            <Button class={'filter-button'} text={'Filter'} svg={filterSVG} onClick={filterResults}/>
            <Button class={'button--rounded'} text={'New Invoice'} svg={plusSVG} onClick={createNewInvoice}/>
          </div>
        </section>
        
        <InvoiceCardsList />

        <section className='link'>
          <Button class={'link__arrow-button align--center'} text={'See more invoices'} svg={downArrowSVG} onClick={seeMore} />
        </section>
        
      </main>

    </>
  );
}

export default App;
