/** @format */

import React from 'react';
import { IconContext } from 'react-icons';
import { Icon } from './Social';

export interface FlipCardConfig {
  front: {
    icon: Icon;
    text: string;
    alt?: string;
  };
  children: React.ReactNode;
}

const FlipCard: React.FC<FlipCardConfig> = ({ front, children }) => {
  return (
    <div className="flip-card max-w-72 max-h-72 bg-base-200 cursor">
      <div
        className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-preserve-3d shadow-md shadow-base-100 hover:rotate-y-180 focus:rotate-y-180 focus-within:duration-1000 focus:duration-1000 focus-visible:duration-500 delay-500 cursor-pointer"
        tabIndex={0}>
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-base-200 flex items-center gap-4 flex-col flex justify-center border">
          <div className="flex gap-4">
            <IconContext.Provider
              value={{
                className: `sm:h-6 sm:w-6 md:h-10 md:w-10 aspect-square ${
                  front.icon.className || ''
                }`,
                style: { color: front.icon.color, ...front.icon.restColors },
                size: '84',
              }}>
              {front.icon.icon}
            </IconContext.Provider>
          </div>
          <h2
            className={`text-lg font-bold max-h-[28px] ${
              front.text.length > 8 ? 'sm:text-xs' : 'sm:text-base'
            } ${front.text.length > 10 ? 'md:text-xl' : 'md:text-2xl'}`}>
            {front.text}
          </h2>
        </div>
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-base-content flex flex-col items-center justify-center transform rotate-180 transform-gpu">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
