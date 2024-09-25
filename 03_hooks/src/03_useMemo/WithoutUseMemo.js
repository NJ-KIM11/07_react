import { useEffect, useState } from "react";


const SquareCalculator1 = ()=>{

    const[numbers, setNumbers] = useState("");
    const[squareNumbers, setSquareNumbers] =useState([]);

    const onChangeHandler = e => {
        setNumbers(e.target.value);
    }

    useEffect(()=>{

        const arr = numbers.split(",").map((num)=>{
            return isNaN(num)? 0: num**2;
        })
        setSquareNumbers(arr)

        console.log(squareNumbers);

    },[numbers])
    

    const resultList = squareNumbers.map((squareNum)=>{
            return <li>{squareNum}</li>
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

export default SquareCalculator1;