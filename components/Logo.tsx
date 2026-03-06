import React from 'react';

interface LogoProps {
    className?: string;
    color?: string;
    accentColor?: string;
}

export default function Logo({
    className = "w-full h-full",
    color = "#D1D5DB", // Silver/Light Grey
    accentColor = "#B8860B" // Bronze/Copper Gold
}: LogoProps) {
    return (
        <svg
            viewBox="0 0 600 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="20%" stopColor={accentColor} />
                    <stop offset="50%" stopColor="#FFE17A" /> {/* Bright gold center */}
                    <stop offset="80%" stopColor={accentColor} />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>

            {/* Top Text: HAIRLINE */}
            <text
                x="300"
                y="55"
                textAnchor="middle"
                fill={color}
                style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 100,
                    fontSize: '44px',
                    letterSpacing: '0.5em'
                }}
            >
                HAIRLINE
            </text>

            {/* Decorative Separator Line */}
            <g>
                {/* Long tapered line */}
                <path
                    d="M 60 85 L 300 83.5 L 540 85 L 300 86.5 Z"
                    fill="url(#logoGradient)"
                />
                {/* Downward Triangle Node */}
                <path
                    d="M 285 85 H 315 L 300 102 Z"
                    fill="#FFE17A"
                />
            </g>

            {/* Bottom Text: BEAUTY LOUNGE */}
            <text
                x="300"
                y="140"
                textAnchor="middle"
                fill={color}
                style={{
                    fontFamily: "'Waiting for the Sunrise', cursive",
                    fontWeight: 400,
                    fontSize: '36px',
                    letterSpacing: '0.65em'
                }}
            >
                BEAUTY LOUNGE
            </text>
        </svg>
    );
}
