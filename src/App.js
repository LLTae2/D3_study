import styled from "@emotion/styled";
import SnowMan from "./components/SnowMan";
import StickChart from "./components/StickChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import Svg from "./components/Svg";
import E6 from "./components/E6";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function App() {
  return (
    <Container>
      {/* <Svg /> */}
      <SnowMan />
      <StickChart />
      <PieChart />
      <E6 />
    </Container>
  );
}

export default App;
