import { useEffect, useState } from "react"


export const CallBackProblem = ()=>{

    const [number, setNumber] = useState(0)
    const [toggle, setToggle] = useState(false);

    const printNumber = () =>{
        console.log(`current number : ${number}`);
    }

    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");
    },[printNumber]);

    return(
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>

            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )
    
}

// 함수가 자식 컴포넌트에 많이 뿌려졌을때 모두 다시 렌더링 되는 문제..