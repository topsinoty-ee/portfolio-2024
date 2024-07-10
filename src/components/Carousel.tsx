/** @format */

import { ReactNode } from 'react';
import Card, { CardProps } from './Card';

type ImageType = {
  className?: string;
  image?: { src: string; alt?: string; className?: string };
};

type CarouselProps<Type> = Type extends 'image'
  ? { type: 'image'; cards: ImageType[] }
  : Type extends 'card'
  ? { type: 'card'; cards: CardProps[] }
  : Type extends 'ReactNode'
  ? { type: 'ReactNode'; cards: ReactNode[] }
  : never;

const Carousel: React.FC<CarouselProps<'image' | 'card' | 'ReactNode'>> = ({
  type,
  cards,
}) => {
  if (type === 'image') {
    return (
      <div className="carousel w-full gap-2">
        {cards.map((card, index) => (
          <div
            id={`${index}`}
            key={index}
            className={`carousel-item w-full ${card.className}`}>
            <img
              src={card?.image?.src}
              alt={card?.image?.alt}
              className={`w-full ${card?.image?.className}`}
            />
          </div>
        ))}
      </div>
    );
  } else if (type === 'card') {
    return (
      <div className="carousel w-2/3 mx-auto gap-2">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
          />
        ))}
      </div>
    );
  } else if (type === 'ReactNode') {
    return (
      <div className="carousel carousel-vertical w-full">
        {cards.map((section, index) => (
          <section
            className="carousel-item w-full min-h-screen"
            key={index}>
            {section}
          </section>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Carousel;
