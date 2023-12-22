import { useState } from "react";

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.username + " " + inputs.age);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label><br />
            <input type="submit" />
            <div style={{ marginTop: "30px" }}>
                <strong>Name</strong>: {inputs.username}
            </div>
            <div style={{ marginTop: "30px" }}>
                <strong>Age</strong>: {inputs.age}
            </div>
        </form>
    )
}

export default MyForm;