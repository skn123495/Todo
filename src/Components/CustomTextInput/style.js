import {StyleSheet} from 'react-native';
import {dynamicSize} from '../../Constants';

const styles = StyleSheet.create({
  textInput: {
    width: dynamicSize(335),
    borderWidth: 1,
    height: dynamicSize(50),
    borderRadius: dynamicSize(10),
    borderColor: '#c2c2c2',
    alignSelf: 'center',
    marginVertical: dynamicSize(10),
    paddingLeft: dynamicSize(10),
  },
});

export default styles;
