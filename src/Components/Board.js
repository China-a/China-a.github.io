import React from "react";
import Square from "./Square";

let style = {
    border:"8px solid orangered", 
    borderRadius: "5px",
    width: "280px",
    height: "280px",
    margin: "0", 
    display: "grid", 
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
}

 let Board = ({squares, onClick}) => (
 <div style={style}>
     {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)}/>

     ))}
     
   {/* <Square value="1" onClick={() => onClick("dummy value")}/>
   <Square value="2" onClick={() => onClick("dummy value")}/>
   <Square value="3" onClick={() => onClick("dummy value")}/>
   <Square value="4" onClick={() => onClick("dummy value")}/>
   <Square value="5" onClick={() => onClick("dummy value")}/>
   <Square value="6" onClick={() => onClick("dummy value")}/>
   <Square value="7" onClick={() => onClick("dummy value")}/>
   <Square value="8" onClick={() => onClick("dummy value")}/>
   <Square value="9" onClick={() => onClick("dummy value")}/> */}
 </div>
 )


 export default Board