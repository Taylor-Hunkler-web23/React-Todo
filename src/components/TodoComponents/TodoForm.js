import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            todo: ''
        };
    }


    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);

    };

    render() {



        return (
            <>
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.todo}
                    name="todo"
                    onChange={this.handleChanges}
                />
                <button className="add-btn">Add</button>
              
            </form>  
            <button className="clear-btn" onClick= {this.props.clearCompleted}>Clear</button>
            </>
        )
    }
}

export default TodoForm;