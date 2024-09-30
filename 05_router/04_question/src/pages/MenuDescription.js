import {useSearchParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getMenuDetail } from "../api/MenuApi";
import {useNavigate} from "react-router-dom";

const MenuDescription =()=>{

    const [id] = useSearchParams();
    const menuId = id.get("menuId");
    const [menu, setMenu] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        setMenu(getMenuDetail(menuId));
    },[]);

    const onClickAdd =()=>{
        navigate(`/orderconfirm?menuId=${menu.id}`);
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