import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "@emotion/styled";

const drawArms = (svg) => {
  svg
    .append("line")
    .attr("x1", 70)
    .attr("y1", 180)
    .attr("x2", 150)
    .attr("y2", 300)
    .attr("stroke", "white")
    .attr("stroke-width", 15);
  svg
    .append("line")
    .attr("x1", 430)
    .attr("y1", 180)
    .attr("x2", 350)
    .attr("y2", 300)
    .attr("stroke", "white")
    .attr("stroke-width", 15);
};

const drawHat = (svg) => {
  svg
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 75)
    .attr("height", 40)
    .attr("fill", "white")
    .attr("transform", "translate(312, 65) rotate(45)");
};

const drawBody = (svg) => {
  svg
    .append("circle")
    .attr("cx", 250)
    .attr("cy", 350)
    .attr("r", 130)
    .attr("fill", "white")
    .attr("stroke-width", 15)
    .attr("stroke", "black");
  svg
    .append("circle")
    .attr("cx", 250)
    .attr("cy", 180)
    .attr("r", 85)
    .attr("fill", "white")
    .attr("stroke-width", 15)
    .attr("stroke", "black");
};

const drawEyes = (svg) => {
  svg
    .append("circle")
    .attr("cx", 210)
    .attr("cy", 180)
    .attr("r", 15)
    .attr("fill", "black")
    .attr("class", "left_eye");
  svg
    .append("circle")
    .attr("cx", 260)
    .attr("cy", 180)
    .attr("r", 15)
    .attr("fill", "black");
};

const drawCanvas = (canvas) => {
  return canvas
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .attr("style", "background: black");
};

const Container = styled.svg`
  .left_eye {
    animation-name: blink;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    transform-origin: 0 180px;
    animation-direction: alternate;
  }
  background-color: black;
  @keyframes blink {
    to {
      transform: scaleY(0.1);
    }
  }
`;

const SnowMan = () => {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = d3.select(canvasRef.current);
    const svg = drawCanvas(canvas);
    drawArms(svg);
    drawHat(svg);
    drawBody(svg);
    drawEyes(svg);
  }, []);
  return <Container width={500} height={500} ref={canvasRef}></Container>;
};

export default SnowMan;
