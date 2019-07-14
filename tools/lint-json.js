const { cat,find,cd } = require('shelljs');

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
    if(!IsJsonString(cat(item))){
        console.log("Error Parse JSON:",item);
        return 1
    }
})
console.log("JSON Validate Done")
