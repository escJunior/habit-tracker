import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    // coponent가 보여질 때 수행
    console.log(`habit: ${this.props.habit.name} mounted`);
  }

  componentWillUnmount() {
    // coponent가 없어질 때 수행
    console.log(`habit: ${this.props.habit.name} will ummounted`);
  }

  handleIncremnet = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecremnet = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log(this.props.habit.name);
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncremnet}
        >
          <i className='fa-solid fa-square-plus'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecremnet}
        >
          <i className='fa-solid fa-square-minus'></i>
        </button>
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
