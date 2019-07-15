import { NavigationItemProps } from "./NavigationItemProps.type";

export type HeaderProps = {
    navigationItems: NavigationItemProps[],
    menuIconClickHandler: () => void;
}