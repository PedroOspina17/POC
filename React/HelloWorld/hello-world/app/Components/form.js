import { Input } from "postcss";
import { useContext, useState } from "react";
import { counterContext } from "./page";

export function Form(){
    const {entries, setEntries} = useContext(counterContext); 

    const entryEmpty = {
        id: 0,
        name: "",
        age: 0
    };
    const [entry, setEntry] = useState(entryEmpty);
    const handleChange = (e)=>{
        setEntry({...entry,[e.target.name]:e.target.value});
    };
    const AddEntry = (e) => {
        e.preventDefault();
        setEntries([...entries, entry]);
        setEntry(entryEmpty);
    }
    return (
        <form>
            <label>Id</label>
            <input name="id" value={entry.id} placeholder="type your id" onChange={handleChange}/>
            <label>Name</label>
            <input name="name" value={entry.name} placeholder="type your name" onChange={handleChange}/>
            <label>Age</label>
            <input name="age" value={entry.age} placeholder="type your age" onChange={handleChange}/>
            <input type="submit" value="add" onClick={AddEntry} />
        </form>
    );
};

export default Form;