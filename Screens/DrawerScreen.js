import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-end", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924"/>
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.text}>{this.props.name} Screen</Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}