/* eslint-disable*/

import React, { useState } from 'react';
import './App.css';


class ToDoCreate extends React.Component {
 
 handleSumit = (e) => {
   e.preventDefault();
   
   if(!this.refs.createNewItemInput.value.trim()) {
  alert('내용을 입력하세요');
  this.refs.createNewItemInput.vlaue ='';
 }   

  this.props.createItem(this.refs.createNewItemInput.value);
  this.refs.createNewItemInput.vlaue ='';
}
 render() {
 return (
   <div className="create-container">
       <form className="create-form" onSubmit={this.handleSumit}>
           <input type="text" placeholder="내용을 입력하세요" ref="createNewItemInput"/>
           <button>입력</button>
       </form>
   </div>
  )
 } 
}

export default ToDoCreate;

