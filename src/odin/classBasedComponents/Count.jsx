import { Component } from 'react';

export default class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Total todos: {this.props.count}</div>;
  }
}
