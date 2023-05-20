import React, { Component } from 'react';

export class TodoBanner extends Component {

    render = () => 
        <h3 className="bg-primary text-white text-center p-2">
            {this.props.name}'s To Do List
            ({this.props.tasks.filter(t => !t.done).length} items to do)

            <h5 className="float-right"> Total Items in the list : {this.props.tasks.length}</h5> 
        </h3>
    
}