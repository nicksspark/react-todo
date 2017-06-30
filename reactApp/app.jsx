/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ['Rake the leaves', 'Feed my rabbit', 'Bear children'];

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map(task => <Todo task={task} />)}
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
        {this.props.task}
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
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root'),
);
