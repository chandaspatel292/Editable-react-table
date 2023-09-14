// Rows.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Rows.css';

function Rows({ columns }) { // Receive 'columns' as a prop
  const [RowsData, setRowsData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  // Function to add a new row
  const addRow = () => {
    const newRow = Array(columns).fill(''); // Use 'columns' prop here
    setRowsData([...RowsData, newRow]);
  };

  const deleteRow = (rowIndex) => {
    const updatedData = [...RowsData];
    updatedData.splice(rowIndex, 1);
    setRowsData(updatedData); 
  }

  // Function to handle input changes
  const handleInputChange = (e, rowIndex, columnIndex) => {
    const updatedData = [...RowsData];
    updatedData[rowIndex][columnIndex] = e.target.value;
    setRowsData(updatedData);
  };

  // Function to handle input blur
  const handleBlur = (rowIndex) => {
    console.log('Row', rowIndex, 'Data:', RowsData[rowIndex]);
    console.table(RowsData);
    setEditingRow(null); // Clear editing row
  };

  // Initialize with two rows when the component mounts
  useEffect((rowIndex) => {
    const initialRows = [
      Array(columns).fill(RowsData[rowIndex]), // Use 'columns' prop here
      Array(columns).fill(RowsData[rowIndex]), // Use 'columns' prop here
    ];
    setRowsData(initialRows);
  }, [columns]); // Make sure to include 'columns' in the dependency array

  // Function to dynamically adjust textarea height
  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  return (
    <div>
      <table>
        <tbody>
          {RowsData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={editingRow === rowIndex ? 'editing' : hoveredRow === rowIndex ? 'highlight' : ''}
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              {row.map((column, columnIndex) => (
                <td key={columnIndex}>
                  <textarea
                    value={column}
                    onChange={(e) => {
                      handleInputChange(e, rowIndex, columnIndex);
                      adjustTextareaHeight(e.target);
                    }}
                    onBlur={() => handleBlur(rowIndex)}
                    onFocus={() => setEditingRow(rowIndex)}
                    ref={(textareaRef) =>
                      textareaRef && adjustTextareaHeight(textareaRef)
                    }
                    style={{
                      resize: 'none',
                      border: 'none',
                      boxSizing: 'inherit',
                    }}
                  />
                  
                </td>
              ))}
              <td><button onClick={() => deleteRow(rowIndex)}>X</button></td>
              
            </tr>
            
          ))}
        </tbody>
      </table>
      <button id="add-row-button" onClick={addRow}>
        <span id='plus-icon'>+</span>Add new
      </button>
    </div>
  );
}

export default Rows;
