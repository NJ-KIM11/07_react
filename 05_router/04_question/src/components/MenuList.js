import {Link} from "react-router-dom";

const MenuList = ({menu})=>{  

    return(
        <Link to={`/menu/${menu.id}`}>
            <li>{menu.name} - \{menu.price}</li>
        </Link>                       
    )
}
export default MenuList;