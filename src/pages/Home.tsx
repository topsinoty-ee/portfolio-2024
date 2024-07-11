/** @format */

import { withNavbar } from '../Layout/withNavbar';
import { Tooltip } from '../components/Misc';
import { FaDiscord } from 'react-icons/fa6';

const Home = () => {
  return (
    <main className="carousel carousel-vertical h-[90vh] w-full">
      <div className="w-full py-4 px-6">
        {/* Hero */}
        <div className="flex flex-col gap-4 w-3/5 md:w-full  sm:w-full">
          {/* Text */}
          <h1 className="text-8xl">Hey! I'm Oluwatobiloba Promise Temitope.</h1>
          <div className="w-full">
            {/* Add typewriter or carousel effect here and leave as gray text */}
            <p>
              Welcome to my personal website! I'm using{' '}
              <Tooltip href="https://www.react.dev">React</Tooltip> and{' '}
              <Tooltip href="https://www.daisyui.com">DaisyUI</Tooltip>
            </p>
            <p>
              Check out my <Tooltip link="#about">about</Tooltip> page for more
              information.
            </p>
          </div>
        </div>
        <div className="w-2/5 flex flex-col">
          {/* Socials */}
          <div>
            <Tooltip
              href="https://discord.com/users/topsinoty"
              description="Topsinoty">
              <FaDiscord />
            </Tooltip>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withNavbar(Home, 'Promise 😎');
