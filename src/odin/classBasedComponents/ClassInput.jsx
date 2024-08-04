import { Component } from 'react';
import Count from './Count';

let nextId = 3;

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, title: 'Just some demo tasks', isEditing: false },
        { id: 2, title: 'As an example', isEditing: false },
      ],
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
      todos: state.todos.concat({
        id: nextId++,
        title: state.inputVal,
        isEditing: false,
      }),
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
            <li key={todo.id}>
              {console.log(`todo id: ${todo.id}`)}
              {todo.isEditing ? (
                <input
                  type="text"
                  name="task-edit"
                  value={todo.title}
                  onChange={(e) => {
                    this.setState((state) => {
                      return {
                        ...state,
                        todos: state.todos.map((existingTodo) => {
                          if (existingTodo.id === todo.id) {
                            return {
                              ...todo,
                              title: e.target.value,
                            };
                          } else {
                            return existingTodo;
                          }
                        }),
                      };
                    });
                  }}
                />
              ) : (
                todo.title + ' '
              )}
              <button onClick={() => this.deleteTodo(todo)}>Delete</button>
              <button
                onClick={() => {
                  if (todo.isEditing) {
                    this.setState((state) => {
                      return {
                        ...state,
                        todos: state.todos.map((existingTodo) => {
                          if (existingTodo.id === todo.id) {
                            return {
                              ...todo,
                              isEditing: false,
                            };
                          } else {
                            return existingTodo;
                          }
                        }),
                      };
                    });
                  } else {
                    this.setState((state) => {
                      return {
                        ...state,
                        todos: state.todos.map((existingTodo) => {
                          if (existingTodo.id === todo.id) {
                            return { ...todo, isEditing: true };
                          } else {
                            return existingTodo;
                          }
                        }),
                      };
                    });
                  }
                }}
              >
                {todo.isEditing ? 'Resubmit' : 'Edit'}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
