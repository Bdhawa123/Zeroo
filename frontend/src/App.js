import React from 'react';
import HomeComponent from './Components/HomeComponent';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <BrowserRouter>
         <Nav/>
        <Switch>
          <Route exact path='/Home' component={HomeComponent}/>
          <Route exact path='/' component={HomeComponent}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
