import React from 'react';
import './App.css';
import Card from "./Card";
import Counter from './Counter';
import FormItem from './FormItem';
import Jumbotron from "./Jumbotron";
import KeyReviewer from './KeyReviewer';
import List from "./List";

class App extends React.Component
{
  render()
  {
    return (
      <div className="App">


        <KeyReviewer></KeyReviewer>

{/* 


         <br></br>
        <br></br>
        
        <FormItem></FormItem>
        <Counter></Counter>

        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <Jumbotron titulo="Titulo Jumbotron"></Jumbotron>
        <List></List>
        <Card title="Titulo0" random={Math.random().toFixed(2)} techList={["JavaScript", "PHP", "Node.js"]}></Card> */}
      </div>
    );
  }
}

export default App;
