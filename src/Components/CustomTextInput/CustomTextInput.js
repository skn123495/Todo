import React from 'react';
import {TextInput} from 'react-native';
import CONSTANTS from '../../Constants/Constants';
import styles from './style';

const CustomTextInput = props => {
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder={CONSTANTS.SRTING.ENTER_THE_NOTE}
      />
    </>
  );
};

export default CustomTextInput;
