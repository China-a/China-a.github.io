import React from "react"
//  let props = {
//      onClick: () => "function",
//      value: "X"
//  };

//  let {value} = props
 let style = {
     background: "coral",
     border: "3px solid gold",
     fontSize: "50px",
     fontWeight: "900",


 }
let Square = ({value, onClick}) => ( 
 <button style={style} onClick={onClick}>
     {value}
 </button>
 )


 export default Square;