import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');

/**
 * @description 根据百分比获取宽度
 * @param percentage 百分比
 * @returns 返回宽度
 */
function wp(percentage: number): number {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

/**
 * @description 根据百分比获取高度
 * @param percentage 百分比
 * @returns 返回高度
 */
function hp(percentage: number): number {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
}
export { viewportWidth, viewportHeight, wp, hp };
