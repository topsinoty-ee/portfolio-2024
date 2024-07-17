import { Tooltip } from '../components/Misc';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Social from '../components/Social';

const Hero =()=>{
    return (
      <section
        id="#hero"
        tabIndex={0}
        className="container w-full box-border p-6 flex flex-col justify-between h-[90vh] max-h-[90vh] carousel-item snap-start snap-always min-h-[550px]">
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
        <div className="w-3/5 flex">
          {/* Socials */}
          <div className="flex gap-4">
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
          </div>
        </div>
      </section>
    );
}
export default Hero