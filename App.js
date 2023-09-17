
// Install the necessary parts, Native Paper + Numeric Input.
// Check if all units are imported
// Add tunnel to Expo Start otherwise it doesn't WORK

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DarkStyle, LightStyle } from './Styles/Styles';
import NumericInput from 'react-native-numeric-input'
import { RadioButton } from 'react-native-paper';

export default function App() {

  // Make the const values and attach states. Make lambda for switch theme

  const [isEnabled, setIsEnabled] = useState(false)

  const currentStyle = isEnabled ? DarkStyle : LightStyle

  const [weight, setWeight] = useState(0)

  const [bottles, setBottles] = useState(0)

  const [hours, setHours] = useState(0)

  const [index, setIndex] = useState(0)

  const [total, setTotal] = useState(0)

  const genders = [
    // Gender and values
    {gender: 'Male', index: 0.7},
    {gender: 'Female', index: 0.6}
  ]
 // Gender const table to be rendered later
  const genderTable = genders.map(g => <View key={g.gender} style={currentStyle.radioButtonsGroup}><RadioButton uncheckedColor={currentStyle.uncheckedColor} color={currentStyle.color} value={g.index}/><Text style={currentStyle.radioTitle}>{g.gender}</Text></View>)

    function calculate() {
      // Calculate the values 

    if (weight <= 0 || weight == '' || weight > 200) {
      return alert('Insert weight!')
    }

    if (index < 0.6) {
      return alert('Choose the gender')
    }
  
    else{
      const litres = bottles * 0.33

      const grams = litres * 8 * 4.5

      const weight = weight.toString().replace(/,/g, '.') 

      const burned = parseFloat(weight) / 10

      const grams_left = grams - burned * hours

      if (grams_left < 0) {
        setTotal(0)
      }

      else {
        setTotal(grams_left/(weight * index))
    }
    }
  }

  return (

    // Add scroll view and switch
    <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
    <View style={currentStyle.container}>
      <Switch
      style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
      value={isEnabled}
      onValueChange={() => {setIsEnabled(prev => !prev), console.log('style switched')}}
      thumbColor={isEnabled ? currentStyle.color : currentStyle.color}
      trackColor={{true: currentStyle.trackColor, false: currentStyle.trackColor}}
    
      />
      <Text style={currentStyle.header}>Alcometer</Text>
      

      
      <TextInput 
      //Text input values
      style={currentStyle.input}
      onChangeText={w => {setWeight(w), console.log(w)}}
      placeholder='Add your weight'
      keyboardType='numeric'
      placeholderTextColor={currentStyle.color}/>
      
      <Text style={currentStyle.title}>Bottles</Text>
      
      <NumericInput
      // Choose numeral type, hours first then bottles.
        valueType='real'
        rounded
        iconStyle={currentStyle.icon}
        minValue={0}
        maxValue={99}
        borderColor={currentStyle.borderColor}
        textColor={currentStyle.color}
        onChange={b => {setBottles(b), console.log(b)}} 
      />
      
      <Text style={currentStyle.title}>Hours</Text>
    
      
      <NumericInput
        valueType='real'
        rounded
        iconStyle={currentStyle.icon}
        minValue={0}
        maxValue={99}
        borderColor={currentStyle.borderColor}
        textColor={currentStyle.color}
        onChange={h => {setHours(h), console.log(h)}} 
      />
      
      <RadioButton.Group 
        value={index}
        onValueChange={i => {setIndex(i), console.log(i)}}
      >
        {genderTable}
      </RadioButton.Group>
      {total.toFixed(2) <= 0.3 && 
      <Text style={[currentStyle.header, {color: '#0fdd35'}]}>{total.toFixed(2)}</Text>
      }
      {total.toFixed(2) >= 0.3 && total.toFixed(2) <= 0.6 &&
      <Text style={[currentStyle.header, {color: '#f96f06'}]}>{total.toFixed(2)}</Text>
      }
      {total.toFixed(2) > 0.6 && 
      <Text style={[currentStyle.header, {color: '#f90a06'}]}>{total.toFixed(2)}</Text>
      }
      <TouchableOpacity onPress={calculate}>
        <Text style={currentStyle.calculate}>CALCULATE</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}