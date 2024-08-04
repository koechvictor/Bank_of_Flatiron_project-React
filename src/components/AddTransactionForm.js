import React, { useState } from "react";

function AddTransactionForm() {

    const [formData, setFormData] = useState({
        date: "",
        name: "",
        category: "",
        amount: "",
    })

    function handleChange(e) {
        const newData = { ...formData }
        newData[e.target.name] = e.target.value
        setFormData(newData)
        console.log(newData)
    }
    function handleSubmit(e) {

        e.preventDefault();
        fetch("https://render-json-db-xiqd.onrender.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert('data added succesfully');
            });

    }


    return (
        <div className="ui segment">
            <form className="ui form" method='post' onSubmit={handleSubmit} >
                <div className="inline fields">
                    <input type="date" onChange={(e) => handleChange(e)} value={formData.date} name="date" />
                    <input type="text" onChange={(e) => handleChange(e)} value={formData.description} name="description" placeholder="Description" />
                    <input type="text" onChange={(e) => handleChange(e)} value={formData.category} name="category" placeholder="Category" />
                    <input type="number" onChange={(e) => handleChange(e)} value={formData.amount} name="amount" placeholder="Amount" step="0.01" />
                </div>
                <button className="ui button" type="submit">
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default AddTransactionForm;