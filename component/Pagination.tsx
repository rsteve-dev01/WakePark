import { StyleSheet, Text, View } from "react-native";
import React from 'react';
import { updates } from "../data/updates";
import Dot from "./Dot";

type Props = {
    paginationIndex: number;
};

const Pagination = ({paginationIndex}: Props) => {
    return(
        <View style={styles.container}>
            {updates.map((_, index) => {
                return <Dot index={index} key={index} paginationIndex={paginationIndex}/>
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Pagination;