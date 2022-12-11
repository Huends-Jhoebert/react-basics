import React, { useState } from "react";

const UseStateCounter = () => {
   const [value, setValue] = useState(0);

   const increase = () => {
      setValue(value + 1);
   };

   const reset = () => {
      setValue(0);
   };

   const decrease = () => {
      setValue(value - 1);
   };

   return (
      <React.Fragment>
         <section style={{ margin: "4rem 0" }}>
            <h1>{value}</h1>
            <button className="btn" onClick={decrease}>
               Decrease
            </button>
            <button className="btn" onClick={reset}>
               Reset
            </button>
            <button className="btn" onClick={increase}>
               Increase
            </button>
         </section>
      </React.Fragment>
   );
};

export default UseStateCounter;
