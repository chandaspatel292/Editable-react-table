import { useState } from "react";
import "./Table.css";
//import Rows from "./Rows";

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
    console.table(newColumnNames);
  };

  const columnNameInputs = columnName.map((name, index) => (
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
  ));

  return (
    <div className="table-div">
      <input
        type="text"
        id="table-name"
        defaultValue={tableName}
        onBlur={(event) => setTableName(event.target.value) }
        style={{
          color: tableName === "Untitled" ? "grey" : "black",
          border: "none",
          outline: "none",
          fontSize: "1.5vw",
          fontWeight: "bold",
          backgroundColor: "inherit",
        }}
      />

      <div className="whole-table" style={{ overflow: "auto" }}>
        <div className="column-name">{columnNameInputs}</div>
      </div>

    </div>
  );
};

export default Table;
export { ColumnNames };
