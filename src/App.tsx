import './App.scss';
import './Styles/main.scss';
import axios from 'axios';
import Button from './components/Button';
import InvoiceCardsList from './components/InvoiceCardsList';
import Header from './components/Header';
import FilterBy from './components/FilterBy';
import {filterSVG, downArrowSVG} from "./images/index";

const filterBy = () => {
  <FilterBy />
}

async function fetchData() {
  try {
    const result = await axios.get("https://invoice-api-exercise.herokuapp.com/invoices");
    console.log(result.data);
  } catch(error) {
    console.error(error);
  }
}

fetchData();

function App() {
  return (
    <>
      <Header />

      <main>
        <section className='title-buttons'>
          <h2>Invoices - X</h2>
          <nav>
            <button type="button" className='filter-button' onClick={filterBy}>
                <span className='filter-button__text'>Filter</span>
                {filterSVG}
            </button>
            <Button class={'roundedButton'} text={'New Invoice'}/>
          </nav>
        </section>
        
        <InvoiceCardsList />

        <section className='seemore'>
          <button type="button" className="seemore__arrow-button">
            <p>See more invoices</p> 
            {downArrowSVG}
          </button>
        </section>
        
      </main>

    </>
  );
}

export default App;
