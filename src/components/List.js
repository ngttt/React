import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {

   

    render() {
        return (
            <div className='list'>

                {this.props.list.map((el) => {
                    return <ListItem job={el.name}/>
                })
                }
                
                
            </div>
        );
    }
}