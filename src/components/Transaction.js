import React from "react";
import { Trash2 } from 'lucide-react';

function Transaction({ transaction, setOnDelete }) {

    function handleDelete(id) {
        fetch(`https://render-json-db-xiqd.onrender.com/${id}`, {
            method: "DELETE"
        })
            .then((data) => data.json())
            .then((res) => {

                setOnDelete(id)

            })
    }

    return (
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td><Trash2 style={{ color: "red" }} onClick={() => handleDelete(transaction.id)} /></td>
        </tr>
    );
}

export default Transaction;
