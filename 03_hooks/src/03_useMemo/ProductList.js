import { useEffect, useState } from "react";


export const ProductList = ()=>{

    const products = [
        { name: "아이폰 16", category: "전자제품" },
        { name: "맥북 프로", category: "전자제품" },
        { name: "에어팟", category: "전자제품" },
        { name: "삼성 갤럭시", category: "전자제품" },
        { name: "나이키 운동화", category: "의류" },
        { name: "아디다스 티셔츠", category: "의류" },
        { name: "믹서기", category: "가전제품" },
        { name: "전자레인지", category: "가전제품" },
      ];

    const [list, setList] = useState([]);

    const onClickHandler = id => {
        if(id==="all"){
            setList(products);
        }else{
            setList(products.filter((product)=>product.category === id));
        }
    }

    const resultList = list.map((li)=>{
        return <li>{li.name}</li>
    })

    

    return(
        <>
            <h1>상품 목록</h1>
            <button id="all" onClick={e=>onClickHandler(e.target.id)}>모든 카테고리</button>
            <button id="전자제품" onClick={e=>onClickHandler(e.target.id)}>전자제품</button>
            <button id="의류" onClick={e=>onClickHandler(e.target.id)}>의류</button>
            <button id="가전제품" onClick={e=>onClickHandler(e.target.id)}>가전제품</button>
            <h2>총 8개의 상품</h2>
            <ul>
                {resultList}
            </ul>
        </>
    )
}