## 🪝 react-hooks-useEffect

### - useEffect
  - 컴포넌트가 렌더링 될때 마다 실행되는 경우
  - 마운트 될때 + __디펜던시 어레이 안에 아이템이 변경될 때만 실행__
  - 컴포넌트 최초 렌더링 될때만 실행

### - useState
  - 버튼 클릭 시, +1 / -1 카운트되는 함수 onClick에 전달 (setCount(+1 / -1))
  - input 태그에 입력되는 값 전달 (e.target.value)

### - ToggleTimer 컴포넌트 
  - ToggleTimer 컴포넌트가 처음 렌더링 될때만 실행
  - setInterval / clearInterval   
  - 두 번째 인자로 return 콜백함수를 전달
    (*콜백함수는 타이머를 종료시킴*)   

![Jan-28-2022 18-23-50](https://user-images.githubusercontent.com/72742121/151521164-6ae578e7-db84-4436-85f5-f1bf42ebe975.gif)
