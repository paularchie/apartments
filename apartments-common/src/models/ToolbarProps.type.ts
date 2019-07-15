import { NavigationItemProps } from "./NavigationItemProps.type";

export type ToolbarProps = {
    navigationItems: NavigationItemProps[],
    menuIconClickHandler: () => void;
}