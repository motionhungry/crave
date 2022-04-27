import React from 'react';

import { Box, Text } from '@motionhungry-ui/components';
import { useTheme } from '@motionhungry-ui/hooks';

const SettingsScreen = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box backgroundColor={theme.backgroundColor} flexGrow={1}>
      <Text textAlign="center">Settings</Text>
    </Box>
  );
};

export { SettingsScreen };
