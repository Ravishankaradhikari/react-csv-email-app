import React from 'react';

const EmailSender = ({ emails, message }) => {
  const sendEmails = async () => {
    // This is where you'd actually send emails using an API or backend
    emails.forEach((email) => {
      console.log(`Sending email to ${email}:`);
      console.log(message);
    });
  };

  return (
    <div>
      <button onClick={sendEmails}>Send Emails</button>
    </div>
  );
};

export default EmailSender;
