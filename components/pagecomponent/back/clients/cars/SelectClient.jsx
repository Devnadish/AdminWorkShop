"use client"
import React, { useState } from "react";
import { Users } from "lucide-react";

function SelectClient({ clientData, ClientId, setClientId }) {


  const handleSelectChange = (e) => {
    setClientId(e.target.value);
  };

  return (
    <div className="flex items-center justify-center border self-start">
      <div className="w-[50px] flex items-center justify-center bg-green-600 h-8">
        <Users />
      </div>
      <select
        className="block w-full px-4 h-8 py-1 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-gray-900"
        value={ClientId}
        onChange={handleSelectChange}
      >
        <option value="">اختار العميل</option>
        {clientData.map((option, index) => (
          <option key={index} value={option.clientIDs}>
            {`${option.clientIDs} - ${option.name} `}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectClient;
