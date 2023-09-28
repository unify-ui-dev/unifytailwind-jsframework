import { Outlet } from "react-router-dom";
import { AppProvider } from "./context/theme";


export default function Layout() {
  return (
    <AppProvider>
        <Outlet/>
    </AppProvider>
  )
}
