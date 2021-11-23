import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Element from 'components/Logo';

const Logo = (
  props: Omit<
    React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    'ref' | 'alt' | 'src' | 'className'
  >,
) => <Element {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Standard = Template.bind({});
