import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDashboard from "../../pages/UserDashboard";

function Orders() {
  const [orders, setOrders] = useState({});
  //TRAER ID DEL SESSION STORAGE
  const id = 2;
  useEffect(() => {
    try {
      let response = axios
        .get(`http://localhost:3001/orders?id=${id}&state=Preparando`)
        .then((r) => setOrders({ ...orders, PendingOrders: r.data.content }));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(orders, "soy orders");
  return (
    <UserDashboard>
      <div>
        <h1 className="w-screen text-center mt-5 mb-5"><u>Ordenes en preparación</u></h1>
        {orders.PendingOrders  &&
          orders.PendingOrders.map((order) => (
            <div className="border border-primary ml-10 max-w-[85vw]">
              <h1 className="text-primary">Orden N: {order.id}</h1>
            </div>
          ))}
      </div>
    </UserDashboard>
  );
}

export default Orders;
