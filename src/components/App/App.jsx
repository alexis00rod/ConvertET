import { Route, Routes } from "react-router-dom"
import { Navbar, Layout } from '../'
import { ConvertLength, ConvertTemperature, ConvertTime, ConvertWeight, Home, Translate } from "../../pages"

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="convert-weight" element={<ConvertWeight />}></Route>
          <Route path="convert-length" element={<ConvertLength />}></Route>
          <Route path="convert-time" element={<ConvertTime />}></Route>
          <Route path="convert-temperature" element={<ConvertTemperature />}></Route>
          <Route path="translate" element={<Translate />}></Route>
        </Route>
      </Routes>
    </div>
  )
}
