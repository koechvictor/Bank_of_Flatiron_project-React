import React, { useState, useDeferredValue } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

function Search() {
    const [searchValue, setSearchValue] = useState("")
    const deferredSearchValue = useDeferredValue(searchValue);

    return (
        <div>
            <div className="ui large fluid icon input">
                <input
                    type="text"
                    placeholder="Search your Recent Transactions"
                    onChange={(e) => { setSearchValue(e.target.value) }}

                />
                <i className="circular search link icon"></i>
            </div>
            <AddTransactionForm />
            <TransactionsList searchValue={deferredSearchValue} />
        </div>
    );
}

export default Search;
