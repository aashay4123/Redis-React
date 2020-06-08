"use strict";

const emojis = ["😄", "😃", "😀", "😊", "😉", "😍", "🔶", "🔷", "🚀"];

module.exports.batch = (event, context, callback) => {
  const rank = event.queryStringParameters.batch;
  const rankEmoji = emojis[rank > emojis.length - 1 ? emojis.length - 1 : rank];
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      // Accept: "application/octet-stream", //api
    },
    body: JSON.stringify({
      message: "batch generated!",
      input: rankEmoji,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
