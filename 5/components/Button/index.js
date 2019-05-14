//this is going to be a stateless file

import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

function Button({iconName, onPress}){
  return(
    <TouchableOpacity onPress={onPress} onPressOut={onPress}> 
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
} 

Button.PropTypes = {
  iconName : PropTypes.string.isRequired,
  onPress : PropTypes.func.isRequired
};

export default Button;
