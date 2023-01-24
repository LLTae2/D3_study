import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";

const drawCanvas = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: black");
};

const StickChart = () => {
  const data = [100, 10, 50, 50, 30, 80, 200, 150];
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = drawCanvas(canvas);
    const maxi = Math.max(...data);

    const xFunc = (data, index) => 130 + index * 35;
    const yFunc = (data) => 350 - data;
    const drawLineChartGenerator = d3.line().x(xFunc).y(yFunc);

    data.map((item, idx) => {
      svg
        .append("rect")
        .attr("id", item === maxi ? "rect-max" : `rect-${idx}`)
        .attr("height", 0)
        .attr("width", 20)
        .attr("fill", "white")
        .attr("x", 120 + idx * 35)
        .attr("y", 350)
        .transition()
        .duration(500)
        .ease(d3.easeExpInOut)
        .attr("height", item)
        .attr("y", 350 - item);
      d3.select("#rect-max")
        .transition()
        .duration(500)
        .style("fill", "#0000ff")
        .delay(500);

      svg
        .append("text")
        .attr("fill", "white")
        .text(item)
        .attr("x", 120 + idx * 35)
        .attr("y", 330 - item);
    });

    const path = svg
      .append("path")
      .attr("d", drawLineChartGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 5);
    const length = path.node().getTotalLength();
    path
      .attr("stroke-dashoffset", length)
      .attr("stroke-dasharray", length)
      .transition()
      .duration(1000)
      .attr("stroke-dashoffset", 2);
  }, []);

  return <div width={500} height={500} ref={canvasRef}></div>;
};

export default StickChart;
