"use client";

import Banner from "./banner";
import Test from "./test";
import Test2 from "./test2";
import Detail from "./detail";
import Form from "./form";
import React, { useCallback, useState } from "react";
const counterContext = React.createContext(0);

const entriesInitial = [
    {
      id: 1,
      name: "Pedro",
      age: 27
    },
    {
      id: 11,
      name: "Menor 1",
      age: 16
    },
    {
      id: 2,
      name: "Maritza",
      age: 27
    },
    {
      id: 12,
      name: "Menor 2",
      age: 10
    },
  ];

  
export function Page() {
    // const {increaseCounter} = useCallback((val)=>{
    //     setCounter(counter + val);
    // });
    const [entries, setEntries] = useState(entriesInitial);
    const [counter, setCounter] = useState(0);
    const contextVal = {counter,setCounter,entries, setEntries};
  return (
    <div className="container">
      <counterContext.Provider value={contextVal}>
        <Banner headerText="This is my first page" />
        <Test myProp="This is the prop value" />
        <Test2>
          <div>
            Sending some children to my component.{" "}
            <b>This can be as complex as i want.</b>
          </div>
        </Test2>
        <Form></Form>
        <Detail></Detail>
        <button className="btn btn-success" onClick={()=> setCounter(counter + 1)}>Increase basic contex from container</button>
      </counterContext.Provider>
    </div>
  );
}

export {counterContext};
export default Page;
