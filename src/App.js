import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import StartUp from './Pages/StartUp';
import Login from './Pages/Login';





function App() {
  return (
    <>
      <Router >
        <Route path="/" exact component={Home}/>
        <Route path="/startup" exact component={StartUp}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        
      </Router>  
    </>
  );
}

export default App;
