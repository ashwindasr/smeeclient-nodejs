const SmeeClient = require('smee-client')

fetch(process.env.JSONPATH, {
    headers: {
        'Authorization': 'token ' + process.env.GITHUBTOKEN,
    },
    method: 'GET'
}).then(response => response.json())
    .then(data => getValue(data));

function getValue(data) {
    const routes = data.routes;

    for (const key in routes) {
        const value = routes[key];
        const smeeSource = value["SMEESOURCE"];
        const httpTraget = value["HTTPTARGET"];


        const smee = new SmeeClient({
            source: smeeSource,
            target: httpTraget,
            logger: console
        });

        smee.start();
    }
}