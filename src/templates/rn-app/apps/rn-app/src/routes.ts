import { TabIndex } from '@motionhungry-ui/components';

export enum Route {
  Home = 'Home',
  Search = 'Search',
  Map = 'Map',
  Listen = 'Listen',
  Settings = 'Settings',
}

export const TabIndexRouteMap: Record<TabIndex, Route> = {
  0: Route.Home,
  1: Route.Search,
  2: Route.Map,
  3: Route.Listen,
  4: Route.Settings,
};
