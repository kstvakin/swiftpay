import React, { CSSProperties, FC, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: any;
  onClick?: () => void;
}

const Box: FC<BoxProps> = ({ children, style, className, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div style={style}
      className={className}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
