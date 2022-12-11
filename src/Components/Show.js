import React, { useState } from "react";
import { Chart } from "react-google-charts";

function Show({ mark, data }) {
  const [nums, setNums] = useState([]);

  //filtering through mark array, to get complete data per segment description
  const clickedSegmentDescription = data.filter((item) => {
    let values = Object.values(item);
    let result = false;
    mark.map((param) => {
      if (values.includes(param)) {
        result = true;
      }
    });
    return result;
  });

  //calculating Insta, converting to number and storing in array
  const clickedCountInsta = clickedSegmentDescription.map((elem) => {
    if (elem.Answer === "Instagram") {
      let parsedCount = parseInt(elem.Count);
      return parsedCount;
    }
  });
  const resultsInsta = clickedCountInsta.filter((element) => {
    return element !== undefined;
  });

  //calculating fb, converting to number and storing in array
  const clickedCountFace = clickedSegmentDescription.map((elem) => {
    if (elem.Answer === "Facebook") {
      let parsedCount = parseInt(elem.Count);
      return parsedCount;
    }
  });
  const resultsFace = clickedCountFace.filter((element) => {
    return element !== undefined;
  });

  //calculating snap, converting to number and storing in array
  const clickedCountSnap = clickedSegmentDescription.map((elem) => {
    if (elem.Answer === "Snapchat") {
      let parsedCount = parseInt(elem.Count);
      return parsedCount;
    }
  });
  const resultsSnap = clickedCountSnap.filter((element) => {
    return element !== undefined;
  });
  //calculating linked, converting to number and storing in array
  const clickedCountLinked = clickedSegmentDescription.map((elem) => {
    if (elem.Answer === "Linkedin") {
      let parsedCount = parseInt(elem.Count);
      return parsedCount;
    }
  });
  const resultsLinked = clickedCountLinked.filter((element) => {
    return element !== undefined;
  });

  //
  function sumArray(array) {
    let sum = 0;
    array.forEach((item) => {
      sum += item;
    });
    return sum;
  }

  const pieData = [
    ["Task", "Hours per Day"],
    ["Instagram", sumArray(resultsInsta)],
    ["LinkedIn", sumArray(resultsLinked)],
    ["Snapchat", sumArray(resultsSnap)],
    ["Facebook", sumArray(resultsFace)],
  ];

  const options = {
    title:
      "You open ur phone and have a notif badge on instagram, facebook, snapchat, and linkedin...which do you click first?",
  };
  return (
    <div>
      <Chart
        chartType="PieChart"
        data={pieData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default Show;

