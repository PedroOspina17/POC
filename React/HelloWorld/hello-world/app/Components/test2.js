import { useContext } from "react";
import { counterContext } from "./page";

export function Test2({children}){ //Accessing to children
    const {counter: current, setCounter} = useContext(counterContext);
    return (

        <div>
            <h5>My context counter: {current}</h5>
            Hi this is the test 2
            {children}
            <button className="btn btn-warning" onClick={() => setCounter(current + 1)}>Increase counter from children</button>
        </div>
    );
}

export default Test2;