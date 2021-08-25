import { StyleSheet, useWindowDimensions, Animated } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



export default Paginator = ({ data, scrollX }) => {

    const { width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
            
                {data.map((_, i) => {
                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp'
                    })

                    return <Animated.View style={[styles.dot, { width: dotWidth }]} key={i.toString()} />
                })}

            </>
        );
    }
}


const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#555555',
        marginHorizontal: 8,
    }
});


