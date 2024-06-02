import Header from "./component/Header.jsx";
import Menu from "./component/Menu.jsx";
import {Outlet} from "react-router-dom";
import React from "react";
function App() {
    return (
      <>
        <Header />
        <Menu />
        <Outlet />
      </>
    )
}

export default App;
