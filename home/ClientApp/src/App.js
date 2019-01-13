import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Welcome } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SocialMedia } from './components/SocialMedia';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Welcome} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/SocialMedia' component={SocialMedia} />
      </Layout>
    );
  }
}
