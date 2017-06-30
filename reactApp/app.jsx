/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  { taskText: 'rake the leaves', completed: true },
  { taskText: 'feed my rabbit', completed: false },
  { taskText: 'bear children', completed: false },
];

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(taskObj => <Todo task={taskObj} />)}
      </ul>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <button>X</button>
        {this.props.task.completed ?
          <strike>{this.props.task.taskText}</strike> :
          this.props.task.taskText}
      </li>
    );
  }
}

class InputLine extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Task" />
        <input type="submit" value="Add todo" />
      </form>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    this.setState({
      todos: dummyData,
    });
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root'),
);
