import React from 'react';

interface SvgTextLogoProps {
  text: string;
  fontSize?: number;
  fontWeight?: string | number;
  className?: string;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  fontSize = 32,
  fontWeight = 'bold',
  className = '',
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize * 1.5}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
