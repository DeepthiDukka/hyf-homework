import React, { Component } from 'react';
import Item from './Item';

export default class TodoItem extends Component {
    
    state =  {
        todoListItems:[
            {
                id: 1,
                description: 'Get out of bed',
                deadlineDate: 'Wed Sep 13 2017',
            },
            {
                id: 2,
                description: 'Brush Teeth',
                deadlineDate: 'Thu Sep 14 2017',
            },
            {
                id: 3,
                description: 'Eat breakfast',
                deadlineDate: 'Fri Sep 15 2017',
            }
    ]};        

    render() { 
        const TodoList = this.state.todoListItems.map((todo) => (
            <Item
                key={todo.id}
                description={todo.description}
                deadlineDate={todo.deadlineDate}
            />
        ));
        return <ul>{TodoList}</ul>;
    
    }
    }