import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #283618;
`;

const FormContainer = styled.div`
  background-color: rgba(30, 30, 30, 0.8);
  color: white;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  max-width: 80%;
  border-radius: 10px;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #ecf39e;
  font-family: 'Poppins', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: ${({ touched, invalid }) => (touched && invalid ? '1px solid red' : 'none')}; 
`;

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: ${({ touched, invalid }) => (touched && invalid ? '1px solid red' : 'none')}; 
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #a98467;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  cursor: pointer;
`;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailInvalid(!emailPattern.test(emailValue));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!name || !email || !message || emailInvalid) {
      return;
    }

    console.log('Form submitted:', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
    setNameTouched(false);
    setEmailTouched(false);
    setMessageTouched(false);
    setEmailInvalid(false);
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Contact Me</Heading>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            onBlur={() => setNameTouched(true)} 
          />
          {nameTouched && !name && <p>Name is required</p>} 
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)} 
            style={{ border: emailTouched && emailInvalid ? '1px solid red' : 'none' }}
          />
          {emailTouched && emailInvalid && <p>Invalid email address</p>}
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            onBlur={() => setMessageTouched(true)} 
          />
          {messageTouched && !message && <p>Message is required</p>} 
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
