import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState("false");

    const updateName = () => {
        setName("Abdul");
    }

    const incrementAge =() =>{
        setAge(age+1);
    }

    const toggle = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>

        <p>Is Employed: {isEmployed? "Yes" : "No"}</p>
        <button onClick={toggle}>Toggle status</button>


    </div>);
}
export default MyComponent