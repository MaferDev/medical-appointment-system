"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./utils/logger");
const response_helper_1 = require("./utils/response.helper");
const logger = new logger_1.Logger({
    serviceName: "AppointmentService",
    logLevel: logger_1.LogLevel.DEBUG, // Ajusta según el entorno
});
const handler = async (event) => {
    const routeKey = `${event.httpMethod} ${event.path}`;
    const routeHandler = routes_1.default[routeKey];
    const pathSplited = event.path.split("/");
    process.env.COUNTRY = pathSplited[1];
    console.log("COUNTRY: ", process.env.COUNTRY);
    try {
        logger.info("Lambda invocation started", routeKey);
        if (routeHandler) {
            return routeHandler(event);
        }
        return (0, response_helper_1.createResponse)(404, "Route not found");
    }
    catch (error) {
        return (0, response_helper_1.createResponse)(500, "Internal Server Error");
    }
};
exports.handler = handler;
