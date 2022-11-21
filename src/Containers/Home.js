import React from "react";

const Home = () => {
  return (
    <>
      <div className="add-to-cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          alt=""
        />
      </div>
      <div className="cards">
        <div className="img-wrapper">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2482/2482945.png"
            alt=""
          />
        </div>
        <div>
          <span>
            <b>Price:</b> rs 7999
          </span>{" "}
          <br />
          <span>
            <b>Name:</b> Samsung
          </span>
        </div>
        <button className="cart-btn">Add to cart</button>
      </div>
    </>
  );
};

export default Home;
