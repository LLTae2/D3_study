import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";

const drawCanvas = (canvas) => {
  return canvas.append("svg").attr("width", 500).attr("height", 500);
};

const SnowMan = styled.svg`
  background-color: black;
`;

const PieChart = () => {
  const data = [100, 50, 80, 200, 150];
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = drawCanvas(canvas);
    const arcGenerator = d3.arc().innerRadius(75).outerRadius(150);
    const pieGenerator = d3.pie();
    const g = svg.append("g").attr("transform", "translate(250, 250)");
    g.selectAll("path")
      .data(pieGenerator(data))
      .enter()
      .append("path")
      .attr("fill", (d) => {
        if (d.data >= 120) return "white";
        return "#999";
      })
      .attr("stroke", "black")
      .attr("stroke-width", 8)
      .attr("d", arcGenerator);
  }, []);
  return <SnowMan width={500} height={500} ref={canvasRef}></SnowMan>;
};

export default PieChart;
