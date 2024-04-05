import { StyleSheet, Text, View } from "react-native";
import React from 'react';

type Props = {
    index: number;
    paginationIndex: number;
};

const Dot = ({index, paginationIndex}: Props) => {
    return <View style={ paginationIndex === index ? styles.dot : styles.dotOpacity} />;
};

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'grey',
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,
    },
    dotOpacity: {
        backgroundColor: 'grey',
        height: 7,
        width: 7,
        marginHorizontal: 2,
        borderRadius: 8,
        opacity: 0.5,
    },
});

export default Dot;