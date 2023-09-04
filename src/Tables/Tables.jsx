import { useState, useEffect } from "react";
import "./Tables.css";

const Tables = () => {
  const [tableName, setTableName] = useState("Untitled");
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [tableData, setTableData] = useState(createInitialTableData());
  const [columnNames, setColumnNames] = useState(createInitialColumnNames());

  useEffect(() => {
    console.log("Table Data or Column Names Updated");
  }, [tableData, columnNames]);

  function createInitialTableData() {
    const data = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push("");
      }
      data.push(row);
    }
    return data;
  }

  function createInitialColumnNames() {
    const names = [];
    for (let j = 0; j < columns; j++) {
      names.push(`Column ${j + 1}`);
    }
    return names;
  }

  const addRow = () => {
    setRows(rows + 1);
    setTableData([...tableData, Array(columns).fill("")]);
  };

  const addColumn = () => {
    setColumns(columns + 1);
    setTableData(tableData.map((row) => [...row, ""]));
    setColumnNames([...columnNames, `Column ${columns + 1}`]);
  };

  const handleCellChange = (e, rowIndex, columnIndex) => {
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = e.target.value;
    setTableData(newData); 
  };

  const handleColumnNameChange = (e, columnIndex) => {
    
    const newColumnNames = [...columnNames];
    newColumnNames[columnIndex] = e.target.value;
    setColumnNames(newColumnNames); 
  };

  const createTable = () => {
    const table = [];
    const headerRow = [];
    for (let j = 0; j < columns; j++) {
      headerRow.push(
        <th key={j}>
          <input
            type="text"
            value={columnNames[j]}
            onChange={(e) => handleColumnNameChange(e, j)}
            onBlur={(e) => handleColumnNameChange(e, j)}
            style={{
              color: columnNames[j] === `Column ${j + 1}` ? "grey" : "black",
            }}
          />
        </th>
      );
    }
    table.push(<tr key="header">{headerRow}</tr>);

    // Create data rows
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        const cellId = `cell-${i}-${j}`;
        row.push(
          <td key={j}>
            <input
              type="text"
              id={cellId}
              name={cellId}
              value={tableData[i][j]}
              onChange={(e) => handleCellChange(e, i, j)}
              onBlur={(e) => handleCellChange(e, i, j)}
            />
          </td>
        );
      }
      table.push(<tr key={i + 1}>{row}</tr>);
    }

    return table;
  };

  return (
    <div className="eachTable">
      <input
        id="eachTableName"
        type="text"
        value={tableName}
        onChange={(event) => setTableName(event.target.value)}
        style={{
          backgroundColor: "inherit",
          color: tableName === "Untitled" ? "grey" : "black",
          border: "none",
          outline: "none",
          fontSize: "18.72px",
          fontWeight: "bold",
        }}
      />
      <table>
        <tbody>{createTable()}</tbody>
      </table>
      <button onClick={addRow}>Add row</button>
      <button onClick={addColumn}>Add column</button>
    </div>
  );
};

export default Tables;
