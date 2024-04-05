import { StyleSheet, Text, View } from "react-native";
import { WakeTechUpdates } from "../data/updates";

type Props = {
    item: WakeTechUpdates;
    index: number;
};

const TextInfo = ({item, index}: Props) => {
    return (
        <Text style={styles.text}>{item.title}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 16,
    },
});

export default TextInfo;