import http from './http';
import { RequestAugs, Song } from '../types/ranks';
import { replaceAgreement } from '../utils/index';

async function getRanks(args: RequestAugs) {
    const result = await http.get('/getRanks', { params: { ...args } });
    console.log('result:', result);
    const { data } = result.data.response.detail;
    let {
        AdShareContent,
        intro,
        song,
        listenNum,
        musichallTitle,
        frontPicUrl,
    } = data.data;

    // 转换协议
    frontPicUrl = replaceAgreement(frontPicUrl);
    song.map((item: Song) => {
        item.cover = replaceAgreement(item.cover);
    });

    return {
        AdShareContent,
        intro,
        song,
        listenNum,
        musichallTitle,
        frontPicUrl,
    };
}

export { getRanks };
