import {StyleSheet} from 'react-native';
import {COLORS, dynamicSize} from '../../Constants';
import CONSTANTS from '../../Constants/Constants';

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: CONSTANTS.ALIGN.ROW,
    backgroundColor: COLORS.GRAY,
    width: dynamicSize(330),
    minHeight: dynamicSize(55),
    borderRadius: dynamicSize(10),
    alignItems: CONSTANTS.ALIGN.CENTER,
    justifyContent: CONSTANTS.ALIGN.SPACE_BETWEEN,
    paddingHorizontal: dynamicSize(15),
    alignSelf: CONSTANTS.ALIGN.CENTER,
  },
  fRow: {flexDirection: 'row'},
  pL10: {paddingLeft: dynamicSize(10)},
});

export default styles;
