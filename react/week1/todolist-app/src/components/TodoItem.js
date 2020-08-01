import React, { Component } from 'react';

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
    return (
			<ul>             
        {this.state.todoListItems.map((todo) => (
                <li key={todo.id}> {todo.description}, {todo.deadlineDate}</li>
           
		))}
		
			</ul>
        
     );

}
}
