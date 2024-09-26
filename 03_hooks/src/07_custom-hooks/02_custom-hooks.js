import { useState } from "react"


const useInput = ()=>{
    const[value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);

    return {value,onChange};
}

export const CustomHooks = ()=>{
    const name = useInput();
    const pass = useInput();
    const email = useInput();

    return(
        <>
            <label>이름 : </label>
            <input type="text" value={name.value} onChange={name.onChange}/>
            <br/>
            <label>비밀번호 : </label>
            <input type="password" {...pass}/>
            <br/>
            <label>이메일 : </label>
            <input type="email" {...email}/>

            <h4>name : {name.value}</h4>
            <h4>pass : {pass.value}</h4>
            <h4>email : {email.value}</h4>
        </>
    )
}