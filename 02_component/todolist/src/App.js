import React from 'react';
import Container from './Container';
import AddContainer from './AddContainer';
import ColorContainer from './ColorContainer';


const {useState} = React;

function App() {
  
  const [boxNames, setBoxNames] = useState([
    {id:1,boxName:"안녕"},
    {id:2,boxName:"안녕2"}
  ])


  const [inputColorText, setInputColorText] = useState("");
  const [mode, setMode] =useState("white");
  const [textColor, setTextColor] = useState("black");
  const [ison, setIson] =useState(false);
  const [on, setOn] =useState("off")


  const onClickHandlerDarkmode = () => {
      setIson(()=>{
      const a = !ison;
      (a===true)? setOn("on") : setOn("off");
      (a===true)? setMode("black") : setMode("white");
      (a===true)? setTextColor("white") : setTextColor("black");
      return a
    })
  };


  return (
    <div style ={{backgroundColor : mode, color : textColor}}>
      <h1>todolist</h1>
      <button onClick={onClickHandlerDarkmode}>{`다크모드 ${on}`}</button>
      <br></br>
      
      <Container boxNames={boxNames} setBoxNames={setBoxNames} inputColorText={inputColorText}/>
      
      <AddContainer boxNames={boxNames} setBoxNames={setBoxNames}/> 

      <ColorContainer  setInputColorText={setInputColorText}/>

    </div>
  );
}

export default App;
// ctrl + space 로 import 필수
