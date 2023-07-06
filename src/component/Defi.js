import { useState } from "react";
export default function Word({cur}){
  const [isShow, setIsShow] = useState(false);

  function toggleShow(){
    setIsShow(!isShow);
  }


  return (
<tr> 
        
         <td>{cur.sc}</td>
         <td>{isShow && cur.def}</td>
         <td>
           <button onClick={toggleShow}>
           {isShow ? 'HIDE':'SHOW'}
           </button>

         </td>
       </tr> 
);
}