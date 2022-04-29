/* eslint-disable*/

import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import ToDoCreate from './ToDoCreate';

const toDoItems = [
  {
    title:'아침 먹기',
    completed: false
  },
  {
    title:'혈압약 우루사 먹기',
    completed: false
  },
  {
    title:'세차 하기',
    completed: false
  },
  {
    title:'집에 가기',
    completed: false 
  } 
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems
    }
  }

  createItem = (item) => {
    toDoItems.unshift({
      title:item,
      completed: false,
    });
    
    this.setState({
      toDoItems: this.state.toDoItems
    })
  }
 render() {
  return (
    <div className="container">
      <div class="header">
      <h1>할일 목록</h1>
      </div>
      <ToDoCreate createItem={this.createItem}></ToDoCreate>
      <ToDoList toDoItems={this.state.toDoItems} />
    </div>
  ) 
 }
}

export default App;

