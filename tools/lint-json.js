const { cat } = require('shelljs');
require('process')

return IsJsonString(cat(process.argv[3]))

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

