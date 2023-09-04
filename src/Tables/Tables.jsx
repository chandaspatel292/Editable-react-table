import { useState } from "react";
import "./Tables.css"

const Tables = () => {

    const [tableName, setTabelName] = useState("Untitled");

    const handleTableNameChange = (event) => {
        setTabelName(event.target.value);
    };
    const [rows, setRows] = useState(3);
    const [columns, setColumns] = useState(3);
    const [tableData, setTableData] = useState(createInitialTableData());

    function createInitialTableData() {
        const data = [];
        for (let i = 0; i < rows; i++) {
          const row = [];
          for (let j = 0; j < columns; j++) {
            row.push('');
          }
          data.push(row);
        }
        return data;
      }

      const addRow = () => {
        setRows(rows + 1);
        setTableData([...tableData, Array(columns).fill('')]);
      };

      const addColumn = () => {
        setColumns(columns + 1);
        setTableData(tableData.map((row) => [...row, '']));
      };

      const handleCellChange = (e, rowIndex, columnIndex) => {
        const newData = [...tableData];
        newData[rowIndex][columnIndex] = e.target.value;
        setTableData(newData);
      };

      const createTable = () => {
        const table = [];
        // Create a header row for column names
        const headerRow = [];
        for (let j = 0; j < columns; j++) {
          headerRow.push(
            <th key={j}>
              <input
                type="text"
                id={`column-${j}`}
                name={`column-${j}`}
                placeholder={`Column ${j + 1}`}
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
                />
              </td>
            );
          }
          table.push(<tr key={i + 1}>{row}</tr>);
        }
      
        return table;
      };
      
      
      


    return(
        <div className="eachTable">
            <input
                id="eachTableName"
                type="text"
                value={tableName}
                onChange={handleTableNameChange}
                style={{
                    backgroundColor: "inherit",
                    color:tableName === "Untitled" ? "grey" : "black",
                    border: "none",
                    outline: "none",
                    fontSize: "18.72px",
                    fontWeight: "bold",
                }}/>
        <table><tbody>{createTable()}</tbody></table>
        <button onClick={addRow}>Add row</button>
        <button onClick={addColumn}>Add column</button>
        </div>
    )

}

export default Tables;
