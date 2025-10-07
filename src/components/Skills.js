// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { icon: 'fas fa-code', category: 'Languages', tags: ['C++', 'Java', 'Python', 'SQL'] },
    { icon: 'fas fa-globe', category: 'Web Development', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js'] },
    { icon: 'fas fa-tools', category: 'Tools & Platforms', tags: ['VS Code', 'Git', 'GitHub', 'Jupyter Notebook', 'Postman'] },
    { icon: 'fas fa-book', category: 'Courses', tags: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'] },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
    return (
        <section id="skills">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                Technical Skills
            </motion.h2>
            <motion.div 
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {skillsData.map((skill, index) => (
                    <motion.div className="skill-category" key={index} variants={cardVariants}>
                        <h3><i className={skill.icon}></i> {skill.category}</h3>
                        <div className="skill-tags">
                            {skill.tags.map((tag, i) => <span className="skill-tag" key={i}>{tag}</span>)}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;