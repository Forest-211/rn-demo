import { replaceAgreement } from '../utils/index';
import http from './http';
import { Banner } from '../types/album';

/**
 * @description 获取数字专辑, 轮播图banner
 */
async function getDigitalAlbumLists() {
    const result = await http.get('/getDigitalAlbumLists');
    const { banner, content } = result.data.response.data;
    const swiper: string[] = [];
    banner.map((item: Banner) => {
        item.picurl = replaceAgreement(item.picurl);
        swiper.push(item.picurl);
    });
    return { banner, content, swiper };
}

export { getDigitalAlbumLists };
