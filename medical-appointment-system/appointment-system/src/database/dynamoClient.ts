import AWS from "aws-sdk";

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export default dynamoDb;
