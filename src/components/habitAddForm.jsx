import React, { memo } from 'react';

// memo는 PureComponent 처럼 props가 변경되지 않으면 memo 안의 함수가 호출되지 않는다.
const habitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault(); //  submit에는 리로딩이 기본 기능으로 있기 때문에 브라우저의 기본 기능을 막기위해 해당 함수 사용
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };

  console.log('addForm');
  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Insert your habit'
      />
      <button className='add-button'>Add</button>
    </form>
  );
});

export default habitAddForm;

/*import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
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
    console.log('addForm');
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

export default HabitAddForm;*/
