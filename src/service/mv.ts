import http from './http';
import { MVItem } from '../types/mv';
import { replaceAgreement } from '../utils/index';

/**
 * @description 获取MV标签
 */
async function getMvByTag() {
    const result = await http.get('/getMvByTag');
    const { mvlist } = result.data.response.data;
    mvlist.map(
        (item: MVItem) =>
            (item.picurl = item.picurl
                ? replaceAgreement(item.picurl)
                : mvlist[0].picurl),
    );
    return mvlist;
}

/**
 * @description 获取MV播放信息
 * @param { vid: string } mv的id
 * @returns 返回当前的mv信息
 */
async function getMvPlay(vid: string) {
    const result = await http.get(`/getMvPlay?vid=${vid}`);
    return result;
}

export { getMvByTag, getMvPlay };
