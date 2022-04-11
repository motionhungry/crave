import { TouchableOpacity, Text } from '@rn-design-system/core';
import { useTheme } from '@rn-design-system/hooks';
import { ButtonVariants } from '@rn-design-system/themes';
import { MarginProps } from 'styled-system';

type ButtonProps = {
  label: string;
  variant?: ButtonVariants;
  onPress: () => void;
} & MarginProps;

export const Button = ({
  label,
  variant = 'primary',
  onPress,
  ...props
}: ButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      backgroundColor={theme.components.Button[variant].backgroundColor[100]}
      onPress={onPress}
      padding={2}
      {...props}
    >
      <Text color="white" textAlign="center">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
