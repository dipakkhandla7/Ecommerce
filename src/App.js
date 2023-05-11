import React, { useEffect, useState } from "react";
import { auth } from "./firebase/firebase";
import Login from "./firebase/Login";
import Signup from "./firebase/Signup";
import Home1 from "./firebase/Home1";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.scss";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mobile from "./components/Mobile";
import Boat from "./components/Boat";
import Tv from "./components/Tv";

export default function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header></Header>
          <Cart></Cart>
          <Wishlist></Wishlist>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/boat" element={<Boat />}></Route>
            <Route path="/mobile" element={<Mobile />}></Route>
            <Route path="/tv" element={<Tv />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home1 name={userName} />} />
          </Routes>
        </Provider>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
