import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderConfirm from "./pages/OrderConfirm";
import MenuDescription from "./pages/MenuDescription";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="menu">
              <Route index element={<Menu/>}/>
              <Route path="describe" element={<MenuDescription/>}/>
            </Route>
            <Route path="orderconfirm" element={<OrderConfirm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
