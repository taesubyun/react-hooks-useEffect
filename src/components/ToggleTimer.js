import { useEffect } from 'react';
// 토클타이머 컴포넌트가 처음 렌더링 될떄만 실행할 useEffect
const ToggleTimer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는 중');
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log('타이머가 종료 되었습니다');
        };
    }, []);
    return (
        <div className='toggle_timer'>
            <div>
                타이머를 시작합니다 <br />
                콘솔을 확인하세요!
            </div>
        </div>
    );
};

export default ToggleTimer;
