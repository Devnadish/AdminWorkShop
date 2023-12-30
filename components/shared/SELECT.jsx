import React, { useState } from "react";

const SELECT = ({ name, isFocused, setIsFocused, setting, icon }) => {
  const [type, setType] = useState(""); // Set the initial state for the type if needed
  const placeholder = "Select an option"; // Set the placeholder text

  return (
    <div
      className={`relative flex-1 border rounded-sm overflow-hidden ${
        isFocused ? "focus-within:border-green-500 bg-slate-300" : ""
      }`}
    >
      <select
        name={name}
        value={type} // Bind the value of the select element to state if needed
        onChange={(e) => setType(e.target.value)} // Handle the onChange event if needed
        className={`input-placeholder border-0 h-7 rounded-none text-sm bg-gray-100 pl-3 ${
          icon ? "pr-12" : "pr-2"
        } py-2 w-full text-black/80 font-medium focus:outline-none`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...setting}
      >
        {/* Add your <option> elements here */}
      </select>
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-[40px] pointer-events-none bg-gray-400">
          {icon}
        </div>
      )}
    </div>
  );
};

export default SELECT;
