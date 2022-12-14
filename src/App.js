import React from "react";
import "./styles.css";

const App = () => {
  const options = [
    {
      label: "Lime",
      value: "lime"
    },
    {
      label: "Lavender",
      value: "lavender"
    },
    {
      label: "Crimson",
      value: "crimson"
    },
    {
      label: "Darkblue",
      value: "darkblue"
    },
    {
      label: "Teal",
      value: "teal"
    }
  ];

  const [value, setValue] = React.useState("lime");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h2>
        <center> Color Changer</center>
      </h2>
      <select
        value={value}
        onChange={handleChange}
        style={{ backgroundColor: value, width: 300 }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>

      <div
        style={{
          marginTop: 150,
          marginLeft: 200,
          width: 200,
          height: 200,
          backgroundColor: value
        }}
      />
    </div>
  );
};

export default App;
