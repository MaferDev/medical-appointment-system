"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentStatus = void 0;
const dynamoClient_1 = __importDefault(require("./dynamoClient"));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["REGISTERED"] = "REGISTERED";
    AppointmentStatus["ASSIGNED"] = "ASSIGNED";
    AppointmentStatus["COMPLETED"] = "COMPLETED";
})(AppointmentStatus = exports.AppointmentStatus || (exports.AppointmentStatus = {}));
const createAppointment = async (appointment) => {
    const TABLE_NAME = `${process.env.COUNTRY}-appointments`;
    const params = {
        TableName: TABLE_NAME,
        Item: appointment,
    };
    const response = await dynamoClient_1.default.put(params).promise();
    console.log("createAppointmentDB: ", TABLE_NAME, { response });
    return appointment;
};
const getAppointmentById = async (id) => {
    const TABLE_NAME = `${process.env.COUNTRY}-appointments`;
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id,
        },
    };
    try {
        const result = await dynamoClient_1.default.get(params).promise();
        if (result.Item) {
            console.log("Appointment:", result.Item);
            return result.Item;
        }
    }
    catch (error) {
        console.error("Error retrieving apointment item:", error);
    }
    return null;
};
exports.default = {
    createAppointment,
    getAppointmentById,
};
