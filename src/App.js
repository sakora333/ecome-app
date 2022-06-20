import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Login from './components/login';
import { Switch, Route } from 'react-router-dom';
import Products from './components/products';
import Product from './components/product';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/products/:id' component={Product} />


        </Switch>
      </>
    </div>
  );
}

export default App;
