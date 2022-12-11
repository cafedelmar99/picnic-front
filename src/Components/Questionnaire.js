import React, { useState } from "react";
import Show from "./Show";

function Questionnaire({ data }) {
  //state used for storing first checkbox
  const [checked, setChecked] = useState([]);

  //state for storing secondary checkboxes
  const [mark, setMark] = useState(data);

  //handling first line checkboxes
  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked([...checked, event.target.value]);
    } else {
      const index = checked.findIndex((check) => check === event.target.value);
      const copiedArr = [...checked];
      const newArr = copiedArr.splice(index, 1);
      setChecked(copiedArr);
    }
  };

  //handling second line checkboxes
  const handleSecChange = (event) => {
    if (event.target.checked) {
      setMark([...mark, event.target.value]);
    } else {
      const index = mark.findIndex((mar) => mar === event.target.value);
      const copiedArr = [...mark];
      const newArr = copiedArr.splice(index, 1);
      setMark(copiedArr);
    }
  };
  //Removing duplicates from first line of checkboxes
  const uniqueIds = [];
  const unique = data.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.SegmentType);
    if (!isDuplicate) {
      uniqueIds.push(element.SegmentType);
      return true;
    }
    return false;
  });

  //filtering through data to show secondary checkboxes
  //once gender,university or custom is checked
  const secondaryWeb = [];
  const filteredWeb = data.filter((element) => {
    if (element.SegmentType === "Web") {
      secondaryWeb.push(element);
      return true;
    }
    return false;
  });

  const secondaryMob = [];
  const filteredMob = data.filter((element) => {
    if (element.SegmentType === "Mobile") {
      secondaryMob.push(element);
      return true;
    }
    return false;
  });
  
  const secondaryFilterUni = [];
  const filteredUni = data.filter((element) => {
    if (element.SegmentType === "University") {
      secondaryFilterUni.push(element);
      return true;
    }
    return false;
  });

  const secondaryFilterGen = [];
  const filteredGen = data.filter((element) => {
    if (element.SegmentType === "Gender") {
      secondaryFilterGen.push(element);
      return true;
    }
    return false;
  });

  const secondaryFilterCus = [];
  const filteredCus = data.filter((element) => {
    if (element.SegmentType === "Custom") {
      secondaryFilterCus.push(element);
      return true;
    }
    return false;
  });

  //Removing duplicates from secondary checkboxes
  const uniqueWeb = [];
  const uniqueW = filteredWeb.filter((element) => {
    const isDuplicate = uniqueWeb.includes(element.SegmentDescription);
    if (!isDuplicate) {
      uniqueWeb.push(element.SegmentDescription);
      return true;
    }
    return false;
  });

  const uniqueMob = [];
  const uniqueM = filteredMob.filter((element) => {
    const isDuplicate = uniqueMob.includes(element.SegmentDescription);
    if (!isDuplicate) {
      uniqueMob.push(element.SegmentDescription);
      return true;
    }
    return false;
  });

  const uniqueUni = [];
  const uniqueU = filteredUni.filter((element) => {
    const isDuplicate = uniqueUni.includes(element.SegmentDescription);
    if (!isDuplicate) {
      uniqueUni.push(element.SegmentDescription);
      return true;
    }
    return false;
  });

  const uniqueGen = [];
  const uniqueG = filteredGen.filter((element) => {
    const isDuplicate = uniqueGen.includes(element.SegmentDescription);
    if (!isDuplicate) {
      uniqueGen.push(element.SegmentDescription);
      return true;
    }
    return false;
  });

  const uniqueCus = [];
  const uniqueC = filteredCus.filter((element) => {
    const isDuplicate = uniqueCus.includes(element.SegmentDescription);
    if (!isDuplicate) {
      uniqueCus.push(element.SegmentDescription);
      return true;
    }
    return false;
  });

  //code above returns->
  return (
    <div className="Questions">
      <div>
      <p className="disclaimer">To get accurate data, please uncheck Segment Description first, before unchecking Segment Type</p>
        {/* first round checkboxes */}
        <div className="FirstCheckboxes">
          <p className="Segments">SegmentType</p>
          {unique.map((element) => {
            return (
              <div key={element.SegmentType}>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  id={element.SegmentType}
                  name=""
                  value={element.SegmentType}
                />
                <label htmlFor={element.SegmentType}>
                  {element.SegmentType}
                </label>
              </div>
            );
          })}
        </div>
        <p className="Segments">SegmentDescription</p>
        {/* seconday checkbox for web */}
        <div>
          {uniqueW.map((element) => {
            return checked.includes("Web") ? (
              <div key={element.SegmentDescription}>
                <input
                  type="checkbox"
                  onChange={handleSecChange}
                  id={element.SegmentDescription}
                  name=""
                  value={element.SegmentDescription}
                />
                <label htmlFor={element.SegmentDescription}>
                  {element.SegmentDescription}
                </label>
              </div>
            ) : (
              ""
            );
          })}
        </div>
        {/* seconday checkbox for mobile */}
        {uniqueM.map((element) => {
          return checked.includes("Mobile") ? (
            <div key={element.SegmentDescription}>
              <input
                type="checkbox"
                onChange={handleSecChange}
                id={element.SegmentDescription}
                name=""
                value={element.SegmentDescription}
              />
              <label htmlFor={element.SegmentDescription}>
                {element.SegmentDescription}
              </label>
            </div>
          ) : (
            ""
          );
        })}

        {/* Secondary checkboxes Universities */}
        <div className="LongCheckbox">
          {uniqueU.map((element) => {
            return checked.includes("University") ? (
              <div key={element.SegmentDescription}>
                <input
                  type="checkbox"
                  onChange={handleSecChange}
                  id={element.SegmentDescription}
                  name=""
                  value={element.SegmentDescription}
                />
                <label htmlFor={element.SegmentDescription}>
                  {element.SegmentDescription}
                </label>
              </div>
            ) : (
              ""
            );
          })}
        </div>
        {/* Seconday checkboxes gender */}
        {uniqueG.map((element) => {
          return checked.includes("Gender") ? (
            <div key={element.SegmentDescription}>
              <input
                type="checkbox"
                onChange={handleSecChange}
                id={element.SegmentDescription}
                name=""
                value={element.SegmentDescription}
              />
              <label htmlFor={element.SegmentDescription}>
                {element.SegmentDescription}
              </label>
            </div>
          ) : (
            ""
          );
        })}
        <div className="LongCheckbox">
          {/* secondary checkboxes for custom */}
          {uniqueC.map((element) => {
            return checked.includes("Custom") ? (
              <div key={element.SegmentDescription}>
                <input
                  type="checkbox"
                  onChange={handleSecChange}
                  id={element.SegmentDescription}
                  name=""
                  value={element.SegmentDescription}
                />
                <label htmlFor={element.SegmentDescription}>
                  {element.SegmentDescription}
                </label>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <div className="Chart">
        <Show mark={mark} data={data} filteredUni={filteredUni} />
      </div>
    </div>
  );
}

export default Questionnaire;