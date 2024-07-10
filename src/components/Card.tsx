/** @format */

import { Button } from './Button';

export interface CardProps {
  image?: {
    src: string;
    alt?: string;
  };
  title: string;
  badges?: {
    type?: 'outline' | 'secondary';
    name: string;
  }[];
  description: string;
  action?: string;
  isCarouselItem?: boolean;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  badges = [], // Providing default value
  description,
  action,
  isCarouselItem = false,
}) => {
  // Remove duplicates from badges array
  const uniqueBadges = Array.from(
    new Set(badges.map((badge) => badge.name))
  ).map((name) => {
    return badges.find((badge) => badge.name === name);
  });

  // Filtering badges without mutating prop directly
  const filteredBadges = uniqueBadges
    .filter((badge) => badge?.type === 'secondary')
    .concat(
      uniqueBadges.filter((badge) => badge && badge?.type !== 'secondary')
    )
    .slice(0, 3);

  return (
    <div
      className={`card w-96 bg-base-200 shadow-xl ${
        isCarouselItem ? 'carousel-item' : null
      }`}>
      {image && (
        <figure>
          <img
            src={image.src}
            alt={image?.alt}
          />
        </figure>
      )}

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="flex-wrap flex gap-2">
            {filteredBadges.map((badge, index) => (
              <div
                className={`badge badge-${badge?.type || 'outline'}`}
                key={index}>
                {badge?.name}
              </div>
            ))}
          </div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {action && (
            <Button className="btn btn-primary capitalize">{action}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
