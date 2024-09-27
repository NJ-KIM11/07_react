import {useEffect} from "react"



const Map = ()=>{
    const appkey = '1eae4c67f7b0d762e97b03a4d1699aba';


    useEffect(()=>{
        async function setMap() {
            fetch(`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}`)
        }
        setMap()
    },[])

    return(
        <>
            <p></p>
        </>
    )

}

export default Map;