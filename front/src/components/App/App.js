import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Dashboard from '../../views/Dashboard'
import Layout from '../../components/Layout'

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
      </Layout>
    );
  }
}

export default App;
