import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./components/checkout/checkout.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
