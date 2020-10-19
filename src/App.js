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
        <Jumbotron titulo="Titulo Jumbotron"></Jumbotron>
        <List></List>
        <Card title="Titulo0" random={Math.random().toFixed(2)} techList={["JavaScript", "PHP", "Node.js"]}></Card>
        <Card title="Titulo1" random={Math.random().toFixed(2)} techList={["JavaScript", "PHP", "Node.js"]}></Card>
        <Card title="Titulo2" random={Math.random().toFixed(2)} techList={["JavaScript", "PHP", "Node.js"]}></Card>
      </div>
    );
  }
}

export default App;
