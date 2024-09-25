import { useEffect, useState } from "react"

export const TimeApp = ()=>{
    const [timers, setTimers] = useState([]);
    const [count, setCount] = useState(1);

    const addTimer = ()=>{
        if(timers.length<5){
            setTimers([...timers,{id:count}]);
            setCount(count+1);
        }
    }

    const deleteTimer = (id) =>{
        setTimers(timers.filter((timer)=>timer.id !== id));
    }

    return(
        <>
            <button onClick={addTimer}>타이머 추가</button>
            <br/>
            {timers.map((timer)=>{
                return <Timer id={timer.id} onDelete={deleteTimer}/>
            })}
        </>
    )
}

const Timer = ({id,onDelete})=>{
    const[second, setSecond]= useState(0);
    const[stop, setStop] = useState(false);
    const[buttonText, setButtonText] = useState("stop");
    let a=false;


    const onClickHandler = ()=>{
        
        setStop(()=>{
            a=!stop;
            (a===true)? setButtonText("go") : setButtonText("stop");
        });
        
    };

    useEffect(()=>{
            const interval = setInterval(()=>{
                setSecond(value => value+1);

            }, 1000);
            if(a===true){
                clearInterval(interval);
            }
            return ()=> clearInterval(interval);
    

    },[a])

    return(
        <>
            <label>타이머 {id}: {second}초</label>
            <button onClick={onClickHandler}>{buttonText}</button>
            <br/>
            <button onClick={()=>onDelete(id)}>삭제</button>
            <br/>
        </>
    )
}