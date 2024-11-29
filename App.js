import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button, Image } from 'react-native'
import Goalitem from './Conponents/Goalitem'
import Goalinput from './Conponents/Goalinput'

const App = () => {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [addgoal, setAddgoal] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)


  }
  function addgoalHandler(enteredGoalText) {
    setAddgoal(currentGoalInput =>
      [...currentGoalInput, { text: enteredGoalText, id: Math.random().toString() }])
    endAddGoalHandler();

  }
  function deleteGoalHandler(id) {
    setAddgoal(currentGoalInput => {
      return currentGoalInput.filter((goal) => goal.id !== id)
    })
  }
  return (
    <View style={styles.AppContainer}>
      <Button title='Add New Goal' color='red'
        onPress={startAddGoalHandler} />
      <Image style={styles.image} source={require('./assets/images/goal.png')} />
      <Goalinput visible={modalIsVisible}
        onAddGoal={addgoalHandler}
        onCancel={endAddGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={addgoal}
          renderItem={(itemData) => {
            return (
              <Goalitem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelelteItem={deleteGoalHandler} />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true} />
      </View>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  image: {
    width: undefined,
    height: undefined,

  },
  goalContainer: {
    flex: 6
  },
  goalText: {
    fontSize: 18
  },

})