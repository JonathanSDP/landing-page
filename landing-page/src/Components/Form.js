import React, {useState} from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        alert('El formulario se ha enviado correctamente');
    }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text"
            id="name"
            name="name"
            placeholder='Type your name'
            value={name} onChange={(e) => setName
            (e.target.value)}
            required/>
            <label htmlFor='email'>Email</label>
            <input type="email"
            id="email"
            name="email"
            placeholder='Type your email'
            value={email} onChange={(e) => setEmail
                (e.target.value)}
                required/>
            <label htmlFor='textarea'>Message</label>
            <textarea className='message'
            id="message"
            name="message"
            placeholder='Type your message'
            value={textarea} onChange={(e) => setTextarea
                (e.target.value)}
                required></textarea>
            <input type="Submit"
            value="Submit"/>
        </form>
    </div>
  )
}

export default Form