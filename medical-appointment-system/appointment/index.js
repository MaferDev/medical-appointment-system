const { handler } = require("./src/index");
const _ = require("lodash");

const parse = async (event, context) => {
  try {
    if (
      event.queryStringParameters != null &&
      !_.isEmpty(event.queryStringParameters) &&
      event.queryStringParameters.u
    ) {
      const r = await handler(event, context);

      return {
        statusCode: r.statusCode ? r.statusCode : 200,
        body: JSON.stringify(r),
        headers: {
          "Access-Control-Allow-Origin": "*",
          //   "X-Frame-Options": "SAMEORIGIN",
          "X-Content-Type-Options": "nosniff",
        },
        isBase64Encoded: false,
      };
    }

    return {
      statusCode: 403,
      body: "xxx",
      headers: {
        "Access-Control-Allow-Origin": "*",
        // "X-Frame-Options": "SAMEORIGIN",
        "X-Content-Type-Options": "nosniff",
      },
      isBase64Encoded: false,
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      isBase64Encoded: false,
    };
  }
};

exports.handler = parse;
