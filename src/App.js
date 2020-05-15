import React from 'react';
import './App.css';
import List from './components/List';

const toDoList = [
  {name: 'di hoc'},
  {name: 'nau com'},
  {name: 'an sang'},
  {name: 'an trua'},
  {name: 'an chieu'},
  {name: 'an toi'},
  {name: 'di cho'}

]
export  default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: toDoList,

    };
  }

  // onClickButton = () => {
  //   this.setState({
  //     name: 'Tan',
  //   })
  
hide = (e) => {
    console.log(this.state.toDoList.indexOf('di cho'));
    this.setState({name:''});
    
  }
  
  
render () {
  return (
    <div onClick={this.hide}>
      <List list={this.state.toDoList} />

    </div>
  );
  }
}
