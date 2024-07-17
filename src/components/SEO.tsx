/** @format */

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
}

const skills = [
  'React.TS',
  'React.JS',
  'Next.js',
  'Node.JS',
  'Tailwind CSS',
  'Python',
  'Flask',
  'GraphQL',
  'HTML5',
  'CSS3',
  'npm',
  'Git',
  'DaisyUI',
  'Styled Components',
  'Java',
  'Gatsby',
  'Replit',
  'Airtable',
  'Apollo GraphQL',
  'Bootstrap',
];

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name = 'Oluwatobiloba Promise Temitope Topsinoty O.',
  type = 'website',
  url = 'https://topsinoty.vercel.app',
  image = 'https://topsinoty.vercel.app/static/media/logo512.41bfad14004363ef9131.png',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content="portfolio, React, developer, Oluwatobiloba, Promise, Temitope, Topsinoty, topsinoty-ee, topsinoty, Promise Temitope, front-end developer, Estonia, frontend, React.TS, React.JS, Next.js, Node.JS, Tailwind CSS, Python, Flask, GraphQL, HTML5, CSS3, npm, Git, DaisyUI, Styled Components, Java, Gatsby, Replit, Airtable, Apollo GraphQL, Bootstrap"
      />
      <meta
        property="og:type"
        content={type}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:creator"
        content={name}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: name,
          url: url,
          image: image,
          sameAs: [
            'https://www.linkedin.com/in/promise-temitope',
            'https://github.com/topsinoty-ee',
          ],
          jobTitle: 'Front-End Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Self-Employed',
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Estonia',
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Your University',
          },
          knowsAbout: skills,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
