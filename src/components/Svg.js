import styled from "@emotion/styled";
import React from "react";

const SnowManBody = () => {
  return (
    <>
      <circle
        cx={250}
        cy={350}
        r={130}
        fill={"white"}
        strokeWidth={15}
        stroke={"black"}
      ></circle>
      <circle
        cx={250}
        cy={180}
        r={85}
        fill={"white"}
        strokeWidth={15}
        stroke={"black"}
      ></circle>
    </>
  );
};

const SnowManEyes = () => {
  return (
    <>
      <circle className="left_eye" cx={210} cy={180} r={15}></circle>
      <circle cx={260} cy={180} r={15}></circle>
    </>
  );
};

const SnowManArms = () => {
  return (
    <>
      <line
        x1={70}
        y1={180}
        x2={150}
        y2={300}
        stroke={"white"}
        strokeWidth={15}
      ></line>
      <line
        x1={430}
        y1={180}
        x2={350}
        y2={300}
        stroke={"white"}
        strokeWidth={15}
      ></line>
    </>
  );
};

const SnowManHat = () => {
  return (
    <rect
      // x={110}
      // y={55}
      width={75}
      height={40}
      fill={"white"}
      stroke={"black"}
      strokeWidth={15}
      transform={"translate(312, 65) rotate(45)"}
    ></rect>
  );
};

const SnowMan = styled.svg`
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

const Svg = () => {
  return (
    <SnowMan width={500} height={500}>
      <SnowManArms />
      <SnowManHat />
      <SnowManBody />
      <SnowManEyes />
    </SnowMan>
  );
};

export default Svg;
