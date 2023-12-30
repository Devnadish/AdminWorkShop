"use client"
import React, { useEffect } from "react";

import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

function TransactionPDF({ transactionData }) {
  const generatePDF = () => {
    const elementToPrint = document.getElementById("transaction-content"); // Assuming your transaction content is within this element

    html2pdf(elementToPrint, {
      filename: "transaction.pdf",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only generate PDF on the client-side
      generatePDF();
    }
  }, []);
  return (
    <>
      <div id="transaction-content" className="flex items-center justify-center">
        <p className="text-xl tet-red-500">khalid</p>
        <p className="text-xl tet-red-500">khalid</p>
        <p className="text-xl tet-red-500">khalid</p>
        {/* Render your transaction data here */}
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </>
  );
}

export default TransactionPDF;
