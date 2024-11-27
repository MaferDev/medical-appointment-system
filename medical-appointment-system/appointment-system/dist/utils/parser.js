"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseErrorToString = exports.parseToString = void 0;
const parseToString = (value) => {
    switch (typeof value) {
        case "object":
            return JSON.stringify(value);
        case "undefined":
            return "";
        default:
            return `${value}`;
    }
};
exports.parseToString = parseToString;
const parseErrorToString = (error) => {
    return error instanceof Error ? error.toString() : (0, exports.parseToString)(error);
};
exports.parseErrorToString = parseErrorToString;
