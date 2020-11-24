import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

const SwipeUp = ({ children, style : inheritedStyling }) => {
    const swipeUpAnimation = useRef(new Animated.Value(50)).current;

    useEffect(() => {
        Animated.timing(swipeUpAnimation, {
            toValue : 0,
            duration : 500,
            useNativeDriver : true
        }).start();
    }, []);

    return (
        <Animated.View style={{
            ...inheritedStyling,
            transform : [{
                translateY : swipeUpAnimation
            }]
        }}>
            { children }
        </Animated.View>
    )
}

export default SwipeUp;