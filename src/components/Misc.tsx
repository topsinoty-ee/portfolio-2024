/** @format */
import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

export interface TooltipConfig {
  description?: string;
  children: React.ReactNode | string;
  href?: string;
  link?: string;
}

export const Tooltip: React.FC<TooltipConfig> = ({
  description,
  children,
  href,
  link,
}) => {
  if (href) {
    return (
      <span
        className="tooltip inline-flex flex "
        data-tip={
          description || href?.length > 21
            ? href?.substring(0, 21) + '...'
            : href || 'Not set'
        }>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex align-center content-center self-center items-center gap-1/2">
          <strong className="font-semibold">{children}</strong>
          {href && <MdOpenInNew />}
        </a>
      </span>
    );
  } else if (link) {
    return (
      <span
        className="tooltip inline-flex flex"
        data-tip={description || link || 'not set'}>
        <a
          href={link}
          className="underline-dotted underline hover-link hover:underline">
          {children}
        </a>
      </span>
    );
    } else {
      return (
        <span className="tooltip inline-flex flex" data-tip={description || 'not set'}>
          <strong>{children}</strong>
        </span>
      );
  }
};
