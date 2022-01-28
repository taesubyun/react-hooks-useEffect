import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
    const [count, setCount] = useState(100);

    const handleCount = () => {
        setCount(count + 1);
    };
    // 컴포넌트 렌더링 될때 마다 "안 녕 하 세 요" 실행
    useEffect(() => {
        console.log('안 녕 하 세 요');
    });

    return (
        <div className='App'>
            <div>
                <h2>react-hooks-useEffect</h2>
            </div>
            <div>
                <button onClick={handleCount}>카운트버튼</button>
                <span>카운트 : {count}</span>
            </div>
        </div>
    );
}

export default App;
