import "./styles/main.scss";
import InvoiceCardsList from "./components/InvoiceCard/InvoiceCardsList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main>
        <InvoiceCardsList />
      </main>
    </>
  );
}

export default App;
