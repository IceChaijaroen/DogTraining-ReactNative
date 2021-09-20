import React, { useEffect, useRef, useState } from 'react';
import { View, Animated,Text } from 'react-native';

export default function Progress({ step, steps, height }) {
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width]);

    return (
        <>
            
            <View
                onLayout={(e) => {
                    const newWidth = e.nativeEvent.layout.width;

                    setWidth(newWidth);
                }}
                style={{
                    height,
                    backgroundColor: '#F5F5F5',
                    borderRadius: height,
                    overflow: 'hidden'
                }} >
                <Animated.View
                    style={{
                        height,
                        width: '100%',
                        borderRadius: height,
                        backgroundColor: '#FFB97D',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform: [{
                            translateX: animatedValue
                        }]
                    }}
                />
            </View>
        </>
    )
}