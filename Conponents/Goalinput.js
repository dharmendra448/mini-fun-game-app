import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function Goalinput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function addInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addgoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }



    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your goals'
                    onChangeText={addInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goals' onPress={addgoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='red' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Goalinput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        width: '93%',
        padding: 12,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        marginTop: 16,
    },
    button: {
        width: '35%',
        marginHorizontal: 16
    },
    image: {
        width: 140,
        height: 120,
        margin: 20
    }

})
