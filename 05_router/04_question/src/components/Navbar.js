import {NavLink} from "react-router-dom"

const NavBar = ()=>{

    const activeStyle={
        backgroundColor : "blue",
        color : "white"
    }

    return(
        <ul>
            <li>
                <NavLink to={"/home"} style={({isActive})=> isActive? activeStyle: null}>홈</NavLink>                
            </li>
            <li>
                <NavLink to={"/menu"} style={({isActive})=> isActive? activeStyle: null}>메뉴</NavLink>
            </li>
            <li>
                <NavLink to={"/orderConfirm"} style={({isActive})=> isActive? activeStyle: null}>주문 확인</NavLink>
            </li>
        </ul>
    )
}
export default NavBar;