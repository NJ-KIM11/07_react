import {useEffect,useState} from "react"

const Title=()=>{
    return <h1>회원 목록</h1>
}

const ItemList =()=>{

    const[users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    },[])
    // 두번째 인자로 빈 문자열을 주었기 때문에 마운트 시점 한번만 실행!!
    // useEffect 를 안쓰면 렌더링 시점마다 매번 가져오기 때문에 redundant

    return(
        <div>
            {users.map(user=> <Item user={user}/>)}
        </div>
    )
}

const Item =({user})=>{
    const styles = {
        background:'powderblue',
        border:'1px dotted black',
        width:'350px',
        display:'inline-block',
        margin:'10px'
      }

    return(
        <div style={styles}>
            <h4>{user.name}</h4>
            <p>
                id :{user.id}<br/>
                email :{user.email}<br/>
                phone :{user.phone}<br/>
            </p>
        </div>
    )
}

const Container =()=>{    
    return(
        <>
            <Title/>
            <ItemList/>
        </>
    )
}

export default Container;