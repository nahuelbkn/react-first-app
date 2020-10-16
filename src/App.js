import React from 'react';
import './App.css';
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import List from "./List";

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        <Jumbotron></Jumbotron>
        <List></List>
        <Card></Card>
        <Card></Card>
      </div>
    );
  }
}

export default App;
