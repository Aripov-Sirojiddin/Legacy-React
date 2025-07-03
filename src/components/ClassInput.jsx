/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import ClassCount from "./ClassCount";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
    };
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDeleteTodo(todo) {
    this.setState((state) => ({
      todos: state.todos.filter((todoInList) => todoInList != todo),
      inputVal: "",
    }));
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  render() {
    return (
      <section>
        <ClassCount todos={this.state.todos}/>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <div key={`${todo}-div`}>
              <li key={todo}>{todo}</li>
              <button key={`${todo}-delete-button`} onClick={() => this.handleDeleteTodo(todo)}>Delete {todo}</button>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
