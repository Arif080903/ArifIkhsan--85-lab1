import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const App = () => {

  const ButtonCostum = ({color, text}) => {
  return(
    <View style={{
      backgroundColor : color,
      width : 120,
      height : 80,
      borderRadius : 20,
      justifyContent : 'center'

    }}>
      <Text style={{
        textAlign : 'center',
        fontSize : 30,
        color : 'white',
        fontWeight : 'bold'
      }}>{text}
      </Text>
    </View>
  )}
  return(
    <View style={{flex : 1}}>
      <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',

      }}>
        <Text style= {{
          fontSize : 50,
          fontWeight: 'bold'
    
        }}>Bag Bird</Text>
      </View>

      
      <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      
      }}>
      <Image source={require('./TokoPedia.png')} /> 
      </View>


      <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      flexDirection : 'row',
      justifyContent : 'space-evenly'

      }}>
        <ButtonCostum color = 'green' text='login' />
        <ButtonCostum color = 'blue' text='SignUp' />


      </View>
      
    </View>
    
  )
}
export default App