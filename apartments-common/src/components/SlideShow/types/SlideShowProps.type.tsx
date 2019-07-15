import { SlideShowTypes } from "../enums/SlideShowTypes.enum";
import { TransitionTypes } from "../enums/TransitionTypes.enum";

export type SlideShowProps = {
    slides: any[],
    slideShowType?: SlideShowTypes,
    transitionType?: TransitionTypes,
    transitionTime?: number,
    slideStayTime?: number,
    startWithFadeIn?: boolean,
    initialFadeInTime?: number
}