import http from './http';

async function getRecommend() {
    const result = await http('');
    console.log('getRecommend:', result);
}

export { getRecommend };
