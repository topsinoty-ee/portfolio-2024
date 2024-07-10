/** @format */

import React from 'react';

export interface ButtonProps
  extends Omit<
    JSX.IntrinsicElements['button'],
    'type' | 'children' | 'onClick'
  > {
  children: string | React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  className,
  onClick,
  href,
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`btn btn-outline ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`btn btn-outline ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};
