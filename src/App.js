import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Screens/Home/Home";
import Books from "./components/Screens/BookPage/Books";
import Login from "./components/Screens/User/Login";
import SignUp from "./components/Screens/User/SignUp";
import Comments from "./components/Screens/Comments/Comments";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/books" component={Books}/>
          <Route path="/session" component={Login}/>
          <Route path="/createUser" component={SignUp}/>
          <Route path="/comments" component={Comments}/>
        </Switch>
        <Footer/>
      </div>

    </Router>
      
     
    
  );
}

export default App;
