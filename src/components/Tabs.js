import React, { useEffect, useState } from "react";

const Tabs = (props) => {
  const [tabs, setTabs] = useState([]);
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      <div className="container">
        <div className="btn-group btn-group-toggle">
          <button className="btn btn-secondary active">Bootstrap?</button>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
