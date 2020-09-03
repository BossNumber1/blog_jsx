export function timer() {
    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
    const hours = now.getHours();
    const minutes =
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    return "Создано " + day + ".0" + month + " в " + hours + ":" + minutes;
}
