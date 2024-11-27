"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
const createResponse = (statusCode, message, data) => ({
    statusCode,
    body: JSON.stringify({ message, data }),
});
exports.createResponse = createResponse;
