import React from 'react';
import HomeComponent from './Components/HomeComponent';
import {BrowserRouter,Switch,Route, HashRouter} from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <HashRouter>
         <Nav/>
        <Switch>
          <Route exact path='/Home' component={HomeComponent}/>
          <Route exact path='/' component={HomeComponent}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
