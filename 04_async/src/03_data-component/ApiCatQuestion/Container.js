import { useEffect, useState } from "react";
import styles from "./Container.module.css";


const Container = ()=>{

    const [breed, setBreed] = useState("");
    const [catImg, setCatImg] = useState();
    const [tenBreed, setTenBreed] =useState([]);
    

    const api_key = 'live_I3nzKnTpNjzyXLZp0RtbUU1mRjTwK7uAEECexmUv6u3djBsNDYSaX4Isn5PDyZo9';
    const url =`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    const url2 = `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1`;


    const getCat=()=>{
        return(
            fetch(url,{headers: {
                'x-api-key': api_key
                }})
            .then(response=> response.json())
        )
    };

    const tenCat =()=>{
        return(
            fetch(url2, {headers: {
                'x-api-key' : api_key
            }})
            .then(response=>response.json())
        )
    };

    const onClickHandler = ()=>{
        async function search(){
            const result = await getCat();
            setCatImg(result.map(res=> res.url))
        }
        search();
    };

    useEffect(()=>{
        async function catList(){
            const result = await tenCat();
            const catList = result.map(res=>res.breeds[0]);
            
            setTenBreed(catList.map((cat)=> {
                return {id: cat.id, 
                    breedName : cat.name}
            }));
        }
        catList();
    },[]);
    console.log(tenBreed);

    return(
        <>
            <div className={styles.catContainer}>
                <h1 className={styles.catTitle}>고양이 품종 검색</h1>
                <div className={styles.catBody}>
                    <div className={styles.catSearch}>
                        <input type="text" value={breed} onChange={e=>setBreed(e.target.value)}/>
                        <button onClick={onClickHandler}>search</button>
                    </div>
                    <img className={styles.catImage} src={catImg} alt="no img"/>
                    {tenBreed.map(breed=>{
                        return <ul><li>search keyword: {breed.id} --{'>'} breed name: {breed.breedName}</li></ul>
                    })}
                </div>
            </div>
        </>
    )
}
export default Container;