import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    todoList: [
      {
        id: 1,
        description: "Get out of bed",
        checked: false,
      },
      {
        id: 2,
        description: "Brush teeth",
        checked: false,
      },
      {
        id: 3,
        description: "Eat breakfast",
        checked: false,
      },
    ],
    todoAddNewItem: " ",
  };

  addTodo = (todoAddNewItem) => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          id: 4,
          name: todoAddNewItem,
          description: "random text",
          completed: false,
        },
      ],
    });
  };

  deleteTodo = (itemId) => {
    let todo = this.state.todoList.filter(
      (element, elementIndex) => elementIndex !== itemId
    );
    this.setState({ todoList: todo });
  };

  handleCheckbox = (itemId) => {
    this.setState({
      todoList: this.state.todoList.map((todo, todoIndex) => {
        if (todoIndex === itemId) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addTodo}>Add todo</button>
        <Todo
          todoList={this.state.todoList}
          deleteTodo={this.deleteTodo}
          handleCheckbox={this.handleCheckbox}
        />
      </div>
    );
  }
}

class Todo extends Component {
  render() {
    if (this.props.todoList.length === 0) return <p>No todo items</p>;

    let todoAppListItems = this.props.todoList.map((item, itemId) => {
      return (
        <div key={itemId}>
          <li>
            <label
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >
              {item.description}
            </label>
            <input
              type="checkbox"
              checked={!!item.checked}
              onChange={() => {
                this.props.handleCheckbox(itemId);
              }}
            />
            <button
              onClick={() => {
                this.props.deleteTodo(itemId);
              }}
            >
              Delete
            </button>
          </li>
        </div>
      );
    });
    return (
      <div>
        <ul>{todoAppListItems}</ul>
      </div>
    );
  }
}
