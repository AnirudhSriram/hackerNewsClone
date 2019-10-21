import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './header';
import Topics from './topics';
function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Hacker News`;
  });
  return (
    <div className="App">
    
      {/* <Topics /> */}
      <Router>
        <div>
          <nav>
            <Link to="/topics">Topics</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/topics">
            <Topics/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
function Home() {
  return <div>
      <Header />
    <Topics />
    </div>;
}