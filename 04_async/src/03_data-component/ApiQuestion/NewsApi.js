import { useEffect, useState } from "react";


const NewsContainer = ()=>{

    const API_KEY = 'c775d95ed54a4300a8d5aa1a84d4a46a';
    const country = 'us';
    const [result, setResult]= useState({});


    const getNews =()=>{
        return(
            fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
                .then(response => response.json())
        )
    }
    

    useEffect(()=>{
        async function news() {
            const result1 = await getNews();
            console.log(result1);
            setResult(result1);
        }
        news();
        console.log(result);
    },[]);
    

    return(
        <>
            <h1>NewsApi</h1>
            {/* <ul>
                {result.map((article)=>{
                    return <li>{article}</li>
                })}
            </ul> */}
            {/* <p>{result}</p> */}
        </>
    )

}

export default NewsContainer;


