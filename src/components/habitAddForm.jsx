import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); //  submit에는 리로딩이 기본 기능으로 있기 때문에 브라우저의 기본 기능을 막기위해 해당 함수 사용
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='Insert your habit'
        />
        <button className='add-button'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
