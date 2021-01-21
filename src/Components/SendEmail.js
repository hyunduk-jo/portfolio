import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import dotenv from 'dotenv';
dotenv.config();

const Container = styled.div`
  width: 80%;
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input, textarea{
      margin: 10px 0px;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
    input{
      height: 30px;
      width: 60%;
      &:last-child{
        border: none;
        background-color: black;
        color: white;
        font-weight: 600;
      }
    }
    textarea{
      width: 60%;
      height: 100px;
      resize: none;
    }
    @media screen and (max-width: 480px){
      input, textarea{
        width: 90%;
      }
    }
  }
`;

const SendEmailCom = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("Success");
  }

  return <Container>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <input placeholder="Name" type="text" name="name" />
      <input placeholder="Phone" type="text" name="phone" />
      <input placeholder="Email" type="email" name="email" required />
      <textarea placeholder="Write message" name="message" required />
      <input type="submit" value="Send Email" />
    </form>
  </Container>
}

export default SendEmailCom;