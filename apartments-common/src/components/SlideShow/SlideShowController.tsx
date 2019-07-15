import React, { useEffect, useState } from 'react';

import { SlideShowProps } from './types/SlideShowProps.type';
import useSlideShowStateHandler from './state/SlideShowStateHandler';

const useSlideShowController = (props: SlideShowProps) => {

    const {
        slides,
        transitionTime,
        slideStayTime,
        startWithFadeIn
    } = props;

    const {
        animationState,
        initialiseState,
        resetSlidesPosition,
        setInitialFadeIn,
        stopSlideShow,
        updateSlideIndex,
        hideSlide
    } = useSlideShowStateHandler(props);

    const [stateInitialised, setStateInitialised] = useState(false);
    const [slideShowOn, setSlideShowOn] = useState(false);


    useEffect(() => {
        if (!stateInitialised && animationState.slideShowItems) {
            setStateInitialised(true);
        }
    }, [animationState]);

    useEffect(() => {
        stateInitialised && startAnimation()
    }, [stateInitialised]);

    useEffect(() => {
        let timeout, interval;
        if (slideShowOn) {
            interval = setInterval(() => {
                updateSlideIndex();
                timeout = setTimeout(() => {
                    hideSlide()
                }, transitionTime * 1000);
            }, slideStayTime);
        }
        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, [slideShowOn])

    const startAnimation = () => {
        if (startWithFadeIn) {
            setTimeout(() => {
                setInitialFadeIn();
                setSlideShowOn(true)
            }, 100);
        } else {
            setSlideShowOn(true)
        }
    }

    const stopAnimation = () => {
        stopSlideShow();
        setSlideShowOn(false);
    }

    useEffect(() => {
        let timeouts = [];
        if (slidesUpdated()) {
            timeouts = [stopAnimation(), restartAnimation()];
        }
        return () => timeouts.map(t => clearTimeout(t));
    }, [slides]);

    const restartAnimation = () => {
        const resetSlidesPositionTimeout = setTimeout(() => {
            resetSlidesPosition();
        }, 1000);

        const restartAnimationTimeout = setTimeout(() => {
            initialiseState()
            startAnimation();
        }, 2000)

        return [resetSlidesPositionTimeout, restartAnimationTimeout]
    }

    const slidesUpdated = (): boolean => {
        return !!animationState.slideShowItems;
    }

    return {
        slideShowItems: animationState.slideShowItems
    }
}

export default useSlideShowController;