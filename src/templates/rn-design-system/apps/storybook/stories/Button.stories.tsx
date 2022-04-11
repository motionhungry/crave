import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import { Button } from '@rn-design-system/components';

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    label: 'Press Me',
  },
  argTypes: { onPress: { action: 'pressed' } },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Primary: ButtonStory = (args) => <Button {...args} />;
