import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Search } />
      </BrowserRouter>
    );
  }
}

export default App;
