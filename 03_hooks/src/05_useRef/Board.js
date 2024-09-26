import { useEffect, useState } from "react"


const BoardContainer = ()=>{

    const [post, setPost] = useState({title:'', content:''});
    const [postList, setPostList]= useState([]);
    const [count, setCount] = useState(1);

    const onChangeHandler = e=>{
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    };


    const addPost = ()=>{
        console.log(post);
        setPostList([...postList,{id: count, title:post.title, content:post.content}]);
        setPost({
            ...post,
            title:'',content:''});
        setCount(count+1);
    };


    const deletePost = (id)=>{
    
        console.log(id);
        setPostList(postList.filter((po)=>po.id !== id))
    };
    
    
    const resultList = postList.map((posts)=>{
        return(
            <li key={posts.id}>                
                <h3>{posts.title}</h3>
                <p>{posts.content}</p>
                <button onClick={()=>{deletePost(posts.id)}}>삭제</button>
            </li>
        )
    });

    const searchPost = e =>{
        setPostList(postList.filter((po)=> po.title.includes === e.target.value))
    };


    return(
        <>
            <h1>게시판</h1>
            <input type="text" name="title" placeholder="제목" value={post.title} onChange={onChangeHandler}/>
            <br/>
            <br/>
            <textarea type="text" name="content" placeholder="내용" value={post.content} onChange={onChangeHandler}/>
            <br/>
            <button onClick={addPost}>게시</button>
            <br/>
            <input type="text"  name="search" placeholder="검색" onChange={searchPost}/>
            <ul>
                {resultList}
            </ul>
        </>
    )
}

export default BoardContainer;