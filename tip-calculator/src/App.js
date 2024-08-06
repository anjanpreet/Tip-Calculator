import { useState } from "react";
import Bill from "./components/Bill";
import Service from "./components/Service";
import Output from "./components/Output";
function App() {
  const [bill, setBill] = useState(0);
  const [option, selectedOption] = useState(5);
  const [friendOption, setFriendOption] = useState(5);
  return (
    <>
      <Bill bill={bill} setBill={setBill}></Bill>
      <br></br>
      <Service option={option} setOption={selectedOption}>
        How did you like the service ?
      </Service>
      <br></br>
      <Service option={friendOption} setOption={setFriendOption}>
        How did your friend like the service ?
      </Service>
      <Output option={option} friendOption={friendOption} bill={bill}></Output>
    </>
  );
}

export default App;
