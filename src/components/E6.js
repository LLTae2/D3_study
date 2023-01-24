import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import * as d3 from "d3";

const graphInfo = [
  { key: "평균기온(°C)", color: "white" },
  { key: "평균최고기온(°C)", color: "red" },
  { key: "평균최저기온(°C)", color: "blue" },
];

const E6 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    d3.csv("/data/data.csv").then((data) => {
      setData(data);
    });
  }, []);
  return (
    <div>
      <LineChart graphInfo={graphInfo} data={data} />
    </div>
  );
};

export default E6;
