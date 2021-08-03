import logo from "./logo.svg";
import "./App.css";
import { TransactionLine } from "@cezinha/mini-app-components.ui.transaction-line";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div style={{ margin: "16px", maxWidth: "798px" }}>
        <TransactionLine
          date={new Date()}
          title='Título da transação'
          description='Pagamento de boleto'
          type='debit'
          value={99.99}
          tag='service'
          showDay={true}
        />
      </div>
    </div>
  );
}

export default App;
