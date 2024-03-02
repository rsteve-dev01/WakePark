/* import React from 'react';
import { View, Text } from 'react-native';

export const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text>Homepage</Text>
        </View>
    );
}

export default HomePage;
*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Homepage</Text>
            <Image
                source={require('/Users/shreyamukherjee/Documents/WakeTech/Spring_2024/CSC289/WakePark/images/homepage_pic.png')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'top',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
});

export default HomePage;
