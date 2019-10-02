import React from 'react';
import { Form } from 'semantic-ui-react';

class TodoForm extends React.Component{
    constructor() {
        super()
    }
}
handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addItem(event, this.state.value)

    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
