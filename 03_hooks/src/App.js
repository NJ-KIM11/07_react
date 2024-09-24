import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimeApp } from "./01_useEffect/question/TimeApp";
import Questionaire from "./01_useEffect/question/Questionaire";
import { ProfileSave } from "./01_useEffect/question/ProfileSave";

function App() {
  const [message,setMessage]= useState("안녕하세요");

  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <Container/> */}
      {/* <TimeApp/> */}
      {/* <Questionaire/> */}
      <ProfileSave/>
    </>
  );
}

export default App;
