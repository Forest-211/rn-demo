export type RequestAugs = {
    topId: number;
    page: number;
    limit: number;
};

export type Song = {
    albumMid: string;
    cover: string;
    rank: number;
    rankType: number;
    rankValue: string;
    recType: number;
    singerMid: string;
    singerName: string;
    songId: number;
    songType: number;
    title: string;
    uuidCnt: number;
};
