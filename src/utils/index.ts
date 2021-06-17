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

/**
 * @description 传入一个链接返回转换协议后的链接
 * @param link 待转换链接
 * @returns 返回一个转换后的链接
 */
function replaceAgreement(link: string): string {
    return link.replace('http://', 'https://');
}

/**
 * @description 格式数据保留以为小数
 * @param total 待格式化的数据
 * @returns 返回一个字符串 eg： 1.2w
 */
function formatNumber(total: number): string {
    return `${Math.round(total / 10000).toFixed(1)}w`;
}
export {
    viewportWidth,
    viewportHeight,
    wp,
    hp,
    replaceAgreement,
    formatNumber,
};
