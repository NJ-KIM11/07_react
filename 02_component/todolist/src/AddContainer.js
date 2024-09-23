import React from 'react';

const {useState} = React;

const AddContainer = ({boxNames,setBoxNames}) => {

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(3);

    const onChangeHandlerText = e => setInputText(e.target.value);

    const onClickHandlerAdd = () => {
        setBoxNames(boxNames.concat({
          id: nextId,
          boxName: inputText
        }));
        setNextId(nextId+1);
        setInputText("");
      };


    return (
        <>
            <input type="text" value={inputText} onChange={onChangeHandlerText}></input>
            <button onClick={onClickHandlerAdd}>추가</button>
        </>
    )

}

export default AddContainer;