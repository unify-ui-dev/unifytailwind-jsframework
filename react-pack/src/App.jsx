import {
  Routes, Route
} from "react-router-dom";
import Index from "./pages";
import { Layout, GeneralLayout } from "./layout";
import { blockRoutes } from "./data/blocks-routes";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        {
          blockRoutes.map(blockRoute=>(
            <Route key={blockRoute.id} path={blockRoute.root} element={<GeneralLayout/>}>
              {
                blockRoute.items.map(item=>(
                  <Route path={`${blockRoute.root}/${item.path}`} element={item.component} key={item.id}/>
                ))
              }
            </Route>
          ))
        }
      </Route>
    </Routes>
  )
}