// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
    { year: '2022 - 2026', degree: 'Bachelor of Technology', major: 'Computer Science and Engineering', institution: 'Pranveer Singh Institute Of Technology, Kanpur', percentage: '74.8%' },
    { year: '2020 - 2022', degree: 'Intermediate', major: 'CBSE Science', institution: 'Bakshi Memorial Public School, Lalganj', percentage: '75.6%' },
    { year: '2019 - 2020', degree: 'High School', major: 'CBSE', institution: 'Bakshi Memorial Public School, Lalganj', percentage: '76.4%' },
];

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } }
};

const Education = () => {
    return (
        <section id="education">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                Education
            </motion.h2>
            <motion.div 
                className="education-timeline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.3 }}
            >
                {educationData.map((edu, index) => (
                    <motion.div className="education-item" key={index}>
                        {/* Timeline Dot */}
                        <motion.div className="timeline-dot" variants={dotVariants}>
                            <div className="dot-inner"></div>
                        </motion.div>
                        
                        {/* Education Card */}
                        <motion.div className="education-card" variants={cardVariants}>
                            <div className="year">{edu.year}</div>
                            <div className="education-content">
                                <h3>{edu.degree}</h3>
                                <h4>{edu.major}</h4>
                                <p className="institution">{edu.institution}</p>
                                <p className="percentage">Percentage: {edu.percentage}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Education;