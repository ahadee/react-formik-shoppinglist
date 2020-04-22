import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import FormInput from './components/FormInput/FormInput'
import {ResultList} from './components/ResultList/ResultList'

function App() {
  return (
    <div>
      <Navigation />
      <FormInput />
      <ResultList />
    </div>
  );
}

export default App;
