import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {WakeTechUpdates} from '../data/updates';

type Props = {
    index: number;
    item: WakeTechUpdates;
};

const BackImage = ({index, item}: Props) => {
    const {width} = useWindowDimensions();
    return (
        <Image 
            source={item.image} 
            style={[
                StyleSheet.absoluteFillObject, 
                {
                    width: width,
                    height: width,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({});

export default BackImage;