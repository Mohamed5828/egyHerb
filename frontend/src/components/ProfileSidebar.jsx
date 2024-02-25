import React, { useState } from "react";
import "../Styling/css/components/profileSidebar.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
function ProfileSidebar({ activeTab, setActiveTab, isMobile }) {
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={isMobile ? "mobile-sidebar" : "profile-sidebar"}>
      <ul className={isMobile ? "mobile-ul" : ""}>
        <li
          className={
            activeTab === "myOrder" ? "profile-active profile-li" : "profile-li"
          }
          onClick={() => handleTabClick("myOrder")}
        >
          My Order
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </li>
        <li
          className={
            activeTab === "accountDetails"
              ? "profile-active profile-li"
              : "profile-li"
          }
          onClick={() => handleTabClick("accountDetails")}
        >
          Account Details
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </li>
        <li
          className={
            activeTab === "accountPassword"
              ? "profile-active profile-li"
              : "profile-li"
          }
          onClick={() => handleTabClick("accountPassword")}
        >
          Account Password
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
