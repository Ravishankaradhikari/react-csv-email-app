import React, { useState } from 'react';
import CSVReader from './components/CSVReader';
import EmailForm from './components/EmailForm';
import EmailSender from './components/EmailSender';
import './App.css';

function App() {
  const [emails, setEmails] = useState([]);

  const handleEmailsExtracted = (extractedEmails) => {
    setEmails(extractedEmails);
  };

  const handleFormSubmit = (message) => {
    // In a real app, you would send this message to the backend
    console.log('Form message:', message);
    console.log('Emails to send:', emails);
  };

  return (
    <div className='design'>
      <h1 className='ml'>CSV Email App</h1>
      <CSVReader onEmailsExtracted={handleEmailsExtracted} />
      {emails.length > 0 && (
        <div>
          <h2 className='ml'>Email Addresses Extracted:</h2>
          <ul className='ml'>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
          <EmailForm onSubmit={handleFormSubmit} />
          <EmailSender emails={emails} />
        </div>
      )}
    </div>
  );
}

export default App;
