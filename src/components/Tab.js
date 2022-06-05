import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";

function Tab({ children, activeTab, setActiveTab }) {

  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "bg-green-100" : "bg-gray-100"}
            key={index}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[activeTab]}
    </div>
  );
}

//dk 18'den sonrasını tekrar izle.

Tab.Panel = function ({ children, title }) {
  return <div>{children}</div>;
};

export default Tab;
