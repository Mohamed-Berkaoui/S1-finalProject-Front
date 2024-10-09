import React from "react";
import { useNavigate } from "react-router-dom";
import PrevOrderBox from "../components/PrevOrderBox";
import "../styles/prevorderspage.css"


function PreviousOrders() {
  const navigate = useNavigate();
  return (
    <div className="oldorders-container">
      <h2>orders </h2>

      <div className="oldorders-boxes">
        {[0, 0, 0].map((product) => (
          <PrevOrderBox />
        ))}
      </div>
      <div className="back">
        <h4 onClick={() => navigate(-1)}>
          <i class="fa-solid fa-arrow-left"></i>
        </h4>
      </div>
    </div>
    
  );
}

export default PreviousOrders;
