const fetch = require('node-fetch');
const osmosis = require('osmosis');
const chalk = require('chalk');

function getProxies (url) {
    return new Promise ((resolve ,reject) => {
        let results = [];
        osmosis
        .get(url)
       .find('tr[@class="cells"]')   
        .set({
            IP: 'td[2]',
            Port: 'td[3]',
            Type: 'td[4]'
        })
        .data(item => {
            results.push(item);
            console.log(item);
        })
        .done(() => resolve(results));
    });
}


const start = async () => {
    let urls = ["https://list.proxylistplus.com/SSL-List-1" , "https://list.proxylistplus.com/SSL-List-2"];
    let allProxies = [];
    urls.forEach(url => console.log(url));
    urls.forEach(url => {
            getProxies(url).then(data => data.forEach(item => console.log(chalk.green(item))) )
        });

}

start();
