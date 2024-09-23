import React from 'react';

const {useState} = React;

const ColorContainer = ({setInputColorText}) => {

    const [inputColorText1, setInputColorText1] = useState("");

    const onChangeHandlerColorText = e => setInputColorText1(e.target.value);

    const onClickHandlerColorChange = () => {
    setInputColorText(inputColorText1);
    setInputColorText1("");
    };


    return (
        <>
            <input type="text" value={inputColorText1} onChange={onChangeHandlerColorText}></input>
            <button onClick={onClickHandlerColorChange}>색변경</button>
        </>
    )
}

export default ColorContainer;