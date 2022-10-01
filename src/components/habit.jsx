import React, { Component } from 'react';

class Habit extends Component {
  handleIncremnet = () => {
    this.props.onIncrement(this.props.habit.name);
  };

  handleDecremnet = () => {
    this.props.onDecrement(this.props.habit.name);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit.name);
  };

  render() {
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
