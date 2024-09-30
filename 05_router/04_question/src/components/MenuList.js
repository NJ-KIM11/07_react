import {useNavigate} from "react-router-dom";

const MenuList = ({menu})=>{

    const navigate = useNavigate();

    const onClickHandler =()=>{
        navigate(`/menu/describe?menuId=${menu.id}`);
    }

    return(
        <>
            <li onClick={onClickHandler}>{menu.name} - \{menu.price}</li>
        </>                       
    )
}
export default MenuList;