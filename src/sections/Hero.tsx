/** @format */

import { Tooltip } from '../components/Misc';
import { FaDiscord, FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa6';
import Social from '../components/Social';

const Hero = () => {
  return (
    <section
      id="hero"
      tabIndex={0}
      className="w-full box-border md:pb-10 p-6 flex flex-col justify-between h-[90vh] max-h-[90vh] carousel-item snap-start snap-always min-h-[660px] overflow-auto sm:max-h-[90vh] md:max-h-[90vh] gap-6">
      {/* Hero */}
      <div className="flex flex-col gap-4 md:gap-6 w-3/5 md:w-full sm:w-full">
        {/* Text */}
        <h1 className="text-8xl md:text-6xl sm:text-4xl">
          Hey! I'm Oluwatobiloba Promise Temitope.
        </h1>
        <div className="w-full flex flex-col md:gap-4 sm:gap-4 gap-2 text-3xl sm:text-base">
          {/* Add typewriter or carousel effect here and leave as gray text */}
          <p>
            Welcome to my personal website! I'm using{' '}
            <Tooltip href="https://www.react.dev">React</Tooltip> and{' '}
            <Tooltip href="https://www.daisyui.com">DaisyUI</Tooltip>
          </p>
          <p>
            Check <Tooltip link="#about">about</Tooltip> me for more
            information.
          </p>
        </div>
      </div>
      <div className="min-w-3/5 w-max md:w-full sm:w-full flex justify-center items-center">
        {/* Socials */}
        <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
          <Social
            logo={{
              icon: <FaDiscord />,
              href: 'https://discord.com/users/topsinoty',
            }}
            title="Discord"
            username="Topsinoty"
            colors={{ primary: '#7289da', secondary: '#424549' }}
          />
          <Social
            logo={{
              icon: <FaLinkedin />,
              href: 'https://linkedin.com/in/promise-temitope',
            }}
            title="LinkedIn"
            username="O. Promise Temitope"
            colors={{
              primary: '#0077b5',
              secondary: '#caccce',
              textColor: '#000',
            }}
            iconColor="#000"
          />
          <Social
            logo={{
              icon: <FaGithub />,
              href: 'https://github.com/topsinoty-ee',
            }}
            title="Github"
            username="topsinoty-ee"
            colors={{
              primary: '#fafbfc',
              secondary: '#2b3137',
            }}
          />
          <Social
            logo={{
              icon: <FaGlobe />,
              href: '/Promise_Temitope_Resume.pdf',
            }}
            title="Resume"
            username="Promise Temitope"
            colors={{
              primary: '#FFE495',
              secondary: '#44558F',
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
