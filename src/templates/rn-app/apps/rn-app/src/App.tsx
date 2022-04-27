import {
  Box,
  SafeAreaView,
  TabBar,
  TabBarIconNames,
  TabIndex,
} from '@motionhungry-ui/components';
import { Theme, defaultTheme } from '@motionhungry-ui/themes';
import {
  NavigationContainer,
  ParamListBase,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  HomeScreen,
  SearchScreen,
  MapScreen,
  ListenScreen,
  SettingsScreen,
} from '@rn-app/screens';
import { Route, TabIndexRouteMap } from './routes';
import { Settings } from 'react-native';

const ICON_NAMES: TabBarIconNames = [
  'home',
  'search',
  'navigate',
  'headset',
  'settings-outline',
];

interface MainStackParamList extends ParamListBase {
  [Route.Home]: undefined;
  [Route.Search]: undefined;
  [Route.Map]: undefined;
  [Route.Listen]: undefined;
  [Route.Settings]: undefined;
}

const MainStack = createNativeStackNavigator<MainStackParamList>();

type AppProps = {
  theme: Theme;
};

const App = ({ theme }: AppProps): JSX.Element => {
  const navigationRef = useNavigationContainerRef<MainStackParamList>();
  const [activeTabIndex, setActiveTabIndex] = useState<TabIndex>(0);

  const handleTabPress = (index: TabIndex) => {
    const route = TabIndexRouteMap[index];
    navigationRef.navigate(route);
    setActiveTabIndex(index);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="auto" />
      <Box flex={1} backgroundColor={theme.backgroundColor}>
        <SafeAreaView backgroundColor={theme.backgroundColor} />
        <MainStack.Navigator
          screenOptions={{ animation: 'none', headerShown: false }}
        >
          <MainStack.Screen name={Route.Home} component={HomeScreen} />
          <MainStack.Screen name={Route.Search} component={SearchScreen} />
          <MainStack.Screen name={Route.Map} component={MapScreen} />
          <MainStack.Screen name={Route.Listen} component={ListenScreen} />
          <MainStack.Screen name={Route.Settings} component={SettingsScreen} />
        </MainStack.Navigator>
        <TabBar
          variant="default"
          activeIndex={activeTabIndex}
          icons={ICON_NAMES}
          onTabPress={handleTabPress}
        />
        <SafeAreaView
          backgroundColor={theme.components.TabBar.backgroundColor}
        />
      </Box>
    </NavigationContainer>
  );
};

const AppRoot = () => {
  const theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <App theme={defaultTheme} />
    </ThemeProvider>
  );
};

export default AppRoot;
