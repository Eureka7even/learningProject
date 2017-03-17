/**
 * @author eureka7even <eureka7even@hotmail.com>
 * date 3/17/2017
 * Module dependencies
 */
const fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout

fs.readdir(__dirname, (err, files) => {
    console.log('');

    if (!files.length) {
        return console.log('    \033[31m No files to show!\033[39m\n]')
    }

    console.log('    Select which file or directory you want to see\n');


    /**
     * @description 遍历文件列表并展示在命令行
     * @method file
     * @param {number} i 
     */
    const file = (i) => {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, (err, stat) => {
            if (stat.isDirectory()) {
                console.log('    ' + i + '   \033[36m' + filename + '/\033[39m');
            } else {
                console.log('    ' + i + '   \033[90m' + filename + '\033[39m')
            }

            i++;
            if (i == files.length) {
                read();

            } else {
                file(i);
            }
        });
    }
    const read = () => {
        console.log('');
        stdout.write('   \033[33mEnter your choice: \033[39m');　
        stdin.resume();
    }
    file(0);
})