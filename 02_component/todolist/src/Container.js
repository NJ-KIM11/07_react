import React from 'react';

const {useState} = React;


const Container = ({boxNames,setBoxNames,inputColorText}) => {

    
    const [checkBoxChange, setCheckBoxChange] =useState(false);
    
    
    const onClickHandlerDelete = id => {
        const deleteList = boxNames.filter(name=> name.id !== id);
        setBoxNames(deleteList);
      };
    
    const onChangeHandlerCheckBox = id => {
        
        const checked = document.getElementById(id);
        const labelName = checked.nextElementSibling;
        if(checked.checked===true){
            labelName.style.textDecoration = "line-through";
        }else{
            labelName.style.textDecoration = "none";
        }
          
      };
    
    const boxNameList = boxNames.map(boxName =>{
        return(
        <li key={boxName.id} >
            <input type="checkbox" id={boxName.id} onChange={()=>onChangeHandlerCheckBox(boxName.id)}></input>
            <label>{boxName.boxName}</label>
            <button onClick={()=>onClickHandlerDelete(boxName.id)}>삭제</button>
        </li>)
      });
    
      const style = {
        color : inputColorText,
        cursor : "pointer",
        listStyle : "none",
        paddingLeft : "0px",
      };

    return (
        <ul style = {style}>
            {boxNameList}
        </ul>
    )
}

export default Container;