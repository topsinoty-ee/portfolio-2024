/** @format */

const About: React.FC = () => {
  return (
    <section
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
        <div className="py-4 grid grid-cols-2 gap-4 overflow-auto">
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
          <div className="h-40 bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
