import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'
import ButtonCostum from './Component/Button/Button'

const App = () => {
  const TextInputCostum = ({name, color}) =>{
    return(
      <TextInput
      placeholder={`Masukkan ${name}`}
      style={{
        height: 50,
        width : 400,
        borderColor : 'gray',
        borderWidth : 1,
        color : color,
        padding : 10,
        margin : 10,
        borderRadius : 10,
        paddingLeft : 10

      }}
      />

    )
  }
  return(
    <View style = {{
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center'
    }}>
     <TextInputCostum name = "nama" color = "black"></TextInputCostum>
     <TextInputCostum name = "Email" color = "red"></TextInputCostum>
     <TextInputCostum name = "password" color = "black"></TextInputCostum>
    </View>
    
  )
}
export default App