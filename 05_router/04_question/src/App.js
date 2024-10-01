import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderConfirm from "./pages/OrderConfirm";
import MenuDescription from "./pages/MenuDescription";
import { useState } from "react";

function App() {

  const [orderList, setOrderList] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path=":id" element={<MenuDescription orderList={orderList} setOrderList={setOrderList}/>}/>
            </Route>
            <Route path="orderconfirm">
              <Route index element={<OrderConfirm orderList={orderList}/>}/>              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
