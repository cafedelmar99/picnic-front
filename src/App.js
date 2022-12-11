import React, { useState, useEffect } from "react";
import axios from "axios";
import Questionnaire from "./Components/Questionnaire";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://picnic-production.up.railway.app/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setData(res.data.flat(1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Questionnaire data={data} />
    </div>
  );
}

export default App;


