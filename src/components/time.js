export function timer() {
    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return day + ".0" + month + " " + hours + ":" + minutes;
}
