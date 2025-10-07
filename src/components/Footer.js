// src/components/Footer.js
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();
    const [status, setStatus] = useState('Send Message');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            'service_12bbuv9',      
            'template_ja2yrik',     
            form.current,
            'hsdoCol0lCAMrVF_-'       
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setStatus('Message Sent!');
            form.current.reset(); 
            setTimeout(() => setStatus('Send Message'), 3000); 
        }, (error) => {
            console.log('FAILED...', error.text);
            setStatus('Failed to Send');
            setTimeout(() => setStatus('Send Message'), 3000);
        });
    };

    return (
        <motion.footer 
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="contact-content">
                <h2>Let's Connect</h2>
                <p>I'm always open to discussing new opportunities. Feel free to send me a message!</p>
                
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-group">
                        <input type="text" name="from_name" placeholder="Your Name" required />
                        <input type="email" name="from_email" placeholder="Your Email" required />
                    </div>
                    <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary form-btn">{status}</button>
                </form>

                <div className="social-links">
                    <a href="https://in.linkedin.com/in/vivek-bajpai-68047a295" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/vivekbajpai82" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link"><i className="fab fa-github"></i></a>
                    <a href="https://leetcode.com/u/vb_2201640100328/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="social-link"><i className="fas fa-code"></i></a>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} Vivek Bajpai. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;