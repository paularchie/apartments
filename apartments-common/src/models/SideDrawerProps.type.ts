import { NavigationItemProps } from "./NavigationItemProps.type";

export type SideDrawerProps = {
    navigationItems: NavigationItemProps[],
    backdropClickHandler: () => void;
    showSideDrawer: boolean;
}