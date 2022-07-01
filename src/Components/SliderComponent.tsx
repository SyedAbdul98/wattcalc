import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const SliderComponent : React.FC = () : JSX.Element => {   

  const watts : Number[] = [5, 10, 20]

  const [watt, setWatts] = useState<number>(0)
  const [logsArray, setLogsArray] = useState<number[]>([])


  function getValue (e : ChangeEvent<HTMLInputElement> | any) : void {
    setWatts(e.target.value)
    setFrequency(watt)
    console.log("logs: ",logsArray)
  }

  function setFrequency (watt : number) : void {
    let min_value : number = 5

    let logs = watts.map((val : number | any) => {
      return ((watt - min_value) / 10) * val;
    })

    setLogsArray(logs)
    postData()
  }

  const postData =  () : void => {
    try{

      axios.post("http://localhost:9000/gett", {logsArray})
     
    }catch(error){
      console.log(error);
    }
  } 

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-3">
          <Box width={300}>
            <Slider
              size="small"
              defaultValue={5}
              min={5}
              max={20}
              marks
              step={5}
              value={watt}
              aria-label="Small"
              valueLabelDisplay="auto"
              onChange={getValue}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
