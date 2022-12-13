import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const oneMovie = {
  title: "Some Title",
  director: "Some Director",
  year: 2022,
  category: "A Category",
  background: "",
}

export const Primary: ComponentStory<typeof Hero> = () => <Hero featuredMovie = {oneMovie} />;
