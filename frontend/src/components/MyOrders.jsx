import React from "react";
import { useDataFetching } from "../tools/DataFetching";

function MyOrders() {
  const { data, loading, error } = useDataFetching("/");
  //add (!) before the loading
  return (
    <div>
      {loading && !data && (
        <img
          className="no-orders-img"
          src="https://firebasestorage.googleapis.com/v0/b/blogimgupload-3998a.appspot.com/o/no-order-a-flat-rounded-icon-is-up-for-premium-use-vector.jpg?alt=media&token=2e92e1e7-f3bf-4ff9-9a3d-ae8249c25526"
          alt="no orders photo"
        ></img>
      )}
    </div>
  );
}

export default MyOrders;
