import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
    const [count, setCount] = useState(100);

    const handleCount = () => {
        setCount(count + 1);
    };

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
