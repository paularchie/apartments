import { SlideState } from './SlideState.type';
import { SlideShowTypes } from '../enums/SlideShowTypes.enum';

export type AnimationState = {
    slideShowType: SlideShowTypes,
    currentSlideIndex: number,
    slideShowItems: SlideState[]
}