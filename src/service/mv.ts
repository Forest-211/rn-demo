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
    // console.log('result:', mvlist);
}

export { getMvByTag };
