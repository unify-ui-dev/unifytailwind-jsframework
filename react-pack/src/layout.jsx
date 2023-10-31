import { Outlet } from "react-router-dom";
import { AppProvider } from "./context/theme";


const Layout = ()=> {
  return (
    <AppProvider>
        <Outlet/>
    </AppProvider>
  )
}

const GeneralLayout = () =>{
  return (
    <>
      <Outlet/>
    </>
  )
}

export { Layout, GeneralLayout }