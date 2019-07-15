import React, { useEffect } from 'react';

import './SlideShow.scss';

import { SlideShowProps } from './types/SlideShowProps.type';
import useSlideShowController from './SlideShowController';
import { SlideShowTypes } from './enums/SlideShowTypes.enum';
import { TransitionTypes } from './enums/TransitionTypes.enum';
import { SlideState } from './types/SlideState.type';

const SlideShow = ({
    slides = [],
    slideShowType = SlideShowTypes.FadeInOut,
    transitionType = TransitionTypes.easeInOut,
    transitionTime = 0.7,
    slideStayTime = 3000,
    startWithFadeIn = false }: SlideShowProps): JSX.Element => {

    const { slideShowItems } = useSlideShowController({
        slides,
        slideShowType,
        transitionTime,
        slideStayTime,
        startWithFadeIn
    });

    const transitionSettings = {
        transition: `transform ${transitionTime}s ${transitionType},
                     opacity ${transitionTime}s ${transitionType}`
    };

    const getAnimationStyles = (item: SlideState) => {
        const animationStyles = {
            [SlideShowTypes.SlideLeft]: {
                transform: `translateX(${item.position}vw)`,
                display: item.display ? 'block' : 'none',
                opacity: item.opacity,
                ...transitionSettings,
            },
            [SlideShowTypes.FadeInOut]: {
                opacity: item.opacity,
                ...transitionSettings
            }

        }

        return animationStyles[slideShowType];
    }

    return (
        <div className="slide-show-container">
            {slideShowItems ? slideShowItems.map((item, index) => {
                return (
                    <img
                        key={index}
                        src={item.file.path}
                        alt='alt text'
                        className="slide-show-item"
                        style={getAnimationStyles(item)}
                    />
                )
            }): null}
        </div>
    )
}

export default SlideShow;



