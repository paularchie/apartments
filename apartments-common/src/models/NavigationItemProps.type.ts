export type NavigationItemProps = {
    route: string;
    text: string;
    isActive: (route: string) => boolean;
    navigationItemClickHandler: (route: string) => void;
    children?: any;
}