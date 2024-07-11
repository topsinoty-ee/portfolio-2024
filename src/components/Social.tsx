/** @format */

import { IconContext } from 'react-icons';
import { TooltipConfig, Tooltip } from './Misc';

type Logo = {
  icon: React.ReactNode;
  href: string;
  className: string;
  [x: string]: any;
};

interface SocialConfig extends TooltipConfig {
  logo: Logo;
  title: string;
  font?: string;
  colors: string[];
  username: string;
}

const Social: React.FC<SocialConfig> = ({ logo, title, username, href }) => {
  return (
    <div>
      <span>
        <IconContext.Provider
          value={{ className: logo.className, ...logo.x }}>
            {logo.icon}
          </IconContext.Provider>
      </span>
      <div>
        <h2>{title}</h2>
        <Tooltip description={href}>{username}</Tooltip>
      </div>
    </div>
  );
};

export default Social;
