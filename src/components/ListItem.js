import React, { Component } from 'react'

export default class ListItem extends Component {
   
updateParent = () => {
    this.props.updateParent();
}

render() {
    return (
        <div>

             {/* <h1>This is a list of {this.props.name}</h1>
            <button onClick={this.updateParent}>Click</button>  */}
            {this.props.job}

        </div>
    )
}
}