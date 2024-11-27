"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamoClient_1 = __importDefault(require("./dynamoClient"));
const getPatient = async (document) => {
    const TABLE_NAME = `${process.env.COUNTRY}-patient`;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            document,
        },
    };
    try {
        const result = await dynamoClient_1.default.get(params).promise();
        if (result.Item) {
            console.log("Patient:", result.Item);
            return result.Item;
        }
        else {
            console.log("Patient not found");
            return null;
        }
    }
    catch (error) {
        console.error("Error retrieving Patient item:", error);
        throw error;
    }
};
exports.default = {
    getPatient,
};
