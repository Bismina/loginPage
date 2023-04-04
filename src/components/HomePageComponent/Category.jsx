import React, { useState } from "react";
import "../HomePageComponent/home.css";
import toggle from "../LoginPageComponent/assets/toggle.svg";
function Category({ categories, filterItems }) {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (region) => {
    setActiveTab(region);
    filterItems(region);
  };

  return (
    <div>
      <div className="toggle">
        <img src={toggle} alt="toggle" />
      </div>
      <div className="tabs">
        {categories.map((item, index) => {
          return (
            <div key={index}>
              <label
                onClick={() => handleTabClick(item)}
                className={`tab-label ${activeTab === item ? "active" : ""}`}
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
