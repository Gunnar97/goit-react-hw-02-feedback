import React from 'react';
import { CheckTitle } from './SectionStyled';

const Section = ({ title, children }) => {
  return (
    <>
      <CheckTitle>{title}</CheckTitle>
      <>{children}</>
    </>
  );
};

export default Section;
