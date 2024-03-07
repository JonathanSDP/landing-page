import React, {useState} from 'react'
import {useForm} from "../Hooks/useForm.js"
import Loader from './Loader.js';
import "./Form.css";


const initialForm = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const validationForm = (form) => {
    let errors= {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexMessage = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "The 'Name' is required!"
    }else if(!regexName.test(form.name.trim())) {
        errors.name ="The 'Name' input only accept letters and blank spaces!"
    }

    if(!form.email.trim()){
        errors.email = "The 'Email' is required!"
    }else if(!regexEmail.test(form.email.trim())) {
        errors.email ="The 'Email' input is incorrect!"
    }
    
    if(!form.subject.trim()){
        errors.subject = "The 'Subject' is required!"
    }

    if(!form.message.trim()){
        errors.message = "The 'Message' is required!"
    }else if(!regexMessage.test(form.message.trim())) {
        errors.message ="The 'Message' input not be exceed the 255 characters lenght!"
    }

    return errors;
}

let styles = {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#dc3545",
    
};

const Form = () => {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
        } = useForm(initialForm,validationForm);

  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <fieldset className='field-form'>
            <div className='div-name'>
            <label htmlFor='name'>Name</label>
            <input type="text"
            id="name"
            name="name"
            placeholder='Type your name'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
            />
            {errors.name && <p style={styles}>{errors.name}</p>}
            </div>
            <div className='div-email'>
            <label htmlFor='email'>Email</label>
            <input type="email"
            id="email"
            name="email"
            placeholder='Type your email'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
            />
            {errors.email && <p style={styles}>{errors.email}</p>}
            </div>
            <div className='div-subject'>
            <label htmlFor='subject'>Subject</label>
            <input type="text"
            id="subject"
            name="subject"
            placeholder='Type your subject'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
            />
            {errors.subject && <p style={styles}>{errors.subject}</p>}
            </div>
            <div className='div-textarea'>
            <label htmlFor='message' className='message'>Message</label>
            <textarea name='message' 
            cols="30" rows="5"
            placeholder='Type your message...'
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
            required
            ></textarea>
            {errors.message && <p style={styles}>{errors.message}</p>}
            </div>
            <div className='div-submit'>
            <input type="Submit"
            value="Submit"/>
            </div>
            {loading && <Loader/>}
            <div className='message-resp-div'>
                {response && <p className='message-resp'>Your data was sent</p>}
            </div>
            </fieldset>
        </form>
    </div>
  )
}

export default Form