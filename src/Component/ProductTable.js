import React from "react";

const ProductTable = () => {
  function getData() {
    console.log("fetching data");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div>
        <img alt="table" />
        <h3>Table</h3>
        <span>$200</span>
      </div>
    </div>
  );
};

export default ProductTable;
