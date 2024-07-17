/** @format */

import React from 'react';
import FlipCard, { FlipCardConfig } from './FlipCard';

interface SkillsProps {
  skills: FlipCardConfig[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => (
        <FlipCard
          key={index}
          front={skill.front}>
          {skill.children}
        </FlipCard>
      ))}
    </>
  );
};

export default Skills;
