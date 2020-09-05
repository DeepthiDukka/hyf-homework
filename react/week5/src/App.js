import React from 'react';
import "./App.css";
import UserContext from "./components/UserContext";
import Userlist from "./components/UserList";
import Profile from "./components/UserProfile";
import About from "./components/About";
import { BrowserRouter, Route, Switch, } from "react-router-dom";

const ContextProvider = UserContext.Provider;

function fetchGithubUser(query) {
  const URL = `https://api.github.com/search/users?q=${query}`;
  return fetch(URL).then(response => response.json());
}


class App extends React.Component{
  state = {
    searchTerm: '',
    users: [],
    isLoading: false
  }

  changeSearchTerm = (event) => {
    const searchedValue = event.target.value
    this.setState({ 
      searchTerm: searchedValue,
      isLoading: true
    })
    fetchGithubUser(searchedValue).then(data => {       
      this.setState({ 
        users: data.items,
        isLoading: false
      })
    }) 
  }

  render() {
    const contextValue = {
      searchTerm: this.state.searchTerm,
      isLoading: this.state.isLoading,
      users: this.state.users,
      changeSearchTerm: this.changeSearchTerm
    }
    return (
      <ContextProvider value={contextValue}>
        <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:username">
              <Profile />
            </Route>
            <Route path="/">
                <Userlist />
            </Route>            
          </Switch>
        </BrowserRouter>      
      </ContextProvider>
    )
  }
}

export default App;
