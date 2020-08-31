export const successDownloadImgHandler = (e, callback) => {
    e.persist();

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    async function Main() {
        const file = e.target.files[0];
        return await toBase64(file);
    }

    Main()
        .then((result) => {
            callback({
                successSelectFile: e.target.files[0].name,
                fileImg: result,
            });
        })
        .catch(console.log);
};
