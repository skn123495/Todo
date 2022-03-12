import {StyleSheet} from 'react-native';
import {COLORS, dynamicSize} from '../../Constants';
import CONSTANTS from '../../Constants/Constants';

const styles = StyleSheet.create({
  circleContainer: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    backgroundColor: COLORS.PRIMARY,
    borderRadius: dynamicSize(50),
    position: CONSTANTS.ALIGN.ABSOLUTE,
    bottom: dynamicSize(20),
    alignItems: CONSTANTS.ALIGN.CENTER,
    justifyContent: CONSTANTS.ALIGN.CENTER,
    right: dynamicSize(20),
  },
  plus: {color: COLORS.WHITE, fontSize: dynamicSize(25)},
  container: {flex: 1, backgroundColor: COLORS.WHITE},
});

export default styles;
