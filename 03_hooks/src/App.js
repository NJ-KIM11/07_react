import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimeApp } from "./01_useEffect/question/TimeApp";
import Questionaire from "./01_useEffect/question/Questionaire";
import { ProfileSave } from "./01_useEffect/question/ProfileSave";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import { Input, ReducerFormControl } from "./02_useReducer/02_reducer-form-control";
import { ContainerWithCounter } from "./02_useReducer/ReducerPractice";
import { HardCalculator } from "./03_useMemo/01_hard_calculator";
import { ComplexCalculator } from "./03_useMemo/02_complex-calculator";
import { UseMemoComponent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
import { DoubleContainer, SquareCalculator } from "./03_useMemo/UseMemoPractice";
import SquareCalculator1 from "./03_useMemo/WithoutUseMemo";
import { ProductList } from "./03_useMemo/ProductList";
import { CallBackProblem } from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import CallBackComponent from "./04_useCallback/03_components";
import { CounterRef } from "./05_useRef/01_problem";
import { UseRefCounter } from "./05_useRef/02_useRef";
import LoginComponent from "./05_useRef/03_inputRef";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";
import HooksProblem from "./07_custom-hooks/01_problem";
import { CustomHooks } from "./07_custom-hooks/02_custom-hooks";
import BoardContainer from "./05_useRef/BoardQuestion/Board";

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
      {/* <ProfileSave/> */}
      {/* <UseReducerBasic/> */}
      {/* <ReducerFormControl/> */}
      {/* <Input/> */}
      {/* <ContainerWithCounter/> */}
      {/* <HardCalculator/> */}
      {/* <ComplexCalculator/> */}
      {/* <UseMemoComponent/> */}
      {/* <LocationComponent/> */}
      {/* <SquareCalculator/> */}
      {/* <SquareCalculator1/> */}
      {/* <ProductList/> */}
      {/* <CallBackProblem/> */}
      {/* <FunctionMemoization/> */}
      {/* <CallBackComponent/> */}
      {/* <CounterRef/> */}
      {/* <UseRefCounter/> */}
      {/* <LoginComponent/> */}
      {/* <Page/> */}
      {/* <ContextContainer/> */}
      {/* <HooksProblem/> */}
      {/* <CustomHooks/> */}
      <BoardContainer/>
    </>
  );
}

export default App;
