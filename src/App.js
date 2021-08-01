import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import StartUp from './Pages/StartUp';


function App() {
  return (
    <>
      <Router >
        <Route path="/" exact component={Home}/>
        <Route path="/startup" exact component={StartUp}/>

      </Router>  
    </>
  );
}

export default App;
