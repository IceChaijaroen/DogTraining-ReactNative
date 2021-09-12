import * as React from "react"
import { Animated, TouchableOpacity, View ,Text } from "react-native"

function Tab({ label }) {
    return (
        <>
            <View style={{ flex: 1 }}>
                <Text>{label}</Text>
            </View>
        </>
    )
}

export default Tab