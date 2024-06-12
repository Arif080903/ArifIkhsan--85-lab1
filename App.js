import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import ButtonCostum from './Component/Button/Button'

const App = () => {
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