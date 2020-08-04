import React, { Component } from 'react';

export default class Item extends Component {
render(){
    
        return(
          <div className='list-item'>
            *   {this.props.description}, {this.props.deadlineDate}
           
          </div>
        );
      }
    }
