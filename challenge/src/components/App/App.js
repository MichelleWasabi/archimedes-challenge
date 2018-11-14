import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// components
import ItemsListContainer from '../../containers/ItemsListContainer';

// static
import logo from '../../logo.svg';
import './App.css';


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.orphe.us/graphql'}),
  cache: new InMemoryCache()
});


class App extends Component {
  render() {
    return (
    	<ApolloProvider
    		client={client}
    	>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <section>
            <ItemsListContainer />
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
