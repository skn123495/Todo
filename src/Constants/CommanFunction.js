import {Dimensions} from 'react-native';

export const vw = Dimensions.get('window').width / 100;
export const vh = Dimensions.get('window').height / 100;

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 6 scale
const ScaleHeight = SCREEN_HEIGHT / 812;
const ScaleWidth = SCREEN_WIDTH / 375;
const STANDARD_WIDTH = 375;
const CURRENT_WIDTH = SCREEN_WIDTH;
const K = CURRENT_WIDTH / STANDARD_WIDTH;

export const normalizeFont = size => Math.round(size * ScaleWidth);

export const scaleHeight = height => Math.round(height * ScaleHeight);

export const scaleWidth = width => Math.round(width * ScaleWidth);

/**
 *
 * @param {*} size - Size (in numbers) given to width, heigth, paddings
 */
export function dynamicSize(size) {
  return K * size;
}

export default {vh, vw, dynamicSize, normalizeFont, scaleHeight, scaleWidth};
