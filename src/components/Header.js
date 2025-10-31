// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                background: isScrolled ? 'rgba(5, 5, 20, 0.95)' : 'rgba(15, 15, 35, 0.9)',
                boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
            }}
        >
            <nav>
                <a href="#home" className="logo">VIVEK BAJPAI</a>
                <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;