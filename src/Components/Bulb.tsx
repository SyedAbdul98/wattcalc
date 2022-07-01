import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Bulb = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-1 m-1">
            <LightbulbIcon
              style={{ width: "100px", height: "50px", color: "red" }}
            />
          </div>
          <div className="col-lg-1 m-1">
            <LightbulbIcon
              style={{ width: "100px", height: "50px", color: "yellow" }}
            />
          </div>
          <div className="col-lg-1 m-1">
            <LightbulbIcon
              style={{ width: "100px", height: "50px", color: "green" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulb;
