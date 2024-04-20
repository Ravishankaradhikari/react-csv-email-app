import React, { useState } from 'react';
import Papa from 'papaparse';

const CSVReader = ({ onEmailsExtracted }) => {
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      const result = Papa.parse(text, { header: true });
      const emails = result.data.map((row) => row.email).filter(Boolean);
      onEmailsExtracted(emails);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default CSVReader;
