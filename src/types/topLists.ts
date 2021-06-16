export type Item = {
    id: number;
    listenCount: number;
    picUrl: string;
    songList: ISongList[];
    topTitle: string;
    type: number;
};

interface ISongList {
    singername: string;
    songname: string;
}
