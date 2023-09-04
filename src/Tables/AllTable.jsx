import { useState } from "react";
import './AllTable.css';
import Tables from "./Tables";

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
                value={AllTableName}
                onChange={handleAllTableNameChange}
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
            <Tables />
        </div>
    )

    

}

export default AllTable;