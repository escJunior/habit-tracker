// import React, { Component, useState } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

// 중요!!! prop 또는 state 변경시 class 에서 멤버변수는 처음 만들어질 때 한 번만 만들어지고 render() 만 반복적으로 호출, 함수는 코드블럭 안 전체가 계속 호출
// useState는 React Hook API 중 하나로 useState에 연결된 컴포넌트의 state는 따로 저장이 되어있어 계속 호출해도 초기화 되지 않고 값을 유지할 수 있다.
// 매번 호출할 때마다 새로운 Ref를 생성하지 않기위해 useRef 사용
const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // 2번째 인자가 업을 경우 mount, update 항상 호출
  // 2번째 인자에 변수를 넣으면 해당 변수가 변경될 때만 호출
  // [] 빈 배열을 넣으면 mount 될 때만 호출
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]);
  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fa-solid fa-square-plus'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

/*class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className='habit'>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>{this.state.count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncremnet}
        >
          <i className='fa-solid fa-square-plus'></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;*/
