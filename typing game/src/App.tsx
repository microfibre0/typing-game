import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypeViewPage from "./pages/TypeViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TypeViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
