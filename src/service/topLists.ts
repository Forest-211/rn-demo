import { Item } from '../types/topLists';
import http from './http';

async function getTopLists(page: number = 1) {
    const result = await http.get('/getTopLists', { params: { page } });
    const { topList }: { topList: Item[] } = result.data.response.data;
    topList.map(
        (item: Item) =>
            (item.picUrl = item.picUrl.replace('http://', 'https://')),
    );
    return topList;
}

export { getTopLists };
