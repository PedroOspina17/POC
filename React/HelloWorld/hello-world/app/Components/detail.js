import { useContext, useState } from "react";
import { counterContext } from "./page";
import TableEntry from "./table-entry";

export function Detail() {
    const {entries} = useContext(counterContext);
    
    
  return (
    // the return always have to have a parent element, it can be an empty one.
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age a</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <TableEntry key={e.key} entry={e} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Detail;
