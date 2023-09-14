//Table.jsx
import { useState } from "react";
import "./Table.css";
import Rows from "./Rows";

function ColumnNames(columns) {
  const names = [];
  for (let j = 0; j < columns; j++) {
    names.push(`Column ${j + 1}`);
  }
  return names;
}

const Table = () => {
  const [tableName, setTableName] = useState("Untitled");
  const [columns, setColumns] = useState(4);
  const [columnName, setColumnName] = useState(ColumnNames(columns));

  const handleBlur = (e, index) => {
    const newColumnNames = [...columnName];
    newColumnNames[index] = e.target.value;
    setColumnName(newColumnNames);
    console.log(newColumnNames);
  };

  const addColumns = () => {
    // Increase the number of columns by 1
    const newColumnsCount = columns + 1;
    setColumns(newColumnsCount);

    // Generate new column names
    const newColumnNames = ColumnNames(newColumnsCount);
    setColumnName(newColumnNames);
  };

  const deleteColumns = (columnIndex) => {
    const afterDelete = [...columnName];
    afterDelete.splice(columnIndex, 1);
    setColumnName(afterDelete);
    const newColumnsCount = columns - 1;
    setColumns(newColumnsCount);
  };

  const [AllTableName, setAllTableName] = useState("Untitled");

  const handleAllTableNameChange = (event) => {
    setAllTableName(event.target.value);
  };

  const columnNameInputs = columnName.map((name, index) => (
    <td key={name}>
      <input
        type="text"
        key={index}
        className={`column-text ${
          index === 0 ? "left-align" : index === columns - 1 ? "right-align" : "center-align"
        }`}
        defaultValue={name}
        onBlur={(e) => handleBlur(e, index)}
        style={{
          color: "black",
          margin: "0.5em",
          border: "0",
          backgroundColor: "inherit",
          fontSize: "16px",
        }}
      />
      <button className="column-delete" onClick={()=>deleteColumns(index)}>X</button>
    </td>
    
  ));
  

  return (
    <div className="everyTable">
      <input
        id="TableName"
        type="text"
        defaultValue={AllTableName}
        onBlur={handleAllTableNameChange}
        style={{
          backgroundColor: "inherit",
          color: AllTableName === "Untitled" ? "grey" : "black",
          border: "none",
          maxWidth: "180px",
          outline: "none",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      />
      <div className="table-space">
        <div className="table-div">
          <input
            type="text"
            id="table-name"
            defaultValue={tableName}
            onBlur={(event) => setTableName(event.target.value)}
            style={{
              color: tableName === "Untitled" ? "grey" : "black",
              border: "none",
              outline: "none",
              fontSize: "1.5vw",
              fontWeight: "bold",
              backgroundColor: "inherit",
            }}
          />
          <table className="whole-table" style={{ overflow: "auto" }}>
            <thead className="column-name">
              <tr id="columns">
                {columnNameInputs}
                <td>
                  <button className="Add-column" onClick={addColumns}>
                    +
                  </button>
                </td>
              </tr>
            </thead>
          </table>
          <Rows columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Table;
