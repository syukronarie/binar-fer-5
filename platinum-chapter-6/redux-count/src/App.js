import "./App.css";
import ButtonDecrement from "./components/ButtonDecrement";
import ButtonIncrement from "./components/ButtonIncrement";
import { Count } from "./components/Count";
import Count2 from "./components/Count2";

function App() {
  return (
    <>
      <Count />
      <ButtonIncrement />
      <ButtonDecrement />

      <br />
      <br />
      <br />
      <br />

      <Count2 />
    </>
  );
}

export default App;
