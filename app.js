const { exec } = require('node:child_process');

const init = async () => {
    const length = process.argv.length;
    exec(`node ./dist/js/examples/${process.argv[length - 1]}`, (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
}

init();
