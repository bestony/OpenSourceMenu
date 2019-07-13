const { rm,cd, cp, mkdir, exec,ShellString,cat,ls,pwd } = require('shelljs');
const chalk = require('chalk');

// Task One: Build Community Data

cd("data/community");

console.log(chalk.red("Work Path:",pwd().toString()));
ls("-d","*").forEach((item) => {
    // enter area directory 
    cd(item)
    // get CountryInfo
    let countryInfo = JSON.parse(cat('meta.json'))
    countryInfo.areas = [];
    ls("-d","*").forEach(item => {
        if(item !== 'meta.json'){
            delete dataInfo 
            cd(item)
            var dataInfo = JSON.parse(cat('meta.json'));
            dataInfo.items = []
            ls("-d","*").forEach(item=>{
                if(item !== 'meta.json'){
                    delete dataItem
                    var dataItem = JSON.parse(cat(item));
                    dataInfo.items.push(dataItem)
                }
            })
            countryInfo.areas.push(dataInfo)
            cd("..")
        }
    })
    var communityData = new ShellString(JSON.stringify(countryInfo));
    cd("../../..")
    communityData.to('public/new_communityData.json')
    delete countryInfo;

});
