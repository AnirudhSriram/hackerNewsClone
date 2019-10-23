import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './header';
import Topics from './topics';
import MyContext from './context';

class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      searchQuery: '',
      allTopics: []
    }
  }

  render() {
    const setSearchQuery = (data) => {
      if (data !== '') {
        this.setState({
          searchQuery: data,
          topics: filterTopics(data)
        })
      } else {
        this.setState({
          searchQuery: '',
          topics: this.state.allTopics
        })
      }

    }

    const filterTopics = (data) => {
      let filterdTopics = []
      let topics = this.state.topics;

      topics.forEach((item) => {
        let tempstr = item.title;
        tempstr = tempstr.toLowerCase();
        if (tempstr.includes(data.toLowerCase())) {
          filterdTopics.push(item);
          this.setState({
            topics: filterdTopics
          })
        }
      })
      return filterdTopics;

    }

    const setTopics = (data) => {
      this.setState({
        allTopics: data,
        topics: data
      })

    }
    return (
      <MyContext.Provider value={{
        state: this.state,
        setSearchQuery: setSearchQuery,
        setTopics: setTopics
      }}>
        {this.props.children}
      </MyContext.Provider>
    )

  }
}

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>

    );
  }

}

export default App;

function Home() {

  return <MyProvider>
    <div>
      <Header />
      <Topics />
    </div>;
  </MyProvider>
}