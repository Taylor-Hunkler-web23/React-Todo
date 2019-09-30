import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: ''
        }
    }


    render() {



        return (
            <form>
                <input
                    type="text"
                    value={this.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
            </form>
        )
    }
}

export default TodoForm;