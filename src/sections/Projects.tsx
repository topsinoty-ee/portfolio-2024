/** @format */

import { Tooltip } from '../components/Misc';

const Project = () => {
  return (
    <section
      id="#projects"
      className="w-full flex justify-between h-[90vh] carousel-item snap-start snap-always">
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

        <div className="carousel w-full bg-white h-full gap-4">
          <div className="h-full bg-base-200 w-1/2 carousel-item"></div>
          <div className="h-full bg-base-200 w-1/2 carousel-item"></div>
          <div className="h-full bg-base-200 w-1/2 carousel-item"></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
