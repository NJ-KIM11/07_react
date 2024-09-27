import { useEffect, useRef, useState } from "react"


const LoginComponent = ()=>{
    
    const [form, setForm] = useState({
        username:'',
        password:''
    });


    useEffect(()=>{
        console.log(userNameRef.current);
        userNameRef.current.focus();
    },[])

    const userNameRef = useRef();

    const onChangeHandler = e=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const onClickHandler = ()=>{
        alert(`username ${form.username} \npassword ${form.password} 로 로그인~`);
    }


    return(
        <>
            <input type="text" name="username"
                    placeholder="이름" onChange={onChangeHandler}
                    value={form.username} ref={userNameRef}/>
                
            <br/>

            <input type="text" name="password"
                    placeholder="비밀번호" onChange={onChangeHandler}
                    value={form.password} />

            <br/>
            <button onClick={onClickHandler} >로그인</button>
        </>
    )
}

export default LoginComponent