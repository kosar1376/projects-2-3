
import React,{useState,useEffect} from 'react';
import "./App.css"
import axios from 'axios';
import Sidebar from './components/Sidebar';
import { Route,Switch } from 'react-router-dom';
import Products from './components/Products';
import Login from './components/Login';
import Details from './components/Details';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  }, []);


  return (
    <div>
    
      <Sidebar/>
      <div>
      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/products/:id'} render={()=><Details data={data}/>}/>
          <Route  path={'/products'} render={()=><Products data={data}/>}/>
          <Route path={'/login'} render={()=><Login/>}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
