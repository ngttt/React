import React from 'react';
import './App.css';
import List from '../components/List';
import FromInput from '../components/Input';

const toDoList = [
	{ id:1, name: 'Đi học', isDone: false },
	{ id:2, name: 'Đi làm',  isDone: false },
	{ id:3, name: 'Ăn cơm',  isDone: false },
	{ id:4, name: 'Rửa bát',  isDone: false },
];



export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      toDoList: toDoList,
      newToDo: '',
		};
  }
  
  componentDidMount() {
    console.log('did mount');
  }

  static getDerivedStateFromProps (props, state) {
    return state;
  }

  

  removeItem = (id) => {
    const list = [...this.state.toDoList]; // mutation(biến đổi) và inmutation(bất biến), nên copy qua một cái mảng khác chứ không chạy trực tiếp trên list đã tạo 
    // list.splice(index,1); // xóa 1 phần thử ở vị trí nào đó, sô phần tử bị xóa
    // if (list[index].isDone === false)
    // {
    //   list[index].isDone = true;
    // }
    // else {
    //   list[index].isDone = false;
    // };
    
    // this.setState({
    //   toDoList: list,
    // });
    const index = list.findIndex((el) => el.id === id);
    if (index !== -1)
    {
      list[index].isDone = !list[index].isDone; 
      this.setState({
        toDoList: list,
       
      });
    }

  };

  addToDo = (todo) => {
    const newToDo = {
      id: this.state.toDoList.length+1,
      isDone: false,
      name: todo,
    };
    const newList = [...this.state.toDoList, newToDo];

    this.setState({
      toDoList: newList,
    });
  };

	render() {
		return (
      <div> 
        <FromInput addToDo={this.addToDo} />
			<div className='list-container'>
      
          <div>
              <h3>To Do</h3>   
                <List list = { this.state.toDoList.filter(el => !el.isDone)}
                  removeItem={this.removeItem} />
            </div>
 
            <div>
            <h3>Done</h3> 
            <List  
              list = {this.state.toDoList.filter(el => el.isDone === true )}
              removeItem={this.removeItem} />
            </div>
			</div>

      <div>
            {this.state.toDoList.filter(el => el.isDone === true).length}/{this.state.toDoList.length}
          </div>

      </div> 
		);
	}
}