
import React, { useState } from 'react';

const Contact = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='d-flex justify-content-center mb-5'>
                <div className="email-form mb-5">
                    <h4 className='mb-5 mt-5 text-center'>Compose Email</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <label htmlFor="to">To:</label>
                            <input
                                type="email"
                                id="to"
                                value="ma.nikki.zapuiz@gmail.com"
                                onChange={(e) => setTo(e.target.value)}
                                required
                                style={{ marginLeft: "57px" }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                style={{ marginLeft: "21px" }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                style={{ marginLeft: "12px", width: "194px" }}
                            />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='text-center'>
                <p>For now email box is not working yet. <strong>PLEASE</strong> contact me below instead.</p>
                <p><strong>Contact#: +63994 704 4937</strong></p>
                <p><strong>Email: ma.nikki.zapuiz@gmail.com</strong></p>

            </div>
        </>
    );
};

export default Contact;
