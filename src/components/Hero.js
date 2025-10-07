// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTypingEffect } from '../hooks/useTypingEffect';

const Hero = () => {
    const roles = ['Computer Science Student', 'Software Developer', 'Problem Solver', 'Full Stack Enthusiast'];
    const typedText = useTypingEffect(roles, 100, 50, 2000);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                    Hi, I'm Vivek Bajpai
                </motion.h1>
                <motion.p className="subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                    {typedText}<span style={{opacity: 0.8}}>|</span>
                </motion.p>
                <motion.p className="description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                    Passionate Computer Science undergraduate with a strong foundation in software development...
                </motion.p>
                <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    <a href="/Vivek_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary">
                        <i className="fas fa-download"></i> Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;