import React from "react";
import { useState, useMemo, useRef } from "react";
function Memo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <h1>useMemo</h1>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        ref={nameRef}
        value={price}
        placeholder="Enter price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>Add</button>
      <div>
        <h2>total : {total}</h2> <br />
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} : {product.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Memo;
