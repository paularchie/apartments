import { NavigationItemProps } from './NavigationItemProps.type';

export type LayoutProps = {
    navigationItems: NavigationItemProps[],
    menuIconClickHandler: () => void;
    backdropClickHandler: () => void;
    showSideDrawer: boolean;
    children?: any; 
};