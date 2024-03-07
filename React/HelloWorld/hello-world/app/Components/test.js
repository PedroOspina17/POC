import { useContext } from "react";
import Banner from "./banner";
import { counterContext } from "./page";

const Test = ({myTest}) => { // Using destructured props 
    const {counter: current} = useContext(counterContext);

  return (
    <div>
        <h5>My context counter: {current}</h5>
        Test 1: Destructured props
        {myTest}
    </div>
  );
};

export default Test;
