const fs = require('fs')

exports.copyText = function () {
    let fullText;

    fs.readFile('file1.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            fullText = data;
            fs.writeFile('file2.txt', fullText, function (err) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('seccus')
                }
            })
        }
    })
}