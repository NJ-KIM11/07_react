import style from "./Article.module.css"

const Article =({article})=>{


    return(
        <div className={style.newsCard}>
            <img className={style.newsImage} src={article.urlToImage} alt="no img"/>
            <h1 className={style.newsTitle}>{article.title}</h1>
            <p className={style.newsDescription}>{article.description}</p>{}
            <button className={style.readMore} onClick={()=> window.open(article.url)}>더 읽기</button>
        </div>
    )
}

export default Article;