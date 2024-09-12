import React from "react";
interface ContactFormEmailProps {
  name: string;
  email: string;
  messages: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  messages,
}) => {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        Form <strong>{name}</strong> at {email}
      </p>
      <h2>
        Message:
        <p>{messages}</p>
      </h2>
    </div>
  );
};

export default ContactFormEmail;
