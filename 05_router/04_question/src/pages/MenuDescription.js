import {useParams} from "react-router-dom";
import {useMemo} from "react";
import { getMenuDetail } from "../api/MenuApi";
import {useNavigate} from "react-router-dom";

const MenuDescription =({orderList, setOrderList})=>{

    const {id} = useParams();    
    const navigate = useNavigate();

    const menu = useMemo(()=>{
        return getMenuDetail(id);
    },[id]);


    const onClickAdd =()=>{
        setOrderList(orderList => [...orderList, menu]);
        navigate(`/orderconfirm`);
    }

    const onClickBack=()=>{
        navigate(`/menu`);
    }

    return(
        <>
            <h1>{menu.name}</h1>
            <p>가격 : \{menu.price}</p>
            <p>설명 : {menu.description}</p>
            <button onClick={onClickAdd}>장바구니 추가</button>
            <button onClick={onClickBack}>돌아가기</button>
        </>
    )

}
export default MenuDescription;