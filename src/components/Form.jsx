import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Form() {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMessage: '',
        access_key: 'baf082a3-487e-4295-b292-8649a1465969'
    });

    const handleChange = event => {
        const prop = event.target.name;

        setFormData({
            ...formData,
            [prop]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        const data = JSON.stringify(formData);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: data
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <Container className='form-container'>
            <form onSubmit={handleSubmit} className="d-flex flex-column ms-4">
                <input value={formData.userName} onChange={handleChange} name="userName" type="text" placeholder="Enter your name" required />
                <input value={formData.userEmail} onChange={handleChange} name="userEmail" type="email" placeholder="Enter your email" />
                <div className='d-flex align-items-start justify-content-end my-1'>
                    <i className="fa-solid fa-circle-info fa-xs mt-2 me-1" />
                    <p className="mail-note">Please note that your email will be sent via a secure third-party service. If you do not wish to share your email, you may leave the input box empty.</p>
                </div>
                <textarea value={formData.userMessage} onChange={handleChange} name="userMessage" cols="30" rows="5" placeholder="Enter a message..." required></textarea>
                <div className='d-flex justify-content-end'>
                    <Button variant='light' className='submit-btn' type='submit'>Submit</Button>
                </div>
            </form>
        </Container>
    )
}

export default Form;