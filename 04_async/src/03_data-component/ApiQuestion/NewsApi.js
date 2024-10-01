import { Fragment, useEffect, useState } from "react";
import Article from "./Article";
import style from "./Article.module.css";


const NewsContainer = ()=>{

    const API_KEY = 'c775d95ed54a4300a8d5aa1a84d4a46a';
    const country = 'us';
    
    const [articles, setArticles] = useState([]);


    const getNews =()=>{
        return(
            fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`)
                .then(response => response.json())
        )
    }
    

    useEffect(()=>{
        async function news() {
            const result = await getNews();
            console.log(result);
            setArticles(result.articles);

            
        }
        news();
        
    },[]);
    
    
    

    return(
        <>
            <div className={style.newsContainer}>    
                {articles.map((article)=>{
                    return(<Article article={article}/>)
                })}
            </div>
        </>
    )

}

export default NewsContainer;


