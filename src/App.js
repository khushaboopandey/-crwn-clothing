import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
