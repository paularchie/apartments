import { SlideState } from "../types/SlideState.type";
import { AnimationState } from "../types/AnimationState.type";
import { SlideShowActionTypes } from "../enums/SlideShowActionTypes.enum";
import { SlideShowTypes } from "../enums/SlideShowTypes.enum";

const slideShowReducer = (state: AnimationState, { type, initialState }: any) => {
    const actionHandlers = {
        [SlideShowActionTypes.InitialiseState]: setState,
        [SlideShowActionTypes.ResetSlidesPosition]: setState,
        [SlideShowActionTypes.SetInitialFadeIn]: setInitialFadeIn,
        [SlideShowActionTypes.UpdateSlideIndex]: updateSlideIndex,
        [SlideShowActionTypes.HideSlide]: hideSlide,
        [SlideShowActionTypes.StopSlideShow]: stopSlideShow,
    }

    return actionHandlers[type] ? actionHandlers[type]() : state;

    function setState(): AnimationState {
        return { ...initialState }
    }

    function updateSlideIndex() {
        const newState = { ...state };
        if (newState.currentSlideIndex < state.slideShowItems.length - 1) {
            newState.currentSlideIndex++;
        } else {
            newState.currentSlideIndex = 0;
        };

        const slideShowItems = state.slideShowType === SlideShowTypes.SlideLeft
            ? updateSlidePosition(newState.currentSlideIndex)
            : updateImageOpacity(newState.currentSlideIndex)

        return {
            ...newState,
            slideShowItems
        };
    }

    function setInitialFadeIn(): AnimationState {
        const newState = { ...state };
        newState.slideShowItems[0].opacity = 1;
        return newState;
    }

    function hideSlide(): AnimationState {
        // this will remove the image on the left (outside the viewport) 
        // to avoid transition to the end of the image queue on the right 
        const newState = { ...state };
        const slideShowItems = newState.slideShowItems.map((item) => {
            item.display = item.position === -100 ? false : true
            return item
        });

        return {
            ...newState,
            slideShowItems
        }
    }

    function updateSlidePosition(index): SlideState[] {
        const indexOfItemWithNegativePosition = index > 0 ? index - 1 : state.slideShowItems.length - 1;
        const positionValues = {
            [indexOfItemWithNegativePosition]: -100,
            [index]: 0,
        }

        return state.slideShowItems.map((image, i) => {
            image.position = positionValues[i] || positionValues[i] === 0 ? positionValues[i] : 100;
            return image;
        })
    }

    function updateImageOpacity(currentSlideIndex: number): SlideState[] {
        return state.slideShowItems.map((item, index) => {
            return {
                ...item,
                opacity: currentSlideIndex === index ? 1 : 0
            };
        });
    }

    function stopSlideShow(): AnimationState {
        const slideShowItems = state.slideShowItems.map((item, index) => {
            return {
                ...item,
                opacity: 0
            };
        });


        return {
            ...state,
            slideShowItems
        }
    }
}

export default slideShowReducer;

