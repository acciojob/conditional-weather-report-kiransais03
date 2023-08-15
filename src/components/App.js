
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [input,setInput] = useState({ temperature: 25, conditions: "Sunny" });
  if(input)
  return (
    <div>
        {/* Do not remove the main div */}
       <input type="number" value={input.temperature} onChange={(e)=>{
        if(e.target.value>20)
        {
          setInput({temperature:e.target.value,conditions: "Sunny"});
        }
          else
          {
            setInput({temperature: e.target.value, conditions: "Cold"})
          }}}/>
       {input && <p className={`${input.conditions}`}>The temperature is {input.temperature} degrees.Weather Condition is {input.conditions}</p>}
    </div>
  )
}

export default App
