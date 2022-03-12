import React from 'react';
import {View, Text} from 'react-native';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import ListItems from '../../Components/ListItems/ListItems';
import styles from './style';

const Home = props => {
  return (
    <>
      <View style={styles.container}>
        <CustomTextInput />
        <ListItems />
        <View style={styles.circleContainer}>
          <Text style={styles.plus}>+</Text>
        </View>
      </View>
    </>
  );
};

export default Home;
