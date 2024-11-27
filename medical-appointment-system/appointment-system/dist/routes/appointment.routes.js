"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_handler_1 = require("../handlers/appointment.handler");
exports.default = {
    "POST /pe/system/appointments": appointment_handler_1.createAppointmentHandler,
    "GET /pe/system/appointments": appointment_handler_1.getAppointmentsHandler,
};
