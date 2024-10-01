import {useSearchParams} from "react-router-dom";
import {useState, useEffect, useMemo} from "react";
import { getMenuDetail } from "../api/MenuApi";
import {useNavigate} from "react-router-dom";


const OrderConfirm = ({orderList})=>{
    

    const confirmList = (orderList.length)!==0? orderList.map((order)=>{
        return (<ul><li>{order.name} - \{order.price}</li></ul>)}) 
        : <p>선택한 커피가 없습니다.</p>;
    

    return(
        <>
            <h1>주문확인</h1>
            {confirmList}
                        
        </>        
    )
}
export default OrderConfirm;