import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleTimer from './components/ToggleTimer';

function App() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState('');
    const [showTimer, setShowTimer] = useState(false);

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
            <div
                style={{
                    borderBottom: '1px solid grey',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <h2>react-hooks-useEffect</h2>
            </div>
            <div className='container' style={{ paddingTop: '20px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <button
                        style={{
                            border: 'none',
                            borderRadius: '7px',
                            width: '250px',
                            height: '40px',
                        }}
                        onClick={handleCount}
                    >
                        카운트버튼
                    </button>
                    <span style={{ marginLeft: '25px' }}>카운트 : {count}</span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <input
                        style={{ width: '250px', height: '40px' }}
                        type='text'
                        value={name}
                        onChange={handleInputChenge}
                    />
                    <span style={{ marginLeft: '25px' }}>Name : {name}</span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    {/* showTimer가 true일 때만 보여줌 */}
                    {showTimer && <ToggleTimer />}
                    <button
                        style={{ width: '250px', height: '40px' }}
                        onClick={() => setShowTimer(!showTimer)}
                    >
                        Toggle Timer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
