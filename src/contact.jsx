import React from 'react';
import Navbar from './navbar';

const ContactForm = () => {
    return (
        <div>
            <Navbar />
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" placeholder="First Name" style={{ width: '300px', marginBottom: '20px' }} />
                <input type="text" placeholder="Last Name" style={{ width: '300px', marginBottom: '20px' }} />
                <input type="text" placeholder="Phone Number" style={{ width: '300px', marginBottom: '20px' }} />
                <input type="text" placeholder="Email Address" style={{ width: '300px', marginBottom: '20px' }} />
                <input type="text" placeholder="Message" style={{ width: '300px', marginBottom: '20px' }} />
                <button style={{ width: '200px', padding: '10px', backgroundColor: 'lightblue', border: 'none', borderRadius: '5px' }}>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;