import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";

const drawCanvas = (canvas) => {
  return canvas.append("svg").attr("width", 500).attr("height", 500);
};

const SnowMan = styled.svg`
  background-color: black;
`;

const LineChart = ({ graphInfo, data }) => {
  console.log(graphInfo, data);
  // const data = [100, 50, 80, 200, 150];
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = drawCanvas(canvas);
    const yScaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 300]);

    console.log(data);
    const xFunc = (data, index) => 50 + index * 35;
    graphInfo.forEach((item) => {
      const yFunc = (data) => yScaleFunc(50 - data[item.key]);
      const lineGenerator = d3.line().x(xFunc).y(yFunc);
      svg
        .append("path")
        .attr("stroke", item.color)
        .attr("stroke-width", 4)
        .attr("d", lineGenerator(data))
        .attr("fill", "none");
    });
  }, [data]);
  return <SnowMan width={500} height={500} ref={canvasRef}></SnowMan>;
};

export default LineChart;
