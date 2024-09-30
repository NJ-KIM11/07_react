import {useState, useEffect} from "react";
import { getWholeMenu } from "../api/MenuApi";
import MenuList from "../components/MenuList";

const Menu = ()=>{
    
    const [wholeMenu, setWholeMenu] =useState([]);
    // const navigate = useNavigate();

    useEffect(()=>{
        setWholeMenu(getWholeMenu());
    },[]);


    return(
        <>
            <h1>메뉴</h1>
            <ul>
                {wholeMenu.map(menu => <MenuList key={menu.id} menu={menu}/>)}
            </ul>
            <button>주문하기</button>
        </>
    )
}

export default Menu;