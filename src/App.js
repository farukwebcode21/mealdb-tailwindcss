import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';
import { About } from './components/About';
import Contact from './components/Contact';
import Details from './components/Details/Details';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Service from './components/Service';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
       <Route path="/home">
         <Home/>
       </Route>
       <Route path="/detail/:details">
         <Details/>
       </Route>
       <Route path="/service">
         <Service/>
       </Route>
       <Route path="/about">
         <About/>
       </Route>
       <Route path="/contact">
         <Contact/>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
         <PageNotFound/>
       </Route>
      </Switch>
    </Router> 
    </>
  );
}

export default App;
