import { useEffect, useState } from "react";


const Questionaire = () =>{

    const [time, setTime]= useState(5);
    const [correct, setCorrect] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(value => value-1);
        } ,1000);
        if (time ===0){
            alert("Time Over!!!! 정답은 2024");
            clearInterval(interval);
        }
        if (correct === true){
            clearInterval(interval);
        }

        return ()=> clearInterval(interval);

    },[time, correct])

    const onClickHandler = ()=>{
        const answer = document.getElementById("answer");
        if (answer.value === "2024"){
            alert("축하합니다. 정답입니다.");
            setCorrect(!correct);
        } else{
            alert("오답!!!!!!!");
        }
    };

    return(
        <>
            <h1>문제: 올해는 몇년도인가요?</h1>
            <br/>
            <label>남은 시간 : {time} 초</label>
            <br/>
            <input type="text" id="answer"></input>
            <button onClick={onClickHandler}>제출</button>
        </>
        
    )
}

export default Questionaire;