import { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
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
      inputVal: '',
    }));
  }

  deleteTodo(todoToDelete) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo != todoToDelete),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
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
        <Count count={this.state.todos.length} />
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}{' '}
              <button onClick={() => this.deleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
