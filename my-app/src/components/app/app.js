
import './app.css'
import React, { useState } from "react";

const App = () => {

    const [word, setWord] = useState([])

    function formBtn(e) {
        e.preventDefault();

        let lne = {
            name: e.target[0].value,
            sname: e.target[1].value,
            age: e.target[2].value,
        };
        setWord(oldArray => [...oldArray, lne]);
        console.log(word)
    }

    return (
        <div>
            <div className="wrapper">
                <form className="form" onSubmit={formBtn}>
                    <input className="FirstName" type="text"></input>
                    <input className="LastName" type="text"></input>
                    <input className="age" type="number"></input>
                    <button className="submit">Submit</button>
                </form>
                <ul className="list">
                    {word?.map((e, i) => (
                        <li className='list-item'>{e.name} {e.sname} {e.age}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default App;