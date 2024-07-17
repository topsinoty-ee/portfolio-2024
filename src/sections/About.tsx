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
      className="w-full flex justify-between h-[90vh] carousel-item snap-start snap-always">
      <div className="py-4 px-6 bg-base-300 w-3/5 flex flex-col gap-5">
        <h1 className="text-4xl font-semibold">About Me</h1>
        <div className="py-4">
          <p className="text-lg w-3/5 leading-10 flex flex-col gap-6">
            <span>
              I'm a Frontend Web-developer specializing in visually appealing
              and interactive websites. With expertise in JavaScript, HTML, and
              CSS, I write efficient code for optimal performance.
            </span>
            <span>
              Lorem ipsum
              vns'fjlknv;kfjdkjsb;djfkbf;dkjb;kfdjnbdf;kjb;kjdfnbdfkjbfk
              dsavnd;vjkdvn;kjvndgjkbndjgngg
              dsaglknkgnlkngaslndlgknsdlknlgdkngldkngslkngldskngslkndlkgnlkgnalknga'lkdgns'
            </span>
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
