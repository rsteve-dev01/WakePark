import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { WakeTechUpdates } from "../data/updates";

type Props = {
    item: WakeTechUpdates;
    index: number;
};

const RenderItem = ({item, index}: Props) => {
    const {width} = useWindowDimensions();
    return(
        <View style={{width:width, height:width}}>
            <Image source={item.logo} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 100,
        width: null,
        resizeMode: 'contain',
    }
});

export default RenderItem;