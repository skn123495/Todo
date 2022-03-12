import {Text, View, Image} from 'react-native';
import React from 'react';
import ImagePath from '../../Constants/ImagePath';
import styles from './style';
const ListItems = () => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.fRow}>
        <Image source={ImagePath.CHECKBOX_UNSELECT} />
        <Text style={styles.pL10}>ListItems</Text>
      </View>
      <View style={styles.fRow}>
        <Image source={ImagePath.PEN} />
        <Image source={ImagePath.TRASH} />
      </View>
    </View>
  );
};

export default ListItems;
