
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Home from './routecomponent/Home';
import PremiumBooks from './routecomponent/PremiumBooks';
import Contact from "./routecomponent/Contact";
import About from "./routecomponent/About";
import Bookstates from './UseContext/Bookstates'
import { Toaster } from 'react-hot-toast';
import ShowContent from "./routecomponent/ShowContent";

function App() {
  return (
    <>
    <Bookstates>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/premium">
         <PremiumBooks/>
        </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
            <Route exact path="/showContent">
              <ShowContent />
            </Route>
      </Switch>
      </Router>
        <Toaster />
      </Bookstates>
    </>
  );
}

export default App;
