
import { useReducer, useEffect } from "react";

import { SlideState } from "../types/SlideState.type";
import { SlideShowActionTypes } from "../enums/SlideShowActionTypes.enum";
import { SlideShowProps } from "../types/SlideShowProps.type";
import { SlideShowTypes } from "../enums/SlideShowTypes.enum";
import slideShowReducer from "./SlideShowReducer";
import { AnimationState } from "../types/AnimationState.type";


const useSlideShowStateHandler = ({ slides, startWithFadeIn, slideShowType }: SlideShowProps) => {
    const [animationState, dispatch] = useReducer(slideShowReducer, {});

    useEffect(() => {
        dispatch({ type: SlideShowActionTypes.InitialiseState, initialState: getInitialAnimationState() })
    }, [])

    const getInitialAnimationState = (reset?: boolean): AnimationState => {
        return {
            currentSlideIndex: 0,
            slideShowItems: getInitialSlideState(reset),
            slideShowType
        }
    }

    const getInitialSlideState = (reset?: boolean): SlideState[] => {
        return slides.map((image, index) => {
            return {
                file: image,
                display: true,
                position: index === 0 ? 0 : 100,
                opacity: reset ? 0 : getInitialSlideOpacity(index)
            }
        });
    }

    const getInitialSlideOpacity = (index: number): number => {
        if (index === 0) {
            return startWithFadeIn ? 0 : 1;
        } else {
            return slideShowType === SlideShowTypes.FadeInOut ? 0 : 1;
        }
    }

    return {
        animationState,
        updateSlideIndex: () => dispatch({ type: SlideShowActionTypes.UpdateSlideIndex }),
        hideSlide: () => dispatch({ type: SlideShowActionTypes.HideSlide }),
        setInitialFadeIn: () => dispatch({ type: SlideShowActionTypes.SetInitialFadeIn }),
        stopSlideShow: () => dispatch({ type: SlideShowActionTypes.StopSlideShow }),
        initialiseState: () => dispatch({ type: SlideShowActionTypes.InitialiseState, initialState: getInitialAnimationState() }),
        resetSlidesPosition: () => dispatch({ type: SlideShowActionTypes.ResetSlidesPosition, initialState: getInitialAnimationState(true) })
    };
}




export default useSlideShowStateHandler;

