import {useEffect, useState} from "react";

const UseEffectMount = ()=>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("마운트 시점 동작");
    },
        [time]
        // 두번째 인자로 빈 배열을 넣으면 업데이트 시점에는 동작하지 않고 최초 마운트에만 동작
        // 대괄호 안은 조건
        // 대괄호 안에 있는 props 또는 state 가 바뀌었을때만 useEffect 가 동작한다.
    );

    return(
        <>
            <button onClick={()=>setTime(new Date().toLocaleTimeString())}>
                현재시간 확인
            </button>
            <h1>{time}</h1>
        </>
    )
}

export default UseEffectMount;