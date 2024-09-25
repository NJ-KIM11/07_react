import { useEffect, useState } from "react"


export const ProfileSave = () =>{

    const [user, setUser]= useState({username: "", email: ""});
    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    const [savedUser, setSavedUser] = useState({savedName:'', savedEmail:''});

    const onChangeHandler = e=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onClickHandler = () =>{
        setSavedUser({
            savedName: user.username,
            savedEmail: user.email
        })
        setUser({
            username:"",
            email:""
        })
        alert("프로필 저장~~~~~");
    }

    useEffect(()=>{
        setTimeout(()=>setUser({
            username: "홍길동",
            email: "hong@example.com"
        }), 1000)
    },[]);

    useEffect(()=>{
        console.log("username 또는 email 변경 감지");
        console.log(`이름: ${user.username}, 이메일: ${user.email}`);
    },[user.username, user.email]);

    return(
        <>
            <h1>프로필 입력</h1>
            <br/>
            <label>이름 : </label>
            <input type="text" value={user.username} name="username" onChange={onChangeHandler}></input>
            <br/>
            <label>이메일 : </label>
            <input type="text" value={user.email} name="email" onChange={onChangeHandler}></input>
            <br/>
            <button onClick={onClickHandler}>저장</button>

            <h1>프로필 미리보기</h1>
            <p>이름 : {savedUser.savedName} </p>
            <p>이메일 : {savedUser.savedEmail} </p>
        </>
    )
}
