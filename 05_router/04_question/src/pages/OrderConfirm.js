import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";
import {useNavigate} from "react-router-dom";


const OrderConfirm = ()=>{

    const [id] = useSearchParams();
    const menuId = id.get("menuId");
    const [menu, setMenu] = useState({});
    const [orderList, setOrderList] = useState([]);

    useEffect(()=>{
        setMenu(getMenuDetail(menuId));
        console.log(menu);
    },[]);

    useEffect(()=>{
        setOrderList([...orderList, menu])
        console.log(orderList);
    },[menu]);


    const ConfirmList = orderList.map((order)=>{
        return !!order? (<li>{order.name} - \{order.price}</li>) : <p>선택한 커피가 없습니다.</p>});
    

    return(
        <>
            <h1>주문확인</h1>
            {ConfirmList}
            {/* {orderList.map((order)=>{
                return(<li>{order.name} - \{order.price}</li>
                )
            })} */}
        </>        
    )
}
export default OrderConfirm;