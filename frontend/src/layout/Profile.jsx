import React from "react";
import DetailsChange from "./DetailsChange";

function Profile() {
  return (
    <div>
      <div className="my-orders-section">
        <MyOrders />
      </div>
      <div className="account-details-section">
        <DetailsChange />
        <div className="change-password">
          <PasswordChange />
        </div>
      </div>
    </div>
  );
}

export default Profile;
