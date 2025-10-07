// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section 
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <h2>
                <span className="objective-icon">🎯</span> Career Objective
            </h2>
            <motion.div 
                className="about-content"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p className="objective-text">
                    Seeking opportunities to leverage my expertise in <span className="highlight">full-stack development</span>, 
                    contribute to <span className="highlight">innovative projects</span>, and grow as a 
                    <span className="highlight"> software engineer</span>. 
                    Passionate about building <span className="highlight">scalable applications</span> and 
                    learning <span className="highlight">cutting-edge technologies</span>.
                </p>
                
                <div className="objective-stats">
                    <div className="stat-item">
                        <span className="stat-icon">💻</span>
                        <span className="stat-text">Full-Stack Developer</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-icon">🚀</span>
                        <span className="stat-text">Innovation Focused</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-icon">📚</span>
                        <span className="stat-text">Continuous Learner</span>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;