import fetch from "node-fetch";
import SmeeClient from "smee-client";


const getConfigFile = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(process.env.JSONPATH, {
                headers: {
                    'Authorization': 'token ' + process.env.GITHUBTOKEN,
                },
                method: 'GET'
            })
            let data = await response.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

async function startSmeeClients() {
    try {
        let configFile = await getConfigFile();

        const routes = configFile['routes'];

        for (const key in routes) {
            const route = routes[key];

            const smee = new SmeeClient({
                source: route["SMEESOURCE"],
                target: route["HTTPTARGET"],
                logger: console
            });

            smee.start();
        }

    } catch (error) {
        console.log("Error occurred here: ", error);
    }
}


await startSmeeClients();