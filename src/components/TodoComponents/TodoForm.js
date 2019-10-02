import React from 'react';
import { Form } from 'semantic-ui-react';

class TodoForm extends React.Component{
    constructor() {
        super()
    }
}


render() {
    return(
        <form>
            <input
                type="text"
                value={this.StaticRange.value}
                onChange={this.handleChange}>
            />
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm;