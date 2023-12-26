import './App.css';
import Header from './common/header/Header';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from "./components/flashDeals/Data"

function App() {
 // stpe 1: fetch data from database
  const { productItems } = Data

  const {cartItem, }
  return (
    <>
      <Router>
      <Header />
      <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
    </Router>
    </>
  )
}

export default App;
