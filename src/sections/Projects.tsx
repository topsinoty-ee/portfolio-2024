/** @format */

import { Tooltip } from '../components/Misc';
import Project from '../components/Project';
import Veric from '../assets/images/Softr-Veric.png';
import DoyenHR from '../assets/images/DoyenHr-Hero.png';

const Projects = () => {
  return (
    <section
      tabIndex={0}
      id="projects"
      className="w-full flex justify-between h-[90vh] carousel-item snap-start snap-always min-h-[500px] overflow-auto">
      <div className="py-4 px-6 flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">My projects</h1>
          <p className="font-light italic">
            See my projects on{' '}
            <Tooltip href="https://github.com/topsinoty-ee?tab=repositories">
              github
            </Tooltip>{' '}
            or <Tooltip href="https://replit.com/@topsinoty">replit</Tooltip>
          </p>
        </div>

        <div className="carousel w-full h-full gap-4">
          <Project
            src={Veric}
            title="Veric"
            description="Veric is a This was a collaborative project assigned from codesters.club with a company interface and a user interface. This is the user interface. It was made with Python (flask) and Tailwindcss + DaisyUI."
            tags={[
              'Python',
              'Flask',
              'TailwindCSS',
              'DasiyUI',
              'Airtable',
              'Softr',
              'Jinja2',
            ]}
            link="https://veric-cto.replit.app"
            repo="https://github.com/topsinoty-ee/CTO"
          />
          <Project
            src={DoyenHR}
            title="DoyenHR"
            description="An HR software application like Slack or Monday.com. Made with TypeScript + Tailwindcss + React"
            tags={[
              'TypeScript',
              'React',
              'TailwindCSS',
              'BeaverDB',
              'styled-components',
            ]}
            link="https://hr.doyenify.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
