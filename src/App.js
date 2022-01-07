import './App.css';
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data"
import {Route,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import AllApps from './session';
import Home from './home';
import Footer from './Footer';

function App() {
  return (
  <>
  
  <Menu/> 
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/about' component={About}/>
  <Route exact path='/contact' component={Contact}/>
  <Route exact path='/session' component={AllApps}/>
  <Route component={Error}/>
  </Switch>

  {/* footer */}
  <br/><br/>
  <Footer/>
  {/* <Contact/
  <About/>>
  */}

   </>
   
  )
  }
export default App;
