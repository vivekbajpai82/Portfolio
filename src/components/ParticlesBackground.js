// src/components/ParticlesBackground.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const options = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: "#667eea",
            },
            links: {
                enable: false,
            },
            move: {
                direction: "top",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 40,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        detectRetina: true,
    };

    return <Particles id="tsparticles" init={particlesInit} options={options} style={{ zIndex: -1 }} />;
};

export default ParticlesBackground;