import menus from "../data/Menu-deatil.json";

export function getWholeMenu(){
    return menus;
}

export function getMenuDetail(menuId){
    return menus.filter(menu=> menu.id === parseInt(menuId))[0];
}
