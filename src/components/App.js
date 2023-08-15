
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
       {input.temperature && <div><p className={`${input.conditions}`}>Temperature: {input.temperature}</p></div>}
    </div>
  )
}

export default App
