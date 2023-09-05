import { useState } from "react";
import './AllTable.css';
import Table from "./Table";

const AllTable = () => {

    const [AllTableName, setAllTableName] = useState("Untitled");

    const handleAllTableNameChange = (event) => {
        setAllTableName(event.target.value)
    };

    return(
        <div className="everyTable">
            <input
                id="allTheTableName"
                type="text"
                defaultValue={AllTableName}
                onBlur={handleAllTableNameChange}
                style={{
                    backgroundColor: "inherit",
                    color: AllTableName === "Untitled" ? "grey" : "black",
                    border: "none",
                    maxWidth:'180px',
                    outline: "none",
                    fontSize: "24px",
                    fontWeight: "bold",
                }}
            />
            <div className="table-space">
                <Table />
            </div>
        </div>
    )

    

}

export default AllTable;