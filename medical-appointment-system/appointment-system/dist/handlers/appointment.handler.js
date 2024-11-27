"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointmentsHandler = exports.createAppointmentHandler = void 0;
const appointment_service_1 = require("../services/appointment.service");
const response_helper_1 = require("../utils/response.helper");
const createAppointmentHandler = async (event) => {
    try {
        const data = JSON.parse(event.body);
        console.log(data);
        // const appointementValid: CreateAppointmentDto =
        //   validateCreateAppointment(data);
        const result = await (0, appointment_service_1.createAppointment)(data);
        return (0, response_helper_1.createResponse)(201, "Appointment created successfully", result);
    }
    catch (error) {
        console.error(error);
        return (0, response_helper_1.createResponse)(400, error.message);
    }
};
exports.createAppointmentHandler = createAppointmentHandler;
const getAppointmentsHandler = async (event) => {
    try {
        const result = await (0, appointment_service_1.getAppointmentsByQuery)("");
        return (0, response_helper_1.createResponse)(200, "Appointments retrieved successfully", result);
    }
    catch (error) {
        throw error;
    }
};
exports.getAppointmentsHandler = getAppointmentsHandler;
