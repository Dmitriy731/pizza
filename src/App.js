import { Route } from "react-router-dom";
import './App.css';
import {Header, Contents, Basket} from './components';
import React, { useState } from "react";

const header = {
  basket: {
    sum: 500,
    count: 3,
  }
}

const categories= [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
];
const sort= [
  'популярности',
  'цене',
  'алфавиту',
];

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((res) => res.json())
    .then((res) => setPizzas(res.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header header={header} />
      <div className="content">
          <Route path="/" render={() => <Contents categories={categories} sort={sort} pizzas={pizzas} />} exact />
          <Route path="/basket" ><Basket basket={true} /></Route>
      </div>
    </div>
  );
}

export default App;
