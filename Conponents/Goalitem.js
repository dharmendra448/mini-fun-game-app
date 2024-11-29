import { Pressable, StyleSheet, Text, View } from 'react-native'

function Goalitem(props) {
    return (
        <View style={styles.goalItems}>
            <Pressable android_ripple={{ color: 'pink' }}
                onPress={props.onDelelteItem.bind(this, props.id)}>

                <Text style={styles.goalText} >{props.text}</Text>

            </Pressable>
        </View>)
}
export default Goalitem;
const styles = StyleSheet.create({
    goalItems: {
        margin: 6,
        borderRadius: 10,
        color: 'white',
        backgroundColor: 'blue'
    },
    goalText: {
        fontSize: 14,
        color: 'white',
        padding: 8,

    }
})