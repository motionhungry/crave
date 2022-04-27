import React from 'react';

import { Box, Text } from '@motionhungry-ui/components';
import { useTheme } from '@motionhungry-ui/hooks';

const MapScreen = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box backgroundColor={theme.backgroundColor} flexGrow={1}>
      <Text textAlign="center">Map</Text>
    </Box>
  );
};

export { MapScreen };
