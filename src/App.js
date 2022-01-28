import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleTimer from './components/ToggleTimer';

function App() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState('');
    const [showTimer, setShowTimer] = useState(false);

    const handlePlusCount = () => {
        setCount(count + 1);
    };

    const handleMinusCount = () => {
        setCount(count - 1);
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
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottom: '2px solid #ececec',
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
                            borderRadius: '8px',
                            backgroundColor: '#FF5959',
                            width: '250px',
                            color: '#EEF2FF',
                            height: '40px',
                            cursor: 'pointer',
                        }}
                        onClick={handlePlusCount}
                    >
                        +1
                    </button>
                    <button
                        style={{
                            border: 'none',
                            borderRadius: '8px',
                            backgroundColor: '#FC997C',
                            width: '250px',
                            color: '#EEF2FF',
                            height: '40px',
                            cursor: 'pointer',
                            marginLeft: '10px',
                        }}
                        onClick={handleMinusCount}
                    >
                        -1
                    </button>
                    <span style={{ marginLeft: '25px', fontWeight: 'bold' }}>
                        카운트 : {count}
                    </span>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <input
                        style={{
                            border: '1px solid #FF5959',
                            borderRadius: '8px',
                            width: '250px',
                            height: '40px',
                        }}
                        type='text'
                        value={name}
                        onChange={handleInputChenge}
                    />
                    <span style={{ marginLeft: '25px', fontWeight: 'bold' }}>
                        이름 : {name}
                    </span>
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
                        style={{
                            width: '250px',
                            height: '40px',
                            borderRadius: '8px',
                            backgroundColor: '#344CB7',
                            width: '250px',
                            height: '40px',
                            border: 'none',
                            color: '#EBE645',
                            cursor: 'pointer',
                        }}
                        onClick={() => setShowTimer(!showTimer)}
                    >
                        타이머 토글
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
