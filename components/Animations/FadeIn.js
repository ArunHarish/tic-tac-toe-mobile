import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const FadeIn = ( { children, style : inheritedStyling }) => {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let animationTimeline = Animated.timing(animation, {
            toValue : 1,
            duration : 500,
            useNativeDriver : true
        });

        animationTimeline.start();
    }, [animation]);


    return (
        <Animated.View style={{
            ...inheritedStyling,
            opacity : animation
        }}>
            { children }
        </Animated.View>
    );
}

export default FadeIn;