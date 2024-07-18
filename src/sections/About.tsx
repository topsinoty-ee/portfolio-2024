/** @format */

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiDaisyui,
  SiNextdotjs,
  SiGraphql,
  SiStyledcomponents,
  SiAirtable,
  SiApollographql,
  SiGatsby,
  SiReplit,
} from 'react-icons/si';
import Skills from '../components/Skills';
import { Tooltip } from '../components/Misc';

const About: React.FC = () => {
  const skills = [
    // Highlighted Skills
    {
      front: {
        icon: {
          icon: [
            <FaReact key="react-icon" />,
            <SiTypescript key="typescript-icon" />,
          ],
        },
        text: 'React.TS',
      },
      children: <div className="p-4"></div>,
    },
    {
      front: {
        icon: {
          icon: [<FaPython key="python-icon" />],
        },
        text: 'Python',
      },
      children: 'Python',
    },
    {
      front: {
        icon: {
          icon: [<SiTailwindcss key="tailwind-icon" />],
        },
        text: 'Tailwind CSS',
      },
      children: 'Tailwind CSS',
    },
    {
      front: {
        icon: {
          icon: [<SiDaisyui key="daisyui-icon" />],
        },
        text: 'DaisyUI',
      },
      children: 'DaisyUI',
    },
    {
      front: {
        icon: {
          icon: [<FaGitAlt key="git-icon" />, <FaGithub key="github-icon" />],
        },
        text: 'Git',
      },
      children: 'Git',
    },

    // Frontend Skills
    {
      front: {
        icon: {
          icon: [
            <FaReact key="react-icon" />,
            <SiJavascript key="javascript-icon" />,
          ],
        },
        text: 'React.JS',
      },
      children: 'hello',
    },
    {
      front: {
        icon: {
          icon: [<SiNextdotjs key="nextjs-icon" />],
        },
        text: 'Next.js',
      },
      children: 'Next.js',
    },
    {
      front: {
        icon: {
          icon: [<FaHtml5 key="html5-icon" />],
        },
        text: 'HTML5',
      },
      children: 'HTML5',
    },
    {
      front: {
        icon: {
          icon: [<FaCss3Alt key="css3-icon" />],
        },
        text: 'CSS3',
      },
      children: 'CSS3',
    },

    // Tools and Miscellaneous
    {
      front: {
        icon: {
          icon: [<SiAirtable key="airtable-icon" />],
        },
        text: 'Airtable',
      },
      children: 'Airtable',
    },

    // Fullstack/Additional Libraries and Frameworks
    {
      front: {
        icon: {
          icon: [<FaNodeJs key="nodejs-icon" />],
        },
        text: 'Node.JS',
      },
      children: 'Node.JS',
    },
    {
      front: {
        icon: {
          icon: [<SiFlask key="flask-icon" />],
        },
        text: 'Flask',
      },
      children: 'Flask',
    },
    {
      front: {
        icon: {
          icon: [<SiGraphql key="graphql-icon" />],
        },
        text: 'GraphQL',
      },
      children: 'GraphQL',
    },
    {
      front: {
        icon: {
          icon: [
            <SiGatsby key="gatsby-icon" />,
            <SiGraphql key="graphql-icon" />,
          ],
        },
        text: 'Gatsby + GraphQL',
      },
      children: 'Gatsby + GraphQL',
    },
    {
      front: {
        icon: {
          icon: <SiApollographql />,
        },
        text: 'Apollo GraphQL',
      },
      children: 'Apollo GraphQL',
    },

    {
      front: {
        icon: {
          icon: [<FaNpm key="npm-icon" />],
        },
        text: 'npm',
      },
      children: 'npm',
    },
    {
      front: {
        icon: {
          icon: [<SiStyledcomponents key="styledcomponents-icon" />],
        },
        text: 'Styled Components',
      },
      children: 'Styled Components',
    },
    {
      front: {
        icon: {
          icon: [<FaJava key="java-icon" />],
        },
        text: 'Java',
      },
      children: 'Java',
    },
    {
      front: {
        icon: {
          icon: [<SiReplit key="replit-icon" />],
        },
        text: 'Replit',
      },
      children: 'Replit',
    },
    {
      front: {
        icon: {
          icon: <FaBootstrap />,
        },
        text: 'Bootstrap',
      },
      children: 'Bootstrap',
    },
  ];

  return (
    <section
      tabIndex={0}
      id="#about"
      className="w-full flex justify-between h-[90vh] carousel-item snap-start snap-always container">
      <div className="py-4 px-6 bg-base-300 w-3/5 flex flex-col gap-5 overflow-auto">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <div className="py-4">
          <p className="text-lg w-4/5 leading-9 flex flex-col gap-6">
            <span>
              I'm a passionate frontend developer crafting visually stunning and
              interactive websites✨. With a strong foundation in{' '}
              <Tooltip href="https://javascript.com">JavaScript</Tooltip>,{' '}
              <Tooltip href="https://html.spec.whatwg.org/multipage/">
                HTML
              </Tooltip>
              , and{' '}
              <Tooltip href="https://www.w3.org/Style/CSS/Overview.en.html">
                CSS
              </Tooltip>
              , I build efficient and user-centric web experiences. I've honed
              my skills in frameworks like{' '}
              <Tooltip link="#react">React</Tooltip>,{' '}
              <Tooltip link="#flask">Flask (python)</Tooltip>, and{' '}
              <Tooltip href="https://tailwindcss.com">Tailwind CSS</Tooltip> to
              bring dynamic designs to life.
            </span>
            <span>
              My journey into development started with self-learning on{' '}
              <Tooltip href="https://freecodecamp.org">FreeCodeCamp</Tooltip>{' '}
              and has been enriched through collaborative projects in school
              organized by{' '}
              <Tooltip href="https://codesters.club">Codesters.Club</Tooltip>{' '}
              and an internship at{' '}
              <Tooltip href="https://doyenify.com">Doyenify Academy</Tooltip>.
            </span>
            <span>
              I thrive in collaborative environments, as demonstrated by my
              experience with <Tooltip link="#typeScript">TypeScript</Tooltip>,
              where I participated in daily stand-ups, utilizing tools like{' '}
              <Tooltip href="https://trello.com">Trello</Tooltip> and{' '}
              <Tooltip href="https://jira.com">Jira</Tooltip>. Currently, I'm
              excited to be building a personal project using{' '}
              <Tooltip href="#react">React</Tooltip>,{' '}
              <Tooltip link="#typeScript">TypeScript</Tooltip>, and{' '}
              <Tooltip link="#gatsby">Gatsby</Tooltip> to enhance my skills
              while also developing a blog platform. I'm always eager to learn
              and explore new technologies. Let's create something amazing
              together!
            </span>
            {/* **Skills:**
            (Insert `skills` list here, removing duplicates) */}
            <span></span>
          </p>
        </div>
      </div>
      <div className="py-4 px-6 bg-base-100 w-2/5 flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">Skills</h1>
        <div className="py-4 grid grid-cols-2 gap-4 overflow-auto modal-scroll soft-scroll">
          <Skills skills={skills} />
        </div>
      </div>
    </section>
  );
};

export default About;
