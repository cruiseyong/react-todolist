/* eslint-disable*/

import React, { useState } from 'react';
import './App.css';


class ToDoListItem extends React.Component {
  renderTitle() {
      return (
          <span>{this.props.title}</span>
      )
  }


  rednderButtons(){
      return (
         <span>
         <button classNmae="EditButton">Edit</button>
         <button classNmae="DeleteButton">Delete</button> 
         </span>
      )
  }

 render() {
  return (
      <div className="list-item">
          <span className="title">
            {this.renderTitle()}
          </span>
          <span className="actions">
             {this.rednderButtons()}
          </span>
      </div>
  ) 
 } 
}

export default ToDoListItem;

