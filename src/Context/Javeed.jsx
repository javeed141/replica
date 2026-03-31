// import { useCallback, useEffect, useState } from "react";

// const Javeed = () => {
//   const [count, setCount] = useState(0);
//   const [name, setData] = useState("Ali");

//   // This function is recreated EVERY time MyComponent renders
//   // Whether count changes OR name changes — doesn't matter, new function every time
//  const fetchData = useCallback(() => {
//     console.log("Fetching...");
//     setData("data-" + Math.random()); // DIFFERENT value every time
//   },[count])

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(prev =>prev+1)
//       }}>Count: {count}</button>
//     </div>
//   );
// };

// export default Javeed


import React, { useRef, useState } from 'react'

const Javeed = () => {
    const[count,setCount]=useState(0);





  return (
    <div   >
        <button onClick={()=>{
        setCount(prev=>prev+1);
    }}>Click</button>
    <span>{count}</span>
        </div>
  )
}

export default Javeed