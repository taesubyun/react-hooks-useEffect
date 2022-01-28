import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState('');
    const handleCount = () => {
        setCount(count + 1);
    };

    const handleInputChenge = (e) => {
        setName(e.target.value);
    };
    // 컴포넌트 렌더링 될때 마다 "안 녕 하 세 요" 매번 실행
    // useEffect(() => {
    //     console.log('안 녕 하 세 요');
    // });

    // 마운트 될때 + d.array 안에 item이 변경될 때만
    // useEffect(() => {
    //     console.log('COUNT 변화');
    // }, [count]);

    //컴포너틑 최초 렌더링 될때만 마운트 (두 번째 인자로 빈 배열)
    // useEffect(() => {
    //     console.log('두번째 인자로 빈배열을 줄 경우');
    // }, []);

    return (
        <div className='App'>
            <div>
                <h2>react-hooks-useEffect</h2>
            </div>
            <div>
                <button onClick={handleCount}>카운트버튼</button>
                <span>카운트 : {count}</span>
            </div>
            <div>
                <input type='text' value={name} onChange={handleInputChenge} />
                <span>Name : {name}</span>
            </div>
        </div>
    );
}

export default App;
