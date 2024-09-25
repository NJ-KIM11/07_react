import { useMemo, useState } from "react"


export const SquareCalculator = ()=>{

    const [numbers, setNumbers] = useState("");

    const squareNumbers = useMemo(()=>{
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num=>{
            return isNaN(num)? 0 : num**2;
        })
    },[numbers]);


    const onChangeHandler = e=>{
        setNumbers(e.target.value);
    }

    const resultList = squareNumbers.map(squareNum =>{
        return(
            <li>
                {squareNum}
            </li>
        )
    })
    


    return(
        <>
            <h1>숫자 제곱 계산기</h1>
            <input type="text" value={numbers} onChange={onChangeHandler}/>
            <h2>제곱값:</h2>
            <ul>
                {resultList}
            </ul>
        </>
    )
}
