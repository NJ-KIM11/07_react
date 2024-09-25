import { useReducer } from "react"


const reducer = (state, action)=>{

    console.log(action);
    console.log(state);

    switch(action.type){
        case 'plus': 
            return {...state, value: state.value+1};
        case 'minus':
            return {...state, value: state.value-1}
        case 'text':
            return {...state, [action.name]: action.value }
        default: 
            return state;
    }
    
}

export const ContainerWithCounter = ()=>{

    const [state, dispatch]= useReducer(reducer, {
        value:0,
        text:''
    })

    return(
        <>
            <h1>Counter : {state.value}</h1>
            <button onClick={()=>dispatch({type:"plus"})}>+1</button>
            <button onClick={()=>dispatch({type:"minus"})}>-1</button>
            <InputText state={state} dispatch={dispatch}/>
        </>
    )
}

const InputText = ({state,dispatch})=>{

    const onChangeHandler = e => dispatch(e.target);

    return(
        <>
            <input type="text" name="text" onChange={onChangeHandler}/>
            <br/>
            <label>입력한 텍스트 : {state.text}</label>

        </>
    )
}