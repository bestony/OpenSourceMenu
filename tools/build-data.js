const { rm,cd, cp, mkdir, exec,ShellString,cat,ls,pwd } = require('shelljs');
const chalk = require('chalk');

// Task Zero: mkdir

mkdir("-p","public/data/community");



// Task One: Copy Images

cp('-R','data/images','public/data/images');
console.log(chalk.green("Image File Copy Done"));
// Task Two: Build Community Data

cd("data/community");

console.log(chalk.red("Work Path:",pwd().toString()));
ls("-d","*").forEach((item) => {
    console.log(chalk.yellow("Build For Region:",item));
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
                    console.log(chalk.blue("Build For",item));
                    delete dataItem
                    var dataItem = JSON.parse(cat(item));
                    dataInfo.items.push(dataItem)
                }
            })
            countryInfo.areas.push(dataInfo)
            cd("../")
        }
    })
    var communityData = new ShellString(JSON.stringify(countryInfo));
    cd("..")
    communityData.to(`../../public/data/community/${item}.json`)
    delete countryInfo;
});

console.log(chalk.green("Data Generate Done"));
