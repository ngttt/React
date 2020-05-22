import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap'

// onChangeValue = (e) => {
//     this.setState({
//       toDoList: e.target.value,
//     });
    
//   }



export default class FromInput extends Component {

    constructor(props) {
		super(props);
		this.state = {
      newToDo: '',
        };
    } 

    onChangeValue = (e) => {
    this.setState({
      newToDo: e.target.value,
    });
    }

    addToDo = () => {
        this.props.addToDo(this.state.newToDo);
    }

    render() {
        return (
            <div>
                <div className = 'form'> 
                    <FormGroup>
                    <Label ></Label>
                    <Input 
                        type="text" 
                        name="add-list" 
                        id="add-list" placeholder="Add in here" onChange={this.onChangeValue}/>
                    <button onClick={this.addToDo}>Add</button>
                    </FormGroup>
          </div>
            </div>
        )
    }
}
