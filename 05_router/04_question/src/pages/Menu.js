import {useState, useEffect} from "react";
import { getWholeMenu } from "../api/MenuApi";
import MenuList from "../components/MenuList";
import { useNavigate } from "react-router-dom";

const Menu = ()=>{
    
    const [wholeMenu, setWholeMenu] =useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setWholeMenu(getWholeMenu());
    },[]);

    const onClickOrder =()=>{
        navigate(`/orderconfirm`);
    }

    return(
        <>
            <h1>메뉴</h1>
            <ul>
                {wholeMenu.map(menu => <MenuList key={menu.id} menu={menu}/>)}
            </ul>
            <button onClick={onClickOrder}>주문하기</button>
        </>
    )
}

export default Menu;