import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Navbar from "../../Home/Navbar/Navbar";
import OrderCard from "../OrderCard.js/OrderCard";
import "./Orders.css";

export default function Orders() {
  const totalOrders = useSelector((state) => {
    return state.products.orders;
  });
  return (
    <>
      <Navbar />
      <main>
        <div className="container mt-4">
          <h3>
            {totalOrders.length > 0 ? (
              <div>
                Total {totalOrders.length}{" "}
                {totalOrders.length > 1 ? "Orders" : "Order"}{" "}
                <Link className="explore" to="/">
                  Explore more.
                </Link>
              </div>
            ) : (
              <p>You didn't purchase any product</p>
            )}
          </h3>
          <div>
            {totalOrders.map((data) => (
              <OrderCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
