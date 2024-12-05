import React, { CSSProperties, FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  style?: CSSProperties; // Accepts inline styles
  className?: string;    // Optional: Allows additional CSS classes
  onClick?: () => void;
}

const Box: FC<BoxProps> = ({ children, style, className, onClick }) => {
  return (
    <div style={style} className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
