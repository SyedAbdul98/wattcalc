import React, { useEffect, useState } from "react";

const Logs : React.FC = () : JSX.Element => {
  const [logs, setLogs] = useState<number[]>([])

  useEffect(() => {
    fetch("http://localhost:9000/gett")
      .then((response) => response.json())
      .then((res) => setLogs(res))
      .catch(error => console.log(error))
  }, []);
  return <div className="container h1">
    <div className="col-md-1">
      <h1 className="">Logs</h1>
    </div>
    {logs.map((i : any) => {
      return (
        <p>
       { i.watts.map((val : any) => {
          return (
            val
          )
        })}
        </p>
      )
    })}
    </div>;
};

export default Logs;
