import React, { useState } from 'react';

const EmailForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message here..."
      />
      <button type="submit" className='send-button'>Send Message</button>
    </form>
  );
};

export default EmailForm;
