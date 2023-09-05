import { useState } from "react";
import "./Table.css";

const Rows = () => {
    const [RowNum, setRowNum] = useState(3);
    const [RowData, setRowData] = useState({});

    const addRow =() => {
        setRowNum(RowNum + 1);
    }

}