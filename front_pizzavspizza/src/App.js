import logo from './logo.svg';
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://st.depositphotos.com/2640119/3010/i/950/depositphotos_30103299-stock-photo-pepperoni-pizza.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
