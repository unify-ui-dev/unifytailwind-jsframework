import {
  Routes, Route
} from "react-router-dom";
import Index from "./pages";
import Layout from "./layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  )
}