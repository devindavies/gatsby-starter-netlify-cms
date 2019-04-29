import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  padding: 20px 40px;
  width: 50%;
  z-index: 1000;
`

const FormLabel = styled.label`
  display: block;
  font-size: 1.375rem;
  margin: 10px 0;
`

const FormInput = styled.input`
  display: block;
  width: 100%;
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
const url =
  'https://newhopechristianchapel.us1.list-manage.com/subscribe/post?u=41fad793b5c11630c328fe9a2&amp;id=8edbf0959e'

const MailchimpSignUp = () => (
  <div>
    <FormContainer
      action="https://newhopechristianchapel.us1.list-manage.com/subscribe/post?u=41fad793b5c11630c328fe9a2&amp;id=8edbf0959e"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <FormLabel for="mce-EMAIL">
        Email Address <span class="asterisk">*</span>
      </FormLabel>
      <FormInput type="text" name="name" />

      <FormButton type="submit">SEND</FormButton>
    </FormContainer>
  </div>
)

export default MailchimpSignUp
