import React, {useState} from "react";
import Tweet from "./Tweet";


function App(){

const [isRed, setRed] = useState(false);
const [isCount, setCount] = useState(0);

  return(
    <div className="App">
      <Tweet name='Sylw' message='Happy Sylw '/>
      <Tweet name='Snowman' message='Snow is falling'/>
     <Tweet name='Rudolf' message='All around me'/>
     <Tweet name='Santa' message='Room is swaying'/>
    </div>
  );
}

export default App;