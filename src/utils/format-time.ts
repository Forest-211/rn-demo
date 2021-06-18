function formartTime(time: number) {
    const hour = Math.floor(time / 3600);
    const min = Math.floor(time / 60) % 60;
    const sec = Math.ceil(time % 60);
    return time > 3600
        ? `${zero(hour)}:${zero(min)}:${zero(sec)}`
        : `${zero(min)}:${zero(sec)}`;
}

function zero(num: number) {
    return num < 10 ? `0${num}` : num;
}

export { formartTime };
