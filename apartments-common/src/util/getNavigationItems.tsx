import { NavigationItemProps } from "../models/NavigationItemProps.type";

export const getNavigationItemsProps =
    (navigationItemClickHandler: (route: string) => void,
        getNavigationItemActiveState: (route: string) => boolean): NavigationItemProps[] => {
        return [
            {
                text: 'HOME',
                route: '/home',
                isActive: getNavigationItemActiveState,
                navigationItemClickHandler
            },
            {
                text: 'GALLERY',
                route: '/galleries',
                isActive: getNavigationItemActiveState,
                navigationItemClickHandler
            },
            {
                text: 'BOOKING',
                route: '/contact',
                isActive: getNavigationItemActiveState,
                navigationItemClickHandler
            },
            {
                text: 'CONTACT',
                route: '/contact',
                isActive: getNavigationItemActiveState,
                navigationItemClickHandler
            }
        ];
    };