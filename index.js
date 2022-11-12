const SmeeClient = require('smee-client')

function getValue(data) {
  const routes = data.routes;

  for(const key in routes) {
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

const myHeaders = new Headers({
  'Authorization': 'token ' + process.env.GITHUBTOKEN,
});

fetch(process.env.JSONPATH, {
  headers: myHeaders,
  method: 'GET'
}).then(response => response.json())
    .then(data => getValue(data));

