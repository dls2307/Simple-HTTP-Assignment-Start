const text = require('./textResponses');

const getHelloJson = (request, response) => {
  const helloJson = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJson = (request, response) => {
  const timeJson = {
    message: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports.getHelloJson = getHelloJson;
module.exports.getTimeJson = getTimeJson;
