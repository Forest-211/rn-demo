interface ISingerItem {
    id: number;
    mid: string;
    name: string;
}

export type MVItem = {
    listennum: number;
    mv_id: number;
    mvdesc: string;
    mvscore: number;
    mvtitle: string;
    picurl: string;
    pub_date: string;
    publictime: string;
    singer_id: number;
    singer_mid: string;
    singer_name: string;
    singerid: number;
    singermid: string;
    singername: string;
    singers: ISingerItem[];
    vid: string;
};
