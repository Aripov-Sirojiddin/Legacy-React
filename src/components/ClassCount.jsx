import { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.todos);
  }

  render() {
    return (
      <>
        <h1>Todos Count: {this.props.todos.length}</h1>
      </>
    );
  }
}

export default ClassCount;
