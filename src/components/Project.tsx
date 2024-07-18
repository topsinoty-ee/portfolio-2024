/** @format */
import { Tooltip } from '../components/Misc';

type ProjectProps = {
  src: string;
  title: string;
  description?: string;
  tags?: string[];
  link?: string;
  repo?: string;
};

const Project: React.FC<ProjectProps> = ({
  src,
  title,
  description,
  tags,
  link,
  repo,
}) => {
  return (
    <div className="relative container group h-full bg-base-200 w-2/3 md:w-[95%] sm:w-[90%] sm:min-w-full sm:max-w-[360px] carousel-item">
      <img
        className="w-full aspect-video object-cover"
        src={src}
        alt={title}
      />
      <div className="absolute top-0 right-0 max-w-full w-max flex gap-4 p-4 group-hover:opacity-100 opacity-0 delay-800 peer-hover:delay-[1.5s] duration-700 transition-all z-10 cursor-pointer">
        {link && (
          <span className="btn">
            <Tooltip href={link}>Visit</Tooltip>
          </span>
        )}
        {repo && (
          <span className="btn">
            <Tooltip href={repo}>
              <span>Go to repo</span>
            </Tooltip>
          </span>
        )}
      </div>
      <div className="absolute group-hover:bg-opacity-30 bottom-0 bg-base-300 bg-opacity-30 h-full w-full duration-700 transition-all peer"></div>
      <div className="absolute peer bottom-0 group-hover:bg-opacity-100 bg-base-300 bg-opacity-80 text-base-content w-full p-4  duration-700 transition-all cursor-pointer">
        <a href={`/projects/${title}`}>
          <h3 className="font-bold text-xl md:text-2xl underline hover:underline-none">
            <a href={`/projects/${title}`}>{title}</a>
          </h3>
          {description && <p className="text-lg md:text-xl sm:text-base">{description}</p>}
          {tags && (
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-sm text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </a>
      </div>
    </div>
  );
};

export default Project;
