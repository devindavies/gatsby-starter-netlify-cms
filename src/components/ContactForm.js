import React from 'react'
import styled from 'styled-components'

const FormLabel = styled.label`
  display: block;
  font-size: 1.375rem;
  margin: 10px 0;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
`

const FormContainer = styled.form`
  margin: 60px auto;
  width: 50%;
`
const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 300px;
`
const FormButton = styled.button`
  display: block;
  background: #1f8dbc;
  color: white;
  padding: 9px 20px;
  margin: 20px 0;
  font-size: 1.375rem;
  border-radius: 8px;
`

const ContactForm = () => (
  <div>
    <FormContainer method="POST" data-netlify="true" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <FormLabel htmlFor="name">Name</FormLabel>
      <FormInput type="text" name="name" />

      <FormLabel htmlFor="email">Email</FormLabel>
      <FormInput type="email" name="email" />

      <FormLabel htmlFor="message">Message</FormLabel>
      <FormTextArea name="message" rows="3" />

      <FormButton type="submit">SEND</FormButton>
    </FormContainer>
  </div>
)

export default ContactForm
