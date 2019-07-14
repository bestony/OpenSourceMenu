const { cat,find,pwd,cd } = require('shelljs');

// require('process')

// return IsJsonString(cat(process.argv[3]))

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

cd("./data")
find('.').filter(file => {
    return file.match(/\.json$/);
}).forEach(item => {
    if(!IsJsonString(item)){
        return 1
    }
})
