import React from 'react';

import { Box, Text } from '@motionhungry-ui/components';
import { useTheme } from '@motionhungry-ui/hooks';

const HomeScreen = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box backgroundColor={theme.backgroundColor} flexGrow={1}>
      <Text textAlign="center">Home</Text>
    </Box>
  );
};

export { HomeScreen };
