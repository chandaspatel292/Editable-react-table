import { useState } from "react";
import AllTable from "./Tables/AllTable";
import './App.css';

const App = () => {
  const [pageTitle, setPageTitle] = useState("Untitled");

  const handleTitleChange = (event) => {
    setPageTitle(event.target.value);
  };

  return (
    <div className="WholePage">
      <h1>
        <input
          id="wholePageName"
          type="text"
          value={pageTitle}
          onChange={handleTitleChange}
          style={{
            color: pageTitle === "Untitled" ? "grey" : "black",
            border: "none",
            outline: "none",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        />
      </h1>
          
          <AllTable />

    </div>
  );
};

export default App;
