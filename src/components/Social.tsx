/** @format */

import { IconContext } from 'react-icons';
import { TooltipConfig, Tooltip } from './Misc';

type SocialLogoColor = {
  primary: string;
  secondary: string;
  [rest: string]: string;
};

export type Icon = {
  icon: React.ReactNode | React.ReactNode[];
  href?: string;
  className?: string;
  [rest: string]: any;
};

interface SocialConfig extends Omit<TooltipConfig, 'children'> {
  logo: Icon;
  title: string;
  font?: string;
  colors: SocialLogoColor;
  username: string;
  link?: string;
}

const Social: React.FC<SocialConfig> = (props) => {
  const { logo, title, username, colors } = props;
  const { primary, secondary, ...restColors } = colors;

  return (
    <div
      style={{ backgroundColor: secondary }}
      className="social rounded-sm flex px-4 py-3 gap-4 justify-start items-center max-w-52 border-2">
      <span>
        <IconContext.Provider
          value={{
            className: logo.className || '',
            style: { color: primary, ...restColors },
            size: '40',
          }}>
          {logo.icon}
        </IconContext.Provider>
      </span>
      <div>
        <a
          href={logo?.href}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer">
          <h2 style={{ color: primary }}>{title}</h2>
        </a>
        <Tooltip
          href={logo?.href}
          {...props}>
          {/* If text-color is provided then use it from rest colors */}
          <span style={{ color: restColors.textColor || '' }}>
            {username.length > 13
              ? `${username.substring(0, 10)}...`
              : username}
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default Social;
