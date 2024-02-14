import React, { useState } from "react";
import Cart from "../Components/Cart";
import NavBar from "../Components/NavBar";
import ProductTable from "../Components/ProductTable";
import { data } from "autoprefixer";

function Home() {
  
  const [open, setOpen] = useState(false);

  const [cart, updateCart] = useState(
    JSON.parse(localStorage.getItem('cartData')) || [], 
    (cur) => {
      localStorage.setItem('cartData', JSON.stringify(cur));
      return cur;
    }
  );
  
  return (
    <main>
      <NavBar {...{ setOpen, cart }} />
      <Cart {...{ open, setOpen, cart, updateCart }} />
      <ProductTable {...{ cart, updateCart }} />
    </main>
  );
}

export default Home;
