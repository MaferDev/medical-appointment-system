"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAppointment = async (appointment) => {
    const TABLE_NAME = `${process.env.COUNTRY}-appointments`;
    console.log("createAppointmentDB: ", TABLE_NAME, appointment);
    return {};
};
exports.default = {
    createAppointment,
};
