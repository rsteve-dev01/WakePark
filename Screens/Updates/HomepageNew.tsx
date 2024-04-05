import React, {useState} from 'react';
import {FlatList, StatusBar, StyleSheet, View, useWindowDimensions} from 'react-native';
import { updates } from '../../data/updates';
import BackImage from '../../component/BackImage';
import RenderItem from '../../component/RenderItem';
import TextInfo from '../../component/TextInfo';
import Pagination from '../../component/Pagination';

const HomepageNew = ({ navigation }) => {
    const {width} = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0);
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            {updates.map((item, index) => {
                return (
                    <View key={index}>
                        {currentIndex === index && <BackImage index={index} item={item} />}
                    </View>
                );
            })}
            <FlatList
                style={{height: width, flexGrow: 0}}
                horizontal={true}
                bounces={false}
                pagingEnabled={true}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                data={updates}
                keyExtractor={(_, index) => `list_item${index}`}
                renderItem={({item, index}) => {
                    return <RenderItem item={item} index={index} />;
                }}
            />
            {updates.map((item, index) => {
                return (
                    <View key={index}>
                        {currentIndex === index && <TextInfo index={index} item={item} />}
                    </View>
                );
            })}
            <Pagination paginationIndex={currentIndex}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default HomepageNew;