import logo from './logo.svg';
import './App.css';

import {Home} from './Home'
import {Books} from './Books';
import {Apply} from './Apply';
import {Reservation} from './Reservation';
import {Pay} from './Pay';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Online Library 
         </h3> 

         <Navigation/>
         <Switch>
           <Route path='/' component={Home} exact/>
           <Route path='/Books' component={Books}/>
           <Route path='/Apply' component={Apply}/>
           <Route path='/Reservation' component={Reservation}/>
           <Route path='/Pay' component={Pay}/>
           


         </Switch>
      
    </div>
    </BrowserRouter>
  );
}


export default App;
