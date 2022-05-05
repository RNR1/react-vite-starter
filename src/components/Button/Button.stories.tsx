import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Element from 'components/Button';

const Button = (
  props: Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'type' | 'className' | 'ref'
  >,
) => <Element {...props} />;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { disabled } = args;
  const [count, setCount] = React.useState(0);

  const onClick = () => setCount((prev) => prev + 1);
  return (
    <Button {...args} onClick={onClick}>
      {disabled ? "I'm on a break" : <>Clicked {count} times!</>}
    </Button>
  );
};

export const Standard = Template.bind({});

Standard.args = {
  disabled: false,
};
